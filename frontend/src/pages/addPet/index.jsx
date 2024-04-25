// import api from "../../utils/api";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useFlashMessage from "../../hooks/useFlashMessage";
import { PetForm } from "../../components/form/petForm";

import styles from "./styles.module.css";

export function AddPet() {
   return (
      <section className={styles.addpet_header}>
         <div>
            <h1>Cadastre um Pet</h1>
            <p>Depois ele ficará disponível para adoção</p>
         </div>

         <PetForm btnText="Cadastrar Pet" />
      </section>
   );
}
