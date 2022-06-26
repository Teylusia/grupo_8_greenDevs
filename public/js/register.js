window.addEventListener("load", function () {
  let nameField = document.querySelector("#username");
  const nameErrors = document.querySelector("#username-errors");

  let emailField = document.querySelector("#email");
  const emailErrors = document.querySelector("#email-errors");

  let avatarField = document.querySelector("#upload-image");
  const avatarErrors = document.querySelector("#avatar-errors");

  let passwordField = document.querySelector("#password");
  const passwordErrors = document.querySelector("#password-errors");

  let confirmField = document.querySelector("#confirmpassword");
  const confirmErrors = document.querySelector("#confirm-errors");

  const submit = document.querySelector("#register-form");

  nameField.addEventListener("blur", function () {
    if (nameField.value == "") {
      nameField.classList.add("warning");
      nameField.classList.remove("success");
      nameErrors.innerText = "Este campo es obligatorio";
    }
  });

  nameField.addEventListener("change", function () {
    if (nameField.value.length < 2) {
      nameField.classList.add("warning");
      nameField.classList.remove("success");
      nameErrors.innerText = "El nombre debe contener al menos 2 caracteres";
    } else {
      nameField.classList.add("success");
      nameField.classList.remove("warning");
      nameErrors.innerText = "";
    }
  });

  emailField.addEventListener("blur", function () {
    if (emailField.value == "") {
      emailField.classList.add("warning");
      emailField.classList.remove("success");
      emailErrors.innerText = "El campo de email debe estar completo";
    }
  });

  emailField.addEventListener("change", function () {
    var expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let check = expReg.test(emailField.value);

    if (check == false) {
      emailField.classList.add("warning");
      emailField.classList.remove("success");
      emailErrors.innerText = "Ingresá un email válido, eh";
    } else {
      emailField.classList.add("success");
      emailField.classList.remove("warning");
      emailErrors.innerText = "";
    }
  });

  avatarField.addEventListener("change", function () {
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if (!allowedExtensions.test(avatarField.value)) {
      avatarField.classList.remove("success");
      avatarField.classList.add("warning");
      avatarErrors.innerText = "Este tipo de archivo no es valido :(";
      avatarField.value = "";
      return false;
    } else {
      if (avatarField.files && avatarField.files[0]) {
        let reader = new FileReader();
        reader.onload = function (element) {
          emailField.classList.add("success");
          emailField.classList.remove("warning");
        };
        reader.readAsDataURL(avatarField.files[0]);
      }
    }
  });

  passwordField.addEventListener("blur", function () {
    if (passwordField.value == "") {
      passwordField.classList.add("warning");
      passwordField.classList.remove("success");
      passwordErrors.innerText = "Por favor, completa este campo";
    } else {
      passwordField.classList.add("success");
      passwordField.classList.remove("warning");
      passwordErrors.innerText = "";
    }
  });

  passwordField.addEventListener("change", function () {
    if (passwordField.value.length < 8) {
      passwordField.classList.add("warning");
      passwordField.classList.remove("success");
      passwordErrors.innerText =
        "La contraseña debe contener al menos 8 caracteres";
    } else {
      passwordField.classList.add("success");
      passwordField.classList.remove("warning");
      passwordErrors.innerText = "";
    }
  });

  passwordField.addEventListener("blur", function () {
    if (passwordField.value != confirmField.value) {
      passwordField.classList.add("warning");
      passwordField.classList.remove("success");

      confirmField.classList.add("warning");
      confirmField.classList.remove("success");
      confirmErrors.innerText = "Las contraseñas no coinciden";
    }
    if (passwordField.value == confirmField.value) {
      passwordField.classList.add("success");
      passwordField.classList.remove("warning");

      confirmField.classList.add("success");
      confirmField.classList.remove("warning");

      confirmErrors.innerText = "";
    }
  });

  confirmField.addEventListener("blur", function () {
    if (confirmField.value == "") {
      confirmField.classList.add("warning");
      confirmField.classList.remove("success");
      confirmErrors.innerText = "Por favor, completa este campo";
    } else {
      passwordField.classList.remove("warning");
      passwordField.classList.add("success");
      confirmErrors.innerText = "";
    }
  });

  confirmField.addEventListener("change", function () {
    if (confirmField.value.length < 8) {
      confirmField.classList.add("warning");
      confirmField.classList.remove("success");
      confirmErrors.innerText =
        "La contraseña debe contener al menos 8 caracteres";
    } else {
      confirmField.classList.add("success");
      confirmField.classList.remove("warning");

      confirmErrors.innerText = "";
    }
  });

  confirmField.addEventListener("blur", function () {
    if (passwordField.value != confirmField.value) {
      passwordField.classList.add("warning");
      passwordField.classList.remove("success");

      confirmField.classList.add("warning");
      confirmField.classList.remove("success");

      confirmErrors.innerText = "Las contraseñas no coinciden";
    }
    if (passwordField.value == confirmField.value) {
      passwordField.classList.add("success");
      passwordField.classList.remove("warning");

      confirmField.classList.add("success");
      confirmField.classList.remove("warning");

      confirmErrors.innerText = "";
    }
  });

  submit.addEventListener("submit", (event) => {
    let errorFields = [
      passwordErrors,
      confirmErrors,
      avatarErrors,
      nameErrors,
      emailErrors,
    ];
    let errors = 0;
    errorFields.forEach((error) => {
      if (error.innerText.length > 0) {
        errors += 1;
      }
    });
    if (errors != 0) {
      event.preventDefault();
      alert(
        "Tienes errores en tu formulario, por favor corrígelos y luego envía la información."
      );
    }
  });
});
