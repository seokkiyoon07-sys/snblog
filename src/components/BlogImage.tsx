import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function BlogImage({ src, alt, caption }: BlogImageProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        className="rounded-xl shadow-md mx-auto"
      />
      {caption && (
        <figcaption className="text-center text-gray-500 mt-2 text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
