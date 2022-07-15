import React from 'react';

export const UploadImage = () => {
  return (
    <svg
      height="50px"
      version="1.1"
      viewBox="0 0 400 400"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title />
      <desc />
      <defs>
        <filter
          filterUnits="objectBoundingBox"
          height="200%"
          id="filter-1"
          width="200%"
          x="-50%"
          y="-50%"
        >
          <feOffset
            dx="0"
            dy="4"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            type="matrix"
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <polygon
          id="path-2"
          points="246 204 154 204 154 280 120 280 200 360 280 280 246 280"
        />
        <filter
          filterUnits="objectBoundingBox"
          height="200%"
          id="filter-3"
          width="200%"
          x="-50%"
          y="-50%"
        >
          <feOffset
            dx="0"
            dy="4"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="2"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            type="matrix"
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          />
        </filter>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        id="Page-1"
        stroke="none"
        strokeWidth="1"
      >
        <g id="download">
          <circle cx="200" cy="200" fill="#AAD8B0" id="Бэкграунд" r="200" />
          <g
            fill="#DCF0E6"
            filter="url(#filter-1)"
            id="Group"
            transform="translate(38.000000, 80.000000)"
          >
            <circle cx="55" cy="125" id="Oval-102" r="55" />
            <circle cx="92" cy="90" id="Oval-102-Copy" r="60" />
            <circle cx="152" cy="60" id="Oval-102-Copy-2" r="60" />
            <circle cx="217" cy="65" id="Oval-102-Copy-3" r="65" />
            <rect height="80" id="Rectangle-252" width="200" x="62" y="100" />
            <circle cx="262" cy="120" id="Oval-102-Copy-4" r="60" />
          </g>
          <g id="arrow">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-3)"
              xlinkHref="#path-2"
            />
            <use fill="#697F9B" fillRule="evenodd" xlinkHref="#path-2" />
          </g>
        </g>
      </g>
    </svg>
  );
};
