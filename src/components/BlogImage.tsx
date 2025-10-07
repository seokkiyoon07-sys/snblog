import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export default function BlogImage({
  src,
  alt,
  caption,
  priority = false,
}: BlogImageProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full h-auto">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          className="rounded-xl shadow-md mx-auto w-full h-auto object-contain"
          priority={priority}
          quality={85}
        />
      </div>
      {caption && (
        <figcaption className="text-center text-gray-500 mt-2 text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
