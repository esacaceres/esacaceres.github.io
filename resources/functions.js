$(document).ready(function(){

   document.body.style.zoom = "90%"

   $(function(){
      $('.modal').modal({
          show: false
      }).on('hidden.bs.modal', function(){
          $(this).find('video')[0].pause();
      });
   });

   var $myGroup = $('#myGroup');
   $myGroup.on('show.bs.collapse','.collapse', function() {
        $myGroup.find('.collapse.show.sub').collapse('hide');
    });

    $( ".main" ).click(function() {
      $myGroup.find('.collapse.show.sub1').collapse('hide');
    });

});
