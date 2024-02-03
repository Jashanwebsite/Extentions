import React from "react";
import "./cssfiles/content.css";
import logoImage from "./jashan.png";

function Content() {
  return (
    <div className="content">
      {/* Wrap the entire SVG with an anchor tag */}
      <a href="https://notebook-v2wu.onrender.com/" target="_blank" rel="noopener noreferrer">
        <svg
          className="bubble_1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 363.188 363.188"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          enableBackground="new 0 0 363.188 363.188"
        >
          {/* Define linear gradient */}
          <defs>
            <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#646cff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#535bf2', stopOpacity: 1 }} />
            </linearGradient>

            {/* Define circular clip path */}
            <clipPath id="circleClip">
              <circle cx="161.667" cy="172.311" r="100" />
            </clipPath>
          </defs>
          
          <g>
            {/* Circle with linear gradient stroke */}
            <circle
              cx="161.667" cy="172.311" r="100"
              fill="none"
              stroke="url(#bubbleGradient)"
              strokeWidth="20"
            />

            {/* Add image with circular clip path */}
            <image
              x="40" y="50"
              width="240" height="240"
              xlinkHref={logoImage}
              style={{ clipPath: 'url(#circleClip)' }}
            />
          </g>
        </svg>
      </a>
    </div>
  );
}

export default Content;
