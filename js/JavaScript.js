// // navbar acite tiem function

var navbar = document.querySelector(".navbar-nav");
var li = navbar.getElementsByClassName("nav-item");

for(var i =0; i<li.length; i++){
    li[i].addEventListener("click", function(){
        var current = document.querySelectorAll(".navbar-nav .nav-item.active");
        if(current.length > 0){
            current[0].className = current[0].className.replace("active","");
        }
            this.className +=(" active");

            
    })
}
// add side bar moblie phone


var peimaryNavber = document.querySelector("#navbar");
var bars= document.querySelector(".navbtn .bars");
var colsebars= document.querySelector(".navbtn .xmark");
var singandlongn = document.querySelector(".navbar .singandlogn");
bars.addEventListener("click", function(){
    peimaryNavber.classList.add("paimary-navbarActive");
    bars.style.display ="none";
    colsebars.style.display ="block";
    singandlongn.classList.add("w-100");
})
colsebars.addEventListener("click", function(){
    peimaryNavber.classList.remove("paimary-navbarActive");
    bars.style.display ="block";
    colsebars.style.display ="none";
    singandlongn.classList.remove("w-100");
    
})
// colse peimaryNavber 
var navbar =document.querySelector("#navbar");
navbar.forEach((navbar)=>{
    var navItems =navbar.getElementsByClassName(".nav-item");
    navItems.addEventListener("click",()=>{
    peimaryNavber.classList.remove("paimary-navbarActive");
    bars.style.display ="block";
    colsebars.style.display ="none";
    singandlongn.classList.remove("w-100");
    })
})


// FAQ section scripts
var miusIcon = document.querySelectorAll(".questions .icons .one");
miusIcon.forEach((mius)=>{
    var qus = mius.parentElement.previousElementSibling.firstElementChild;
    mius.addEventListener("click",()=>{
        toggleAnswer(qus);
    })
})
var plusIcon = document.querySelectorAll(".questions .icons .two");

plusIcon.forEach((puls)=>{
    var qus = puls.parentElement.previousElementSibling.firstElementChild;
    puls.addEventListener("click",()=>{
        toggleAnswer(qus);
    })
})

function toggleAnswer(question){
    var answer = question.nextElementSibling;
    var iconMinus = question.parentElement.nextElementSibling.firstElementChild;
    var iconPlus = question.parentElement.nextElementSibling.children[1];
    answer.classList.toggle("ansshow");
    iconMinus.classList.toggle("d-none");
    iconPlus.classList.toggle("d-block");
}

   // slick slider 

   $(document).ready(function(){
    $('#slider .main-slide').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
  });

  // slick slider 