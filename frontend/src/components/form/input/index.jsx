import styles from "./styles.module.css";

export function Input({
   type,
   text,
   name,
   placeholder,
   handlerOnChange,
   value,
   multiple,
}) {
   return (
      <div className={styles.form_control}>
         <label htmlFor={name}>{text}:</label>
         <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handlerOnChange}
            value={value}
            {...(multiple ? { multiple } : "")}
         />
      </div>
   );
}
