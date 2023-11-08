import { forwardRef, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "@styles/GlobalDrawer/index.module.scss";
import Button from "@components/UtilityComponents/Button";
import { IconClose } from "@components/UtilityComponents/Icons";
import { StructuredText } from "react-datocms/structured-text";
import { useStore } from "@lib/store";
const DrawerBody = forwardRef(({ ariaLabel, children, onClose }, ref) => {
  const drawerData = useStore(({ drawerData }) => drawerData);
  const [footerData, setFooterData] = useState(null);
  const handleClose = () => {
    onClose(ref);
  };
  useEffect(() => {
    const footerContent = drawerData?.footerContent;
    setFooterData(footerContent);
  }, [drawerData]);
  return (
    <div
      className={clsx(styles.drawer, "Drawer--is-showing", styles["is-showing"])}
      ref={ref}
      aria-label={ariaLabel}
    >
      <div className={styles.header}>
        <Button
          data={{
            buttonType: "no-action",
            aria: {
              label: "close",
            },
          }}
          classes={clsx("drawer__header__close-button", styles.close)}
          // clean
          onClick={handleClose}
        >
          <IconClose classes={clsx("c-button__label", styles.iconClose)} />
        </Button>
      </div>
      <div className={styles.content}>
        <div className={clsx(styles.body__content)}>{children}</div>
      </div>
      {footerData && (
        <div className={clsx(styles.drawerFooter)}>
          {footerData?.map((footer, i) => (
            <StructuredText key={`${footerData?.id}-${i}`} data={footer.structuredText} />
          ))}
        </div>
      )}
      <div className={styles.background} />
    </div>
  );
});

DrawerBody.displayName = "Drawer Body";

export default DrawerBody;
