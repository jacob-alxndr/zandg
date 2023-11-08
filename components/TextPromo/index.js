import React, { useState } from "react";
import styles from "../../styles/components/TextPromo/index.module.scss";
import clsx from "clsx";
import Default from "./components/default";

const TextPromo = (props) => {
  const { alignment, classes, index, componentPadding } = props;

  return (
    <div
      index={index}
      className={clsx(
        styles.container,
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

export default TextPromo;
