jQuery(($) => {
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
});
