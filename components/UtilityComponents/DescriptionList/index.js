import React from "react";
import clsx from "clsx";
import styles from "@styles/DescriptionList/index.module.scss";

const DescriptionList = ({ props }) => {
  const { title, items, classes } = props;

  const renderList = () => {
    if (!items) return "";
    const isColumns = items.length > 4;
    if (isColumns) {
      const columnOne = items.slice(0, 4);
      const columnTwo = items.slice(4);
      const columns = [columnOne, columnTwo];
      return columns.map((col, i) => {
        return (
          <div className={styles.column} key={i}>
            {col.map((item, index) => {
              return (
                <div key={index} className={styles["list-item"]}>
                  {item?.title && <dt>{item?.title}</dt>}
                </div>
              );
            })}
          </div>
        );
      });
    } else {
      return items?.map((item, index) => (
        <div key={index} className={styles["list-item"]}>
          {item?.title && <dt>{item?.title}</dt>}
        </div>
      ));
    }
  };

  return (
    <div className={clsx(styles.container, classes)}>
      {title && <span className={"u-heading--h2"}>{title}</span>}
      <dl
        className={clsx(styles.list, {
          [styles.columns]: items.length > 4,
        })}
      >
        {renderList()}
      </dl>
    </div>
  );
};

export default DescriptionList;
