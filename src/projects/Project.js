import React from 'react';

const Project = ({ image, name, src, url }) => {
  // console.log(image, name, src, url);
  return (
    <a href={url} target="_blank" rel="noreferrer" className="card-zoom">
      <div className={`card-zoom-image bg-${image}`}></div>
      <div className="card-image-overlay"></div>
      <div className="card-zoom-text">
        <p className="text-2xl">{name}</p>
        <a href={src} target="_blank" rel="noreferrer">
          <button
            type="button"
            className="w-28 text-sm p-1 rounded-full bg-pink-600 border border-white hover:bg-white text-white hover:text-black hover:font-bold"
          >
            Source Code
          </button>
        </a>
      </div>
    </a>
  );
};

export default Project;
