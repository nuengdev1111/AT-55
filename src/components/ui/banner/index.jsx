import React from "react";
import Image from "next/image";
import styles from "./banner.module.scss";

const img =
  "https://png.pngtree.com/background/20210712/original/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg";
export default function BannerUI(props) {
  return (
    <Image
      className={styles.img}
      src={img}
      width={0}
      height={0}
      alt="Picture of the author"
    />
  );
}