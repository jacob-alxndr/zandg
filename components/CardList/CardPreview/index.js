import { Image } from "react-datocms";
import Link from "next/link";
import styles from "@styles/CardPreview/index.module.scss";
import clsx from "clsx";
import { renderButtons } from "@components/UtilityComponents/Button/utils";
export default function CardPreview({ data }) {
  return (
    <div className={styles.container}>
      <Link
        // Link
        // URL Object
        // href={{
        //   pathname: "/project/[slug]",
        //   query: { slug: data?.slug },
        // }}
        // or
        // URL Path
        // scroll={false}
        href={`/project/${data?.slug}`}
      >
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <h3 className={clsx(styles.title, "u-heading--h2")}>{data?.title}</h3>
              <span className={clsx(styles.subtitle, "u-subheading--sh2")}>{data?.subtitle}</span>
            </div>

            <div className={styles.description}>
              {data?.description}
              {/* <Markdown>{content}</Markdown> */}
            </div>
            {data?.buttons && (
              <div className={clsx(styles.buttons, "js-sub-content")}>
                {renderButtons(data?.buttons)}
              </div>
            )}
            {/* {renderButtons(buttons, styles["card-actions"])} */}
          </div>
          <div className={styles.media}>
            {data?.backgroundMedia?.map((img, i) => (
              <Image
                key={img?.id}
                fadeInDuration={2000}
                priority={true}
                data={img?.backgroundImage?.responsiveImage}
                alt={img?.alt}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
