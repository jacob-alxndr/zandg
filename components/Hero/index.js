// import { useStore } from "@lib/store";
import clsx from "clsx";
import styles from "@styles/Hero/index.module.scss";
import mapping from "./mapping";
import { useEffect, useState, useRef } from "react";
import { StructuredText } from "react-datocms";
import { useStore } from "@lib/store";
import { Image } from "react-datocms";
import { renderButtons } from "@components/UtilityComponents/Button/utils";
import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";
const Hero = (props) => {
  const [data, setData] = useState(props);
  const { title, subtitle, description, image, buttons, titleSize, subtitleSize, componentPadding } =
    data;
  const headingRef = useRef();
  const textContentRef = useRef();
  const imgRef = useRef();
  gsap.registerPlugin(CustomEase);

  useEffect(() => {
    const headingEl = headingRef?.current;
    const textContentEl = textContentRef?.current;
    const imgEl = imgRef?.current?.querySelector("div");

    const tl = gsap.timeline();
    tl.to(headingEl, {
      delay: 0.2,
      y: 0,
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      ease: CustomEase.create("custom", ".86, 0, .07, 1"),
    })
      .to(textContentEl, {
        duration: 0.4,
        y: 0,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        ease: CustomEase.create("custom", ".86, 0, .07, 1"),
      })
      .fromTo(
        imgEl,
        { x: 40, clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
        {
          x: 0,
          duration: 0.8,
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          ease: CustomEase.create("custom", ".86, 0, .07, 1"),
        },
        "+=.2"
      );
  }, []);

  return (
    <div className={clsx(styles.container, "padding-x-md", ...(componentPadding && componentPadding))}>
      <div className={clsx(styles.content, styles.heading)} ref={headingRef}>
        <div className={clsx(styles.title, `u-heading--${titleSize}`)}>{title}</div>
        <div className={clsx(`u-subheading--${subtitleSize}`, styles.subtitle)}>{subtitle}</div>
      </div>
      <div className={styles.content} ref={textContentRef}>
        <div className={styles.textContent}>
          <div className={styles.description}>
            <StructuredText data={description} />
          </div>
          {buttons && <div className={styles.buttonList}>{renderButtons(buttons, styles.buttons)}</div>}
        </div>

        {image &&
          image.map((img) => (
            <div className={styles.image} key={img?.id} ref={imgRef}>
              <Image
                alt={title}
                fadeInDuration={2000}
                lazyLoad={true}
                priority={true}
                data={img?.image?.responsiveImage}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hero;
