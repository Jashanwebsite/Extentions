import React from 'react'
import "../cssfiles/content.css"
function Youtube() {
  return (
    
<svg
        className="youtube"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="100"
        height="100"
        viewBox="0 0 256 256"
        xmlSpace="preserve"
      >
        <defs>
            <linearGradient id="youtube" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#1B4242", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#5C8374", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        <g
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
          style={{
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "none",
            fillRule: "nonzero",
            opacity: 1,
          }}
        >
          <path
            d="M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "url(#youtube)",
              fillRule: "nonzero",
              opacity: 1,
              strokeLinecap: "round",
            }}
            transform="matrix(1 0 0 1 0 0)"
          />
          <polygon
            points="36,58.5 59.38,45 36,31.5"
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "rgb(255,255,255)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="matrix(1 0 0 1 0 0)"
          />
        </g>
      </svg>
  )
}

export default Youtube

