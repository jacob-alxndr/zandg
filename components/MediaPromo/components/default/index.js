import React from "react";
import styles from "@styles/MediaPromo/index.module.scss";
import { StructuredText, Image } from "react-datocms";
import clsx from "clsx";

const Default = (props) => {
  const { content, title, image, textBlockWidth } = props?.data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.textContent}>
        <div className={clsx(styles.copy, styles[textBlockWidth])}>
          {title && <span className={styles.title}>{title}</span>}
          {content && (
            <div className={clsx(styles.description)}>
              <StructuredText data={content} />
            </div>
          )}
        </div>
      </div>

      {image &&
        image.map((img) => (
          <div className={styles.image} key={img?.id}>
            <Image
              fadeInDuration={2000}
              lazyLoad={true}
              priority={true}
              data={img?.image?.responsiveImage}
            />
          </div>
        ))}
    </div>
  );
};
export default Default;
