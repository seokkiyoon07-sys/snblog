import React from 'react';

export default function FeatureList({ features }: { features: string[] }) {
    return (
        <ul className="space-y-2 my-6">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <svg
                        className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                </li>
            ))}
        </ul>
    );
}
