//Preparing stracture of menu
var i
var categories = 10; //Numbers of categories
var food = 'fa fa-cutlery'
var dessert = 'fa fa-spoon'
var coffee = 'fa fa-coffee'
var drink = 'fa fa-glass'
var cocktail = 'fas fa-cocktail'
var beer = 'fas fa-beer'

// preparing language file
var aLangKeystype=new Array();
aLangKeystype['gr']=new Array();
aLangKeystype['en']=new Array();
aLangKeystype['icons']=new Array();


//Default Icons For Categories
aLangKeystype['icons']['1']=coffee;
aLangKeystype['icons']['2']=drink;
aLangKeystype['icons']['3']=coffee;
aLangKeystype['icons']['4']=drink;
aLangKeystype['icons']['5']=drink;
aLangKeystype['icons']['6']=beer;
aLangKeystype['icons']['7']=drink;
aLangKeystype['icons']['8']=drink;
aLangKeystype['icons']['9']=food;
aLangKeystype['icons']['10']=dessert;




//==================GREEK SECTION====================//
// aLangKeystype['gr']['food-menu']='Φαγητό';
// aLangKeystype['gr']['coffee-menu']='All day';

//Standard Info
aLangKeystype['gr']['store-info']="Αγορανομικός υπ.:.... Οι τιμές περιλαμβάνουν όλες τις νόμιμες επιβαρύνσεις. Ο καταναλωτής δεν έχει υποχρέωση να πληρώσει εάν δεν λάβει το νόμιμο παραστατικό στοιχείο (Απόδειξη ή Τιμολόγιο)."
aLangKeystype['gr']['health-info']='<a>Παρακαλούμε ενημερώστε το προσωπικό της επιχείρησης για τυχόν αλλεργίες ή δυσανεξίες που μπορεί να έχετε,το μενού μας μπορεί (ή είναι πιθανό) να περιέχει ίχνη από αλλεργιογόνες ουσίες οι οποίες μπορεί να σας προκαλέσουν αλλεργία ή δυσανεξία.</a><br><br><a>ΤΟ ΚΑΤΑΣΤΗΜΑ ΔΙΑΘΕΤΕΙ ΥΠΟΧΡΕΩΤΙΚΑ ΦΥΛΛΑ ΔΙΑΜΑΡΤΥΡΙΑΣ ΓΙΑ ΤΟΥΣ ΠΕΛΑΤΕΣ ΣΕ ΕΙΔΙΚΗ ΘΕΣΗ ΔΙΠΛΑ ΣΤΗΝ ΕΞΟΔΟ</a>';

//Categories Titles
aLangKeystype['gr']['category-1']='Καφές';
aLangKeystype['gr']['category-2']='Αναψυκτικά';
aLangKeystype['gr']['category-3']='Ροφήματα';
aLangKeystype['gr']['category-4']='Χυμοί';
aLangKeystype['gr']['category-5']='Τσάι';
aLangKeystype['gr']['category-6']='Μπύρες';
aLangKeystype['gr']['category-7']='Κρασί';
aLangKeystype['gr']['category-8']='Ποτό';
aLangKeystype['gr']['category-9']='Σνάκ';
aLangKeystype['gr']['category-10']='Παγωτά/Γλυκά';

//Categories Info
aLangKeystype['gr']['category-info-1']='';
aLangKeystype['gr']['category-info-2']='';
aLangKeystype['gr']['category-info-3']='';
aLangKeystype['gr']['category-info-4']='';
aLangKeystype['gr']['category-info-5']='';
aLangKeystype['gr']['category-info-6']='';
aLangKeystype['gr']['category-info-7']='';
aLangKeystype['gr']['category-info-8']='';
aLangKeystype['gr']['category-info-9']='';


//Categories Names That Created On CMS
aLangKeystype['gr']['category-1-name']='ΚΑΦΕΣ';
aLangKeystype['gr']['category-2-name']='ΑΝΑΨΥΚΤΙΚΑ';
aLangKeystype['gr']['category-3-name']='ΡΟΦΗΜΑΤΑ';
aLangKeystype['gr']['category-4-name']='ΧΥΜΟΙ';
aLangKeystype['gr']['category-5-name']='ΤΣΑΙ';
aLangKeystype['gr']['category-6-name']='ΜΠΥΡΕΣ';
aLangKeystype['gr']['category-7-name']='ΚΡΑΣΙ';
aLangKeystype['gr']['category-8-name']='ΠΟΤΟ';
aLangKeystype['gr']['category-9-name']='ΣΝΑΚ';
aLangKeystype['gr']['category-10-name']='ΠΑΓΩΤΑ_ΓΛΥΚΑ';

//==================GREEK SECTION====================//


//==================ENGLISH SECTION====================//
// aLangKeystype['en']['food-menu']='Food';
// aLangKeystype['en']['coffee-menu']='All day';

//Standard Info
aLangKeystype['en']['store-info']="Market regulator: .... The prices include all legal charges. The consumer is not obliged to pay if he does not receive the legal document (Receipt or Invoice)."
aLangKeystype['en']['health-info']="<a>Please inform the company's staff about any allergies or intolerances you may have, our menu can (or is likely) contain traces of allergenic substances that can cause you allergy or intolerance.</a><br><br> <a>THE RESTAURANT HAVE A SPECIAL BOOK FOR COMPLAINS NEXT TO THE CASHIER</a>";

//Categories Titles
aLangKeystype['en']['category-1']='Coffee';
aLangKeystype['en']['category-2']='Soft drinks';
aLangKeystype['en']['category-3']='Beverages';
aLangKeystype['en']['category-4']='Juices';
aLangKeystype['en']['category-5']='Tea';
aLangKeystype['en']['category-6']='Beers';
aLangKeystype['en']['category-7']='Wine';
aLangKeystype['en']['category-8']='Drinks';
aLangKeystype['en']['category-9']='Snacks';
aLangKeystype['en']['category-10']='Ice-cream/Desserts';

//Categories Info
aLangKeystype['en']['category-info-1']='';
aLangKeystype['en']['category-info-2']='';
aLangKeystype['en']['category-info-3']='';
aLangKeystype['en']['category-info-4']='';
aLangKeystype['en']['category-info-5']='';
aLangKeystype['en']['category-info-6']='';
aLangKeystype['en']['category-info-7']='';
aLangKeystype['en']['category-info-8']='';
aLangKeystype['en']['category-info-9']='';


//Categories Names That Created On CMS
aLangKeystype['en']['category-1-name']='ΚΑΦΕΣ-en';
aLangKeystype['en']['category-2-name']='ΑΝΑΨΥΚΤΙΚΑ-en';
aLangKeystype['en']['category-3-name']='ΡΟΦΗΜΑΤΑ-en';
aLangKeystype['en']['category-4-name']='ΧΥΜΟΙ-en';
aLangKeystype['en']['category-5-name']='ΤΣΑΙ-en';
aLangKeystype['en']['category-6-name']='ΜΠΥΡΕΣ-en';
aLangKeystype['en']['category-7-name']='ΚΡΑΣΙ-en';
aLangKeystype['en']['category-8-name']='ΠΟΤΟ-en';
aLangKeystype['en']['category-9-name']='ΣΝΑΚ-en';
aLangKeystype['en']['category-10-name']='ΠΑΓΩΤΑ_ΓΛΥΚΑ-en';

//==================ENGLISH SECTION====================//



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//=================Create categories=====================//
function ShoWCategories() {
    for (i=1; i<=categories; i++){
            $("#CategoriesSection").append('<section class="single-page"><header class="page-title"><span><i key="'+ i +'" class="icon" aria-hidden="true"></i></span><h2 class="title-category-item" key="category-'+ i +'"></h2><p class="menu-desc tr" key="category-info-'+ i +'"></p></header> <article class="page-info container-fluid"> <section class="row testimonials"> <div class="over-div"></div> <div class="sec-divider"></div> <div class="col-md-8 col-md-offset-2 text-container"> <div id="'+ i +'-slides" class="owl-carousel owl-theme"> <div class="single-testimonial-item"> <blockquote> <section class="row resume"> <div class="over-div"></div> <div class="container"> <div class="col-xs-6 employment"> <h2 class="item-greek" key="category-'+ i +'"></h2> <div class="catalog-api gr-ct" key="category-'+ i +'-name" category=""></div> </div> <div class="col-xs-6 employment"> <h2 class="category-item" key="category-'+ i +'"></h2> <div class="catalog-api ct" key="category-'+ i +'-name" category=""></div> </div> </div> </section> </blockquote> </div> </div> </div> </section> </article> </section>')
    }
}
ShoWCategories()
//=================End of create categories=====================//



function getUrlParams(key = null) {
    var qd = {};
    if (location.search) location.search.substr(1).split("&").forEach(function(item) {var s = item.split("="), k = s[0], v = s[1] && decodeURIComponent(s[1]); (qd[k] = qd[k] || []).push(v)})

    return key == null ? qd : qd[key]
}

$(document).ready(function() {
    $('.sidenav').load('parts/navbar #navbar', function(){
        DisplayContent();
    })
});

// onclick behavior
$(document).on("click", ".language", function(e) {
    var url = 0;
    e.preventDefault();
    var url = "index?lang="+$(this).attr('id')
    document.location = url;
    // var langtype = $(this).attr('id'); // obtain language id
    // // translate all translatable elemelts
    // $('.tr').each(function(i){
    //   $(this).text(aLangKeystype[langtype][ $(this).attr('key') ]);
    // });
});

function DisplayContent(){
    $('.item-greek').each(function(i){
        $(this).text(aLangKeystype['gr'][ $(this).attr('key') ]);
    });
    $('.gr-ct').each(function(i){
        $(this).attr("category", aLangKeystype['gr'][ $(this).attr('key') ]);
    });
    $('.icon').each(function(i){
        $(this).addClass(aLangKeystype['icons'][ $(this).attr('key') ]);
    });


    if(getUrlParams("lang") == "gr" || window.location.search == ''){
        $('.title-category-item').each(function(i){
            $(this).text(aLangKeystype['gr'][ $(this).attr('key') ]);
        });
        $('.category-item').each(function(i){
            $(this).text(aLangKeystype['en'][ $(this).attr('key') ]);
        });
        $('.tr').each(function(i){
            $(this).html(aLangKeystype['gr'][ $(this).attr('key') ]);
        });
        $('.ct').each(function(i){
            $(this).attr("category", aLangKeystype['en'][ $(this).attr('key') ]);
        });
    }
    else{
        $('.title-category-item').each(function(i){
            $(this).text(aLangKeystype[getUrlParams("lang")][ $(this).attr('key') ]);
        });
        $('.category-item').each(function(i){
            $(this).text(aLangKeystype[getUrlParams("lang")][ $(this).attr('key') ]);
        });
        $('.tr').each(function(i){
            $(this).html(aLangKeystype[getUrlParams("lang")][ $(this).attr('key') ]);
        });
        $('.ct').each(function(i){
            $(this).attr("category", aLangKeystype[getUrlParams("lang")][ $(this).attr('key') ]);
        });
    }
    includeJS();
}

//Api scripts
function includeJS() {
    // $.getScript( "js/backend-connector-enneas.js" )
    construct("https://cornega-backend.herokuapp.com/public", "5f7f184fa6f9140022923103");
}