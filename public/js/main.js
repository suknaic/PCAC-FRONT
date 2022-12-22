(() => {
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

  $.getJSON(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/`,
    (data, status, statusCode) => {
      if (statusCode.status === 200) {
        const estado = data.map((estado) => {
          return `<option value="${estado.sigla}">${estado.sigla}</option>`;
        });
        $('#estado').append(estado);
      }
    }
  );

  $('.attachment input[type="file"]').on('change', (event) => {
    const el = $(event.target).closest('.attachment').find('.btn-file');

    el.find('.btn-file__actions__item').css({
      padding: '100px',
    });

    el.find('.btn-file__preview').css({
      'background-image': `url(${window.URL.createObjectURL(
        event.target.files[0]
      )})`,
    });
  });
})();

$('#cep').mask('00000-000');
$('#cpf').mask('000.000.000-00', { reverse: false });
$('#cnpj').mask('00.000.000/0000-00', { reverse: false });
$('#telefone').mask('(00) 00000-0000');

function getCidade(uf = 'AC') {
  $.getJSON(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
    (data, status, statusCode) => {
      if (statusCode.status === 200) {
        const cidades = data.map((cidade) => {
          return `<option value="${cidade.nome}">${cidade.nome}</option>`;
        });
        $('#cidade').append(cidades);
      }
    }
  );
}
getCidade();
$('#estado').change(() => {
  const uf = $('#estado option:selected').val();
  $('#cidade option').remove();
  getCidade(uf);
});
