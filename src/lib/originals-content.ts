function isBlockElement(block: string): boolean {
  const trimmed = block.trim();

  return (
    trimmed === '' ||
    trimmed.startsWith('<') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('---') ||
    trimmed.startsWith('- ') ||
    trimmed.startsWith('> ')
  );
}

function isStandaloneSectionHeading(line: string): boolean {
  return /^#{2,4}\s(?:.*?(?:작품의 배경과 의미|문학적 특징|문학사적 의의|작품 감상 포인트|현대적 의미|수능 출제 포인트|영상 하이라이트|문학 감상의 진정한 즐거움|함께 보면 좋은 작품))\s*$/.test(
    line.trim()
  );
}

function splitReadableParagraph(block: string): string {
  const normalized = block.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();

  if (normalized.length < 180) {
    return normalized;
  }

  const sentences = normalized
    .split(/(?<=[.!?]["'”’」』]*)\s+/)
    .map(sentence => sentence.trim())
    .filter(Boolean);

  if (sentences.length < 3) {
    return normalized;
  }

  const chunks: string[] = [];
  let current = '';

  sentences.forEach(sentence => {
    const next = current ? `${current} ${sentence}` : sentence;

    if (next.length > 140 && current) {
      chunks.push(current);
      current = sentence;
      return;
    }

    current = next;
  });

  if (current) {
    chunks.push(current);
  }

  return chunks.join('\n\n');
}

function normalizeOriginalsSections(content: string): string {
  return content
    .replace(
      /^(\s*#{2,4}\s(?:.*?(?:작품의 배경과 의미|문학적 특징|문학사적 의의|작품 감상 포인트|현대적 의미|수능 출제 포인트|영상 하이라이트|문학 감상의 진정한 즐거움|함께 보면 좋은 작품)))\s+(.+)$/gm,
      '$1\n\n$2'
    )
    .replace(/([^\n])\s+(#{2,4}\s)/g, '$1\n\n$2')
    .replace(
      /(#{2,4}\s(?:[^\n]*?(?:작품의 배경과 의미|문학적 특징|문학사적 의의|작품 감상 포인트|현대적 의미|수능 출제 포인트|영상 하이라이트|문학 감상의 진정한 즐거움|함께 보면 좋은 작품)))\s+/g,
      '$1\n\n'
    )
    .replace(/(\*\*[^*\n]+\*\*)\s+(?=-\s)/g, '$1\n\n')
    .replace(/([.!?]["'”’」』]*)\s+(?=\d+\.\s)/g, '$1\n\n')
    .replace(/([.!?]["'”’」』]*)\s+(?=-\s)/g, '$1\n\n')
    .replace(/([^\n])\s+(?=\d+\.\s)/g, '$1\n')
    .replace(/(\d+\.\s[^0-9\n]+?)\s+(?=\d+\.\s)/g, '$1\n')
    .replace(/(\d+\.\s\*\*[^*\n]+\*\*:[^\n]+?)\s+(?=\d+\.\s\*\*)/g, '$1\n')
    .replace(/(-\s\*\*[^*\n]+\*\*:[^\n]+?)\s+(?=-\s\*\*)/g, '$1\n')
    .replace(/([^\n])\s+(?=-\s\*\*)/g, '$1\n')
    .replace(/([^\n])\s+(?=-\s[가-힣A-Za-z])/g, '$1\n')
    .replace(/(##\s[^\n]+)\s+(?=\*\*)/g, '$1\n\n');
}

function mergeWrappedListLines(content: string): string {
  return content
    .split('\n')
    .reduce<string[]>((lines, line) => {
      const trimmed = line.trim();
      const previous = lines[lines.length - 1]?.trim() || '';
      const previousIsList = /^-\s/.test(previous) || /^\d+\.\s/.test(previous);
      const currentIsContinuation =
        trimmed !== '' &&
        !trimmed.startsWith('<') &&
        !trimmed.startsWith('#') &&
        !trimmed.startsWith('- ') &&
        !/^\d+\.\s/.test(trimmed) &&
        !trimmed.startsWith('> ') &&
        !trimmed.startsWith('---');

      if (previousIsList && currentIsContinuation) {
        lines[lines.length - 1] = `${lines[lines.length - 1]} ${trimmed}`;
        return lines;
      }

      lines.push(line);
      return lines;
    }, [])
    .join('\n');
}

export function formatReadableOriginalsContent(content: string): string {
  const normalizedHeadings = mergeWrappedListLines(
    normalizeOriginalsSections(content)
  )
    .replace(/^(#{1,4}\s[^\n]+)\n(?!\n|<|#|- |>)([^\n]+)$/gm, '$1 $2')
    .replace(/(\*\*)\s+(#{2,4}\s)/g, '$1\n\n$2')
    .replace(/([.!?]["'”’」』]*)\s+(#{2,4}\s)/g, '$1\n\n$2');

  const mergedLines = normalizedHeadings
    .split('\n')
    .reduce<string[]>((lines, line) => {
      const trimmed = line.trim();
      const previous = lines[lines.length - 1]?.trim() || '';
      const previousIsHeading = /^#{1,4}\s/.test(previous);
      const previousIsStandaloneSectionHeading =
        isStandaloneSectionHeading(previous);
      const currentIsContinuation =
        trimmed !== '' &&
        !trimmed.startsWith('<') &&
        !trimmed.startsWith('#') &&
        !trimmed.startsWith('- ') &&
        !/^\d+\.\s/.test(trimmed) &&
        !trimmed.startsWith('> ') &&
        !trimmed.startsWith('---');

      if (
        previousIsHeading &&
        !previousIsStandaloneSectionHeading &&
        currentIsContinuation
      ) {
        lines[lines.length - 1] = `${lines[lines.length - 1]} ${trimmed}`;
        return lines;
      }

      lines.push(line);
      return lines;
    }, []);

  return mergedLines
    .join('\n')
    .split('\n\n')
    .map(block => {
      if (isBlockElement(block)) {
        return block;
      }

      return splitReadableParagraph(block);
    })
    .join('\n\n');
}
