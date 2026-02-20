import React from 'react';

const LogoIcon = ({ size = 36 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="bg_gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c38bff" />
                <stop offset="100%" stopColor="#00d1ff" />
            </linearGradient>
            <linearGradient id="bolt_gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="url(#bg_gradient)" />
        <path
            d="M36.5 12L18.5 36H28.5L25.5 52L43.5 28H33.5L36.5 12Z"
            fill="url(#bolt_gradient)"
            stroke="white"
            strokeWidth="1"
            strokeLinejoin="round"
        />
    </svg>
);

export default LogoIcon;
