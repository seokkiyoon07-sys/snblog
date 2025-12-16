
import React from 'react';

interface YouTubeEmbedProps {
    url: string;
    title?: string;
}

export default function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
    const getVideoId = (url: string) => {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getVideoId(url);

    if (!videoId) return null;

    return (
        <div className="my-8 rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title || 'YouTube video player'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            />
        </div>
    );
}
