import React, { useState } from "react";
import styles from "@styles/MediaPromo/index.module.scss";
import clsx from "clsx";
import Default from "./components/default";

const MediaPromo = (props) => {
  const { alignment, classes, index, flex, componentPadding } = props;

  return (
    <div
      index={index}
      className={clsx(
        styles.container,
        {
          [styles.flexFlip]: flex,
        },
        styles[`align--${alignment}`],
        "padding-x-sm",
        ...(componentPadding && componentPadding),
        classes
      )}
    >
      <Default data={props} />
    </div>
  );
};

export default MediaPromo;
