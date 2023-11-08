import styles from "@styles/LandingPageFooter/index.module.scss";
import clsx from "clsx";
import { StructuredText } from "react-datocms";
import { renderButtons } from "@components/UtilityComponents/Button/utils";
const LandingPageFooter = (props) => {
  const { buttons, componentPadding, conclusion } = props;
  console.log("props", props);
  return (
    <div className={clsx(styles.container, "padding-x-sm", ...(componentPadding && componentPadding))}>
      <div className={styles.columns}>
        {conclusion && (
          <div className={styles.textContent}>
            {conclusion.map((st) => (
              <StructuredText key={st?.id} data={st?.structuredText} />
            ))}
          </div>
        )}
        {buttons && (
          <div className={styles.buttonsWrapper}>{renderButtons(buttons, styles.buttons)}</div>
        )}
      </div>
    </div>
  );
};

export default LandingPageFooter;
