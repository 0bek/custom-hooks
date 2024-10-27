import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
  

    const [formState, setFormState] = useState(initialForm);
    
      const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [ name ]: value
        })
      }

      const onResetForm = () => {
        setFormState( initialForm );
      }
  
    return {
        ...formState,// sirve para el retorno, retorna lo que recibe del componente
        formState, 
        onInputChange,
        onResetForm,
    }
}
