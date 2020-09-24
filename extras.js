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
          // swal("Please select a category to continue");
          // unselects the selected option by choosing a psuedo option
          $('.psuedo-option').trigger('click');
        }
      });

   })