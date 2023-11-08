import React from "react";
import styles from "../../../../styles/components/TextPromo/index.module.scss";
import { StructuredText, renderNodeRule } from "react-datocms";
import { isParagraph, isRoot } from "datocms-structured-text-utils";
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
                <StructuredText
                  data={col?.structuredText}
                  // customNodeRules={[
                  //   // Apply different formatting to top-level paragraphs
                  //   renderNodeRule(
                  //     isParagraph,
                  //     ({ adapter: { renderNode }, children, key, ancestors }) => {
                  //       console.log("ancestors", ancestors[0].children);
                  //       if (isRoot(ancestors[0] & (ancestors.length <= 1))) {
                  //         // If this paragraph node is a top-level one, give it a special class
                  //         return renderNode("p", { key, className: styles.noMargin }, children);
                  //       } else {
                  //         return <React.Fragment key={key}>{children}</React.Fragment>;
                  //       }
                  //     }
                  //   ),
                  // ]}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Default;
