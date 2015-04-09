function renderStartPage(data){
 $.get('views/templStartPage.html', function (markup) {
     var template=Handlebars.compile(markup);
     $("#swagger-ui-container").html(template(data));
     setTimeout(function(){
         $('.descr-text').truncate({
             token: '...',
             side: 'right',
             multiline: true
         });
         }, 0);

         $('a.link-api').click(function(event) {
             event.preventDefault();
             var name = $(this).attr('name');
             $('#input_baseUrl option').each(function(){
                 if($(this).attr("name") == name){
                     $(this).attr('selected', 'selected');
                     $('#explore').trigger("click");
                 }
             });
         });
 }, 'html');
}
