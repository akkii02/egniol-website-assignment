import React from 'react';
import styles from '../styles/Home.module.css';

const ImageCard = ({ imageSrc, index }) => {
  return (
    <div className={styles.card}>
      <img
        alt={`slide-${index + 1}`}
        className={styles.cardImg}
        src={imageSrc}
      />
    </div>
  );
};

export default ImageCard;
