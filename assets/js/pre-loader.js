var appMaster = {

  preLoader: function() {
    imageSources = []
    $('img').each(function() {
      var sources = $(this).attr('src');
      imageSources.push(sources);
    });
    if($(imageSources).load()){
      $('.pre-loader').fadeOut('slow');
    }
  },
  
  ...
};

