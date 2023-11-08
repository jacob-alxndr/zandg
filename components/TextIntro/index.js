import React, { useState } from "react";
import styles from "@styles/TextIntro/index.module.scss";
import clsx from "clsx";
import { StructuredText } from "react-datocms";
import DescriptionList from "@components/UtilityComponents/DescriptionList";

const TextIntro = (props) => {
  const [data, setData] = useState(props || null);
  const {
    title,
    subtitle,
    description,
    roles: lists,
    titleSize,
    subtitleSize,
    componentPadding,
  } = data;
  console.log("roles", lists);
  return (
    <div className={clsx(styles.container, "padding-x-sm", ...(componentPadding && componentPadding))}>
      <div className={clsx(styles.heading)}>
        <div className={clsx(styles.title, `u-heading--${titleSize}`)}>{title}</div>
        <div className={clsx(styles.subtitle, `u-subheading--${subtitleSize}`)}>{subtitle}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <StructuredText data={description} />
        </div>
        {lists && (
          <div className={styles.lists}>
            {lists?.map((list, key) => (
              <DescriptionList key={key} props={list} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default TextIntro;
