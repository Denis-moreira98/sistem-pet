import { useEffect, useState } from "react";
import bus from "../../utils/bus";

import styles from "./styles.module.css";

export function Message() {
   let [visibility, setVisibility] = useState(false);
   let [message, setMessage] = useState("");
   let [type, setType] = useState("");

   useEffect(() => {
      bus.addListener("flash", ({ message, type }) => {
         setVisibility(true);
         setMessage(message);
         setType(type);
         setTimeout(() => {
            setVisibility(false);
         }, 4000);
      });
   }, []);

   useEffect(() => {
      if (document.querySelector(".close") !== null) {
         document
            .querySelector(".close")
            .addEventListener("click", () => setVisibility(false));
      }
   });

   return (
      visibility && (
         <div className={`${styles.message} ${styles[type]}`}>{message}</div>
      )
   );
}
