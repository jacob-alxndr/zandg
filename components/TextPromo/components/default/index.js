import React from "react";
import styles from "../../../../styles/components/TextPromo/index.module.scss";
import { StructuredText } from "react-datocms";
import clsx from "clsx";

const Default = (props) => {
  const { alignment, columnContent, textBlockWidth } = props?.data;

  return (
    <>
      <div className={clsx(styles.textContent)}>
        {columnContent ? (
          <div className={clsx(styles.columns, styles[`align--${alignment}`])}>
            {columnContent?.map((col) => (
              <div
                key={col?.id}
                className={clsx({ [styles[textBlockWidth]]: columnContent?.length < 2 })}
              >
                <StructuredText data={col?.structuredText} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Default;
