function toggleMobileMenu(className)
{
    let elements = document.getElementsByClassName(className);
    let mobileWraps = document.getElementsByClassName("mobileWrap");
    mobileWraps[0].classList.toggle("mobileSlide");
    mobileWraps[1].classList.toggle("mobileSlide");

    for (i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("toggleOn");
    }
}

const mobileSlideHide = (e, className) => {
    e.parentElement.classList.toggle("mobileSlideHide");
}

const siblingSlide = (e, className) => {
    /*e.firstElementChild.classList.toggle("jiggleClass");*/
    e.nextElementSibling.classList.toggle("showcaseSlide");
}

const toggleForm = (e, formToggle) => {
    if (e.classList.contains('btnSelected')) return false;

    let btnToggle = {'contact': 'quote_btn', 'quote': 'contact_btn'};
    document.getElementById(formToggle+'_btn').classList.toggle('btnSelected');
    document.getElementById(btnToggle[formToggle]).classList.toggle('btnSelected');
    /*e.classList.toggle('btnSelected');*/

    let quoteFields = document.getElementById('quote_form');
    quoteFields.classList.toggle('formDisabled');
    if (formToggle == 'quote') {
        quoteFields.disabled = false;
    } else {
        quoteFields.disabled = true;
    }
}

const caseSlider = (e, direction) => {
    let allCases = document.getElementsByClassName('casePic');
    let viewableCases = 5;
    if (allCases.length < viewableCases) return false;

    if (direction == 'right') {
        for (i = 0; i < allCases.length; i++) {
            allCases[i].classList.toggle('case_slide1');
        }
    }
}

/* Code for the showcase */
let showcase = {
    position: 1,
    max: 3,
    firstImg: document.getElementById('img_1'),
    create: () => {
        console.log("showcase created");
        document.getElementById('showcase_left').onclick = function() {
            showcase.scroll('left');
        }
        document.getElementById('showcase_right').onclick = function() {
            showcase.scroll('right');
        }
    },
    scroll: (direction) => {
        var p = showcase.position;
        if ((direction == 'left' && p == 1) || (direction == 'right' && p == showcase.max)) return false;
        
        if (direction == 'right') {
            console.log('slide_'+p);
            document.getElementById('img_1').classList.toggle('slide_'+p);
            showcase.position++;
        } else{
            console.log('slide_'+(p-1));
            document.getElementById('img_1').classList.toggle('slide_'+(p-1));
            showcase.position--;
        }
    }
}

window.onload = function () {
    showcase.create();
}