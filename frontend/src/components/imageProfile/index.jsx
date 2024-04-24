import styles from "./styles.module.css";

export function ImageProfile({ src, alt, width }) {
   return (
      <img
         className={`${styles.rounded_image} ${styles[width]}`}
         src={src}
         alt={alt}
      />
   );
}
