export default function YouTubeEmbed({ 
  id, 
  title, 
  caption 
}: {
  id: string; 
  title?: string; 
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title ?? "YouTube video"}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

