import React from 'react';

export default function Highlight({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
            {children}
        </div>
    );
}
