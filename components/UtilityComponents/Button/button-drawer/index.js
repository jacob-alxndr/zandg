/* eslint-disable import/no-cycle */
import React, { useEffect } from "react";
import clsx from "clsx";
import { useStore } from "@lib/store";
import styles from "@styles/GlobalDrawer/index.module.scss";
import { StructuredText } from "react-datocms";

const ButtonDrawer = React.forwardRef(
  (
    { data, getBtnContent, onClick, setClasses, onMouseEnter, onMouseLeave, onMouseMove, clean },
    ref
  ) => {
    const setDrawerContent = useStore((state) => state.setDrawerContent);
    const [setDrawerIsOpen] = useStore((state) => [state.setDrawerIsOpen]);

    const handleShow = () => {
      const modalContent = renderModalContent();
      setDrawerContent(modalContent);
      setDrawerIsOpen(true);
    };

    const handleOnClick = (e) => {
      if (onClick) {
        onClick(e);
      }

      handleShow();
    };

    const renderModalContent = () => {
      switch (data.buttonType) {
        case "content-drawer": {
          return (
            <div className={styles.body__content__copy}>
              {data?.drawer?.columnContent ? (
                <div className={styles.columns}>
                  {data?.drawer?.columnContent?.map((col) => (
                    <div key={col?.id}>
                      <StructuredText data={col?.structuredText} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        }
        default:
          return null;
      }
    };

    const escapeDrawer = (e) => {
      // Escape
      if (e.keyCode === 27) {
        setDrawerIsOpen(false);
      }
    };

    useEffect(() => {
      // Add the escape listener to close the drawer
      document.addEventListener("keyup", escapeDrawer);
      return () => {
        document.removeEventListener("keyup", escapeDrawer);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <React.Fragment>
        <button
          ref={ref}
          type="button"
          className={setClasses()}
          {...(!clean && { "data-animation": "button" })}
          aria-label={data?.aria?.label || data.buttonText}
          onClick={handleOnClick}
          {...(onMouseEnter && {
            onMouseEnter: onMouseEnter,
          })}
          {...(onMouseLeave && {
            onMouseLeave: onMouseLeave,
          })}
          {...(onMouseMove && {
            onMouseMove: onMouseMove,
          })}
        >
          {getBtnContent()}
        </button>
      </React.Fragment>
    );
  }
);

ButtonDrawer.displayName = "Button Drawer";

export default ButtonDrawer;
