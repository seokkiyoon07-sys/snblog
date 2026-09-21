const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const data = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../src/data/odyssey-episodes.json'),
    'utf8'
  )
);
const base = process.argv[2] || 'http://localhost:3000';
async function get(url) {
  const response = await fetch(`${base}${url}`);
  assert.equal(response.status, 200, `${url}: status`);
  return response.text();
}
function graphs(html) {
  return [
    ...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
  ].flatMap(match => {
    const object = JSON.parse(match[1]);
    return object['@graph'] || [object];
  });
}
async function run() {
  assert.equal(data.length, 24);
  assert.equal(new Set(data.map(e => e.videoId)).size, 24);
  assert.deepEqual(
    data.map(e => e.episode),
    Array.from({ length: 24 }, (_, i) => i + 1)
  );
  const [history, hub, sitemap, videoMap, robots] = await Promise.all(
    [
      '/history',
      '/history/odyssey',
      '/sitemap.xml',
      '/video-sitemap.xml',
      '/robots.txt',
    ].map(get)
  );
  for (const e of data) {
    assert.ok(
      history.includes(`href="/history/odyssey-${e.episode}"`),
      `history link ${e.episode}`
    );
    assert.ok(
      hub.includes(`href="/history/odyssey-${e.episode}"`),
      `hub link ${e.episode}`
    );
    assert.ok(
      sitemap.includes(`/history/odyssey-${e.episode}</loc>`),
      `sitemap ${e.episode}`
    );
    assert.ok(
      videoMap.includes(`/embed/${e.videoId}`),
      `video sitemap ${e.episode}`
    );
  }
  assert.equal((videoMap.match(/<video:video>/g) || []).length, 24);
  assert.ok(robots.includes('/video-sitemap.xml'));
  assert.ok(sitemap.includes('/history/odyssey</loc>'));
  const list = graphs(hub).find(g => g['@type'] === 'ItemList');
  assert.equal(list.numberOfItems, 24);
  assert.equal(list.itemListElement.length, 24);
  for (let start = 0; start < data.length; start += 4) {
    await Promise.all(
      data.slice(start, start + 4).map(async e => {
        const url = `/history/odyssey-${e.episode}`;
        const html = await get(url);
        assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${url}: h1`);
        assert.match(
          html,
          new RegExp(
            `<link rel="canonical" href="https://blog\\.snacademy\\.co\\.kr${url}"`
          )
        );
        assert.ok(
          html.includes(
            `src="https://www.youtube-nocookie.com/embed/${e.videoId}"`
          ),
          `${url}: player`
        );
        assert.ok(html.includes(e.summary), `${url}: server rendered summary`);
        assert.ok(html.includes(e.point), `${url}: unique reading point`);
        assert.ok(
          !html.includes('name="robots" content="noindex'),
          `${url}: indexable`
        );
        const video = graphs(html).find(g => g['@type'] === 'VideoObject');
        assert.equal(video.uploadDate, e.uploadDate);
        assert.equal(video.duration, `PT${e.durationSeconds}S`);
        assert.equal(video.name, e.videoTitle);
        assert.equal(video.description, e.summary);
        assert.ok(video.thumbnailUrl[0].endsWith(`/odyssey-${e.episode}.jpg`));
        assert.ok(!video.contentUrl, 'No fake video-file URL');
        if (e.episode > 1)
          assert.ok(html.includes('rel="prev"'), `${url}: previous`);
        if (e.episode < 24)
          assert.ok(html.includes('rel="next"'), `${url}: next`);
        const image = await fetch(
          `${base}/images/thumbnail/history/odyssey-${e.episode}.jpg`
        );
        assert.equal(image.status, 200);
        assert.match(image.headers.get('content-type'), /image\/jpeg/);
        console.log(
          `PASS ${url}: SSR, player, schema, canonical, navigation, thumbnail`
        );
      })
    );
  }
  const existing = await get('/history/muo-sahwa-1');
  assert.ok(existing.includes('_8SzklBj-XI'), 'Existing series still works');
  const missing = await fetch(`${base}/history/odyssey-25`);
  assert.equal(missing.status, 404, 'Unknown episode should 404');
  console.log(
    'PASS 24 episodes, collection, history, 2 sitemaps, robots, existing series and unknown episode.'
  );
}
run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
