
function switchFormsSection (trigger, formId, spawn) {
    trigger.on('click', function () {
        trigger.toggleClass('hidden');
        formId.toggleClass('hidden');
        spawn.removeClass('hidden');
    })
}
  