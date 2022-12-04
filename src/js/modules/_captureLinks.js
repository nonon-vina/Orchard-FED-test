export const captureLinks = () => {
  $('.js-links').on('click', function (e) {
    e.preventDefault();
    console.log(this);
  })
}