(() => {
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
})();

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
