export const modal = () => {
    $('[data-fancybox]').fancybox({
        toolbar: false,
        smallBtn: true,
        iframe: {
            preload: false
        },
        preventCaptionOverlap: false,
        clickOutside: false,
        beforeShow: function () {
            $('.is-show').remove();
        },
        afterShow: function () {
            let modalCaption = $(".fancybox-caption");
            let modalCaptionCopy = modalCaption.clone().addClass('is-show');

            $(".fancybox-slide--current .fancybox-content").append(modalCaptionCopy);
        },
        helpers: {
            overlay: { closeClick: false }
        },
        clickSlide: false
    })
};
