import React, { useEffect, useState } from "react";
import styles from "@styles/FullBleedImage/index.module.scss";
import { Image, StructuredText } from "react-datocms";
import clsx from "clsx";

const FullBleedImage = (props) => {
  const { image, componentPadding, caption } = props;

  return (
    <div className={clsx(styles.container, `padding-x-md`, ...(componentPadding && componentPadding))}>
      <div className={styles.image__wrapper}>
        {image &&
          image.map((img) => (
            <div className={styles.image} key={img?.id}>
              <Image
                alt={img?.image?.alt}
                fadeInDuration={2000}
                lazyLoad={true}
                priority={true}
                data={img?.image?.responsiveImage}
              />
            </div>
          ))}
      </div>
      <div className={styles.caption}>
        <StructuredText data={caption} />
      </div>
    </div>
  );
};
export default FullBleedImage;
