import React from 'react';

const Project = ({ image, name, src, url }) => {
  return (
    <div className="card-zoom">
      <div className={`card-zoom-image ${image}`}></div>
      <div className="card-image-overlay"></div>
      <div className="card-zoom-text">
        <a href={url} target="_blank" rel="noreferrer">
          <p className="text-2xl hover:text-gray-300">{name}</p>
        </a>
        <a href={src} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="w-28 text-sm p-1 rounded-full bg-pink-600 border border-white hover:bg-gray-400 text-white hover:text-black hover:font-bold"
          >
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
