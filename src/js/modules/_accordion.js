export const accordion = () => {
  $('.js-accordBtn').on('click', function() {
    $('.js-dropDownContent').slideToggle();
    $(this).toggleClass('is-active');
  })
};
