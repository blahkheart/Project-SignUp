function switchFormsSection (trigger, formId, spawn) {
    trigger.on('click', function () {
      trigger.toggleClass('hidden');
      formId.toggleClass('hidden');
      spawn.removeClass('hidden');
    })
}
  
 // User category selection confirmation
 $('.psu-radio').change(function () {
    swal({
      title: "Confirmation!",
      text: "Are you sure you want to proceed as a "+ $(this).val()+ '?',
      icon: "warning",
      buttons: ['No', 'Yes'],
    }).then((value) => {
        if (value) {
          swal("you selected " + $(this).val(), {
            icon: "success",
          });
        } else {
          swal({
            text:"Please select a category to continue"});
          $('.psuedo-option').trigger('click');
        }
      });
    })

    // CONFIRM TRANSACTION 
   function confirmTransaction (e) {
    var checker = e.preventDefault();
    $(this).bind(checker);
       swal({
           title:"Confirmation!",
           text: "Are you sure you want to proceed with this transaction",
           buttons: true,
           dangerMode: true,
       })
       .then((value) => {
         if(value === true) {
           $(this).unbind(checker);
           $(this).submit();
           swal({
               title: "Information!",
               text: "Your request has been submitted and is being processed",
               icon: "success",
           })
           // $(this).unbind(checker);
         } else {
           swal("Aborted!!", "Your request was not submitted");
         }
       }
     )}

     // dashboard Farmlist tabs ruler switching
     function sectionTabSwitch (trigger, arr) {
         $(trigger).click(function(){
             $(arr).each(function(index, element){
                $(element).next().removeClass('hidden');
             });
     
             $(this).next().addClass('hidden');
         });
     }
        
    // $(function () {
    //   $('#psu-signup').parsley().on('field:validated', function() {
    //     var ok = $('.parsley-error').length === 0;
    //     $('.bs-callout-info').toggleClass('hidden', !ok);
    //     $('.bs-callout-warning').toggleClass('hidden', ok);
    //   })
    //   .on('form:submit', function() {
    //     return true;
    //   });
    // });