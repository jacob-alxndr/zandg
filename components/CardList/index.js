/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/components/CardList/index.module.scss";
import CardPreview from "@components/CardList/CardPreview";
import clsx from "clsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function CardList(props) {
  const { anchorId, cards, componentPadding, classes } = props;
  const cardsRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const cards = Array.from(cardsRef?.current?.children);

    cards.forEach((card) => {
      const tl = gsap.timeline();
      tl.to(card, {
        scrollTrigger: {
          trigger: card,
          // markers: true,
          scrub: true,
          start: "top 80%", // when the top of the trigger hits 80% from the top of the viewport
          end: "40% 70%", // when 40% from the bottom of the trigger hits 70% from the bottom of the viewport
        },
        opacity: 1,
        y: 0,
      });
    });
  }, []);
  return (
    <div
      id={anchorId}
      className={clsx(
        styles.container,
        "padding-x-md",
        ...(componentPadding && componentPadding),
        classes
      )}
    >
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
