/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/components/CardList/index.module.scss";
import CardPreview from "@components/CardPreview";
import clsx from "clsx";

import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function CardList(props) {
  const { anchorId, eyebrow, title, cards, titleSize, componentPadding, classes, id } = props;
  const cardsRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = Array.from(cardsRef?.current?.children);

    cards.forEach((card) => {
      const tl = gsap.timeline();
      tl.to(card, {
        scrollTrigger: {
          trigger: card,
          // markers: true,
          scrub: true,
          start: "top 70%", // when the top of the trigger hits the top of the viewport
          end: "40% 50%", // when the bottom of the trigger hits the bottom of the viewport
        },
        opacity: 1,
      });
    });
    // tl.to(cards, { scrollTrigger: { trigger: cards, start: "top top", markers: true }, opacity: 1 });
  }, []);
  return (
    <div
      id={anchorId}
      className={clsx(
        styles.container,
        "padding-x-sm",
        ...(componentPadding && componentPadding),
        classes
      )}
    >
      <div className={styles.heading}>
        {eyebrow && <span>{eyebrow}</span>}
        {title && <div className={clsx(styles.title, `u-heading--${titleSize}`)}>{title}</div>}
      </div>

      {cards && (
        <div className={styles.content} ref={cardsRef}>
          {cards?.map((c, i) => (
            <CardPreview data={c} key={c?.id || i} />
          ))}
        </div>
      )}
    </div>
  );
}
