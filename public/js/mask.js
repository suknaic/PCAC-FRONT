(() => {
  $('#cep').mask('00000-000');
  $('#cpf').mask('000.000.000-00', { reverse: false });
  $('#cnpj').mask('00.000.000/0000-00', { reverse: false });
  $('#telefone').mask('(00) 00000-0000');
})();
