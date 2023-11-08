import { useStore } from "@lib/store";
import clsx from "clsx";
import { useRef, useEffect } from "react";
import styles from "@styles/GlobalDrawer/index.module.scss";
import DrawerBody from "./drawerBody";
import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";
const GlobalDrawer = () => {
  const drawerContent = useStore(({ drawerContent }) => drawerContent);
  const setDrawerContent = useStore((state) => state.setDrawerContent);
  const [drawerIsOpen, setDrawerIsOpen] = useStore((state) => [
    state.drawerIsOpen,
    state.setDrawerIsOpen,
  ]);

  const el = useRef();
  const drawerRef = useRef();
  const state = useRef({
    tl: null,
    close: null,
    content: null,
    footer: null,
    backdrop: null,
    site: null,
  });

  useEffect(() => {
    if (drawerIsOpen) {
      handleOnShow();
    } else {
      handleOnHide();
    }
  }, [drawerIsOpen]);

  const handleOnShow = () => {
    state.current.backdrop = document?.body?.querySelector(`.drawer_backdrop__background`);
    state.current.content = drawerRef.current.querySelector(`.${styles.content}`);
    state.current.footer = drawerRef.current.querySelector(`.${styles.drawerFooter}`);
    state.current.close = drawerRef.current.querySelector(`.${styles.header}`);
    state.current.tl = gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: CustomEase.create("custom", ".82, 0, .1, 1"),
        },
        onReverseComplete: () => {
          gsap.set(el.current, { clearProps: true });
          // gsap.set(state.current.site, { clearProps: true });
          el.current.classList.remove(styles["is-active"]);
          document.body.classList.remove("is-locked");
          setDrawerIsOpen(false);
          setDrawerContent("");
        },
      })
      .clear()
      .add(() => {
        el.current.classList.add(styles["is-active"]);
      })
      .set(state.current.close, { y: -40, opacity: 0 })
      .set(state.current.footer, { opacity: 0, y: 20 })
      .set(state.current.content, { opacity: 0, y: 20 })
      .set(state.current.backdrop, { yPercent: -100 }, 0)
      .to(state.current.backdrop, { yPercent: 0, opacity: 1 }, 0)
      .to(el.current, { opacity: 1 }, 0)
      .to(state.current.close, { y: 0, opacity: 1 }, 0.5)
      .to(state.current.footer, { y: 0, opacity: 1 }, 0.5)
      .to(
        state.current.content,
        {
          y: 0,
          opacity: 1,
          onComplete: () => {
            document.body.classList.add("is-locked");

            // eslint-disable-next-line react-hooks/exhaustive-deps
          },
        },
        0.5
      );
  };
  const handleOnHide = () => {
    if (state.current.tl) {
      state.current.tl.reverse();
    }
  };

  return (
    <div className={clsx(styles.backdrop, "padding-x-md")} ref={el}>
      <div className={styles.drawerBodyWrapper}>
        <DrawerBody onClose={handleOnHide} ref={drawerRef}>
          {drawerContent}
        </DrawerBody>
      </div>

      <div
        className={clsx(styles.backdrop__background, "drawer_backdrop__background")}
        onClick={handleOnHide}
      ></div>
    </div>
  );
};

export default GlobalDrawer;
