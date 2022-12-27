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

  function getaudio() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(
      (stream) => {
        mediaRecorder = new MediaRecorder(stream);
        const chunks = [];
        mediaRecorder.ondataavailable = (data) => {
          chunks.pop();
          chunks.push(data.data);
        };
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/webm; codecs=opus' });
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = async () => {
            $('#audio-play audio').remove();
            $('input[name="audio"]').remove();
            const audio = document.createElement('audio');
            audio.src = await reader.result;
            audio.controls = true;
            audio.controlsList = 'nodownload noplaybackrate';
            audio.classList.add('audio');
            $('<input>')
              .attr({
                type: 'hidden',
                id: 'audio',
                name: 'audio',
              })
              .val(reader.result)
              .appendTo('#form-solicitacao');
            $('#audio-play').append(audio);
          };
        };

        $(function () {
          $('.audio').bind('mousedown touchstart', function (event) {
            $('.audio')
              .addClass('btn-danger')
              .removeClass('btn-success')
              .html(
                "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span> Gravando..."
              );
            mediaRecorder.start();
          });
        });

        $(function () {
          $('.audio').bind('mouseup touchend', function () {
            $('.audio')
              .addClass('btn-success')
              .removeClass('btn-danger')
              .html(
                "<img src='/public/img/mic.svg' alt='mic' />Enviar um Audio"
              );
            mediaRecorder.stop();
          });
        });
      },
      (err) => {
        if (err.name == 'NotAllowedError') {
          $('.error-audio').append(
            '<p class="text-danger">Você deve permitir o uso do Microfone '
          );
          navigator.permissions
            .query({ name: 'microphone' })
            .then((permissionStatus) => {
              permissionStatus.onchange = () => {
                document.location.reload();
              };
            });
        } else {
          $('.audio').remove();
        }
      }
    );
  }
  getaudio();
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
