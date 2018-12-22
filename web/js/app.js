
function manageLanguage(lang) {

    var validLanguages = ['en', 'fr', 'sv']

    lang = lang.substring(0,2);

    //default is en
    lang =  validLanguages.includes(lang) ? lang : 'en';

    $("span[lang], div[lang]").each((idx, element) => {

        console.log(idx, element);
        
        element = $(element);

        var elemLang = element.attr("lang"); 

        console.log(elemLang, lang)

        if(elemLang.startsWith(lang)) {
            element.show();
        }
        else {
            element.hide();
        }

        
    })


/*
    $("span[lang], div[lang]").not('[name^="' + lang + '"]').each((idx, element) => {
        $(element).hide();
    })
*/
}



$( document ).ready(function() {

    var userLang = navigator.language || navigator.userLanguage;

    console.log("Language:", userLang);

    manageLanguage(userLang)

    $("#loader").hide();
    $("#app").show();
});