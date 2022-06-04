import React from 'react';

const Project = ({ data }) => {
  const { image, name, description, tools, srcCode, webURL } = data;
  return (
    <div className="card-zoom">
      <div className={`card-zoom-image ${image}`}></div>
      <div className="card-image-overlay"></div>
      <div className="card-zoom-text">
        <h2 className="text-2xl">{name}</h2>
        <div className="font-medium">{description}</div>
        <div className="font-medium pt-2">Tools: {tools.join(', ')}</div>
        <div className="flex gap-2">
          <a href={webURL} target="_blank" rel="noreferrer">
            <button
              type="button"
              className="w-20 text-sm p-1 rounded-full bg-pink-600 border border-white hover:bg-gray-400 text-white hover:text-black hover:font-bold"
            >
              View
            </button>
          </a>
          <a href={srcCode} target="_blank" rel="noreferrer">
            <button
              type="button"
              className="w-28 text-sm p-1 rounded-full bg-pink-600 border border-white hover:bg-gray-400 text-white hover:text-black hover:font-bold"
            >
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
