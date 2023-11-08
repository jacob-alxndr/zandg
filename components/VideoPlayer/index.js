import React, { useEffect, useState } from "react";
import styles from "@styles/VideoPlayer/index.module.scss";
import { StructuredText } from "react-datocms";
import clsx from "clsx";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoPlayer = (props) => {
  const { url, componentPadding, caption } = props;
  // const [videoUrl, setVideoUrl] = useState(url || null);
  // useEffect(() => {
  //   setVideoUrl(url);
  // }, []);

  return (
    <div className={clsx(styles.container, `padding-x-sm`, ...(componentPadding && componentPadding))}>
      {url && <ReactPlayer url={url} loop playing muted style={{ width: "100%" }} />}

      {/* {caption && (
        <div className={styles.caption}>
          <StructuredText data={caption} />
        </div>
      )} */}
    </div>
  );
};
export default VideoPlayer;
