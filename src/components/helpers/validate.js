export const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.name.trim()) {
      errors.name = 'El campo "Full name" no debe ser vacio.';
    } else if (!regexName.test(form.name)) {
      errors.name = 'El campo "Full name" solo acepta letras.';
    }

    if (!form.email.trim()) {
      errors.email = 'El campo "Email" no debe ser vacio.';
    } else if (!regexEmail.test(form.email)) {
      errors.email = 'El campo "Email" contiene un formato no valido';
    }

    if (!form.confirmEmail.trim()) {
      errors.confirmEmail = "Ambos correos deben ser iguales.";
    } else if (form.email !== form.confirmEmail) {
      errors.confirmEmail = "Ambos correos deben ser iguales.";
    }

    if (!form.address.trim()) {
      errors.address = 'El campo "Address" no debe ser vacio.';
    }

    if (!form.city.trim()) {
      errors.city = 'El campo "City" no debe ser vacio.';
    }else if(!regexName.test(form.city)) {
      errors.city = 'El campo "City" solo acepta letras.';
    }

    if (!form.nameOnCard.trim()) {
      errors.nameOnCard = 'El campo "Name on card" no debe ser vacio.';
    }else if(!regexName.test(form.nameOnCard)) {
      errors.nameOnCard = 'El campo "Name on card" solo acepta letras.';
    }

    if (!form.cardNumber.trim()) {
      errors.cardNumber = 'El campo "Credit card number" no debe ser vacio.';
    }

    if (!form.dni.trim()) {
      errors.dni = 'El campo "DNI" no debe ser vacio.';
    }else if(form.dni.length !== 8){
      errors.dni = 'El "DNI" debe tener 8 caracteres.';
    }

    if (!form.expMonth.trim()) {
      errors.expMonth = 'El campo "Exp Month" no debe ser vacio.';
    }else if(!regexName.test(form.expMonth)) {
      errors.expMonth = 'El campo "Exp Month" solo acepta letras.';
    }

    if (!form.state.trim()) {
      errors.state = 'El campo "State" no debe ser vacio.';
    }else if(!regexName.test(form.state)) {
      errors.state = 'El campo "State" solo acepta letras.';
    }

    if (!form.zipCode.trim()) {
      errors.zipCode = 'El campo "Zip code" no debe ser vacio.';
    }

    if (!form.expYear.trim()) {
      errors.expYear = 'El campo "Exp year" no debe ser vacio.';
    } else if (form.expYear < 2022) {
      errors.expYear = "Fecha expirada, ingrese un año valido.";
    }

    if (!form.cvv.trim()) {
      errors.cvv = 'El campo "CVV" no debe ser vacio.';
    }else if(form.cvv.length !== 4 ) {
      errors.cvv = 'El campo "CVV" debe tener 4 digitos.';
    }

    return errors;
};