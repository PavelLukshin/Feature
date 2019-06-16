(($) => {

    $('.btn-social').click(function(){
        $('.social-networks').toggleClass('active');
      });



      $('.articles-block').masonry({
        gutter: 25,
        itemSelector: '.article'
      });

})(jQuery);
