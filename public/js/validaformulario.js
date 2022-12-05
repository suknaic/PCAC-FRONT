// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // eslint-disable-next-line
  const forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });

  $('#cep').mask('00000-000');
  $('#cpf').mask('000.000.000-00', { reverse: false });
  $('#cnpj').mask('00.000.000/0000-00', { reverse: false });
  $('#telefone').mask('(00) 00000-0000');
})();
