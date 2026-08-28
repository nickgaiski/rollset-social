import type { SVGProps } from 'react';

/**
 * The Slate Mark — three bars of descending opacity (the "set") with an
 * angled clapper line (the "roll"). Exact brand geometry; do not restyle.
 */
export default function AppLogoIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            {...props}
        >
            <rect
                x="1"
                y="1"
                width="58"
                height="58"
                rx="14"
                stroke="#232329"
                strokeWidth="1"
            />
            <rect
                x="12"
                y="38"
                width="36"
                height="6"
                rx="2"
                fill="#F5C97A"
                opacity="0.9"
            />
            <rect
                x="12"
                y="27"
                width="36"
                height="6"
                rx="2"
                fill="#F5C97A"
                opacity="0.45"
            />
            <rect
                x="12"
                y="16"
                width="36"
                height="6"
                rx="2"
                fill="#F5C97A"
                opacity="0.18"
            />
            <line
                x1="12"
                y1="16"
                x2="30"
                y2="22"
                stroke="#F5C97A"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.7"
            />
            <line
                x1="30"
                y1="22"
                x2="48"
                y2="16"
                stroke="#F5C97A"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.35"
            />
        </svg>
    );
}
