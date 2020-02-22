import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  // USING destructuring
  // const images = props.images.map(({ description, id, urls }) => {
  //   return <img key={id} src={urls.regular} alt={description} />
  // });

  // WITHOUT destructuring (and using ImageCard)
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });
  return <div className="image-list">{images}</div>
};

export default ImageList;