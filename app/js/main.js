$(document).ready(function() {
    (function validateCallbackForm() {
        $('.callback-form').validate({
            required: true,
        });
        jQuery.extend(jQuery.validator.messages, {
            required: "Это поле обязательно для заполнения",
            // email:'Р’РІРµРґРёС‚Рµ РєРѕСЂСЂРµРєС‚РЅС‹Р№ E-mail',
        });
    })(); 
});