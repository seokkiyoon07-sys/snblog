import React from 'react';

export default function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="my-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
            {children}
        </section>
    );
}
