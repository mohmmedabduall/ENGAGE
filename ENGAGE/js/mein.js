$(document).ready(function () {
  {
    $("#loading .spinner").fadeOut(1000, function () {
      $("#loading").fadeOut(1000);
      $("body").css("overflow-y", "auto");
    });
    $(".owl-carousel").owlCarousel({
      autoWidth: true,
      loop: true,
      touchDrag: true,
    });
  }
});

let welcom = $("#welcom").offset().top;
let apimovie = document.getElementById("main-nav");
$(window).scroll(function () {
  let wscroll = $(window).scrollTop();

  if (wscroll > welcom - 50) {
    apimovie.style.cssText = "background-color:  black !important";
    $("#main-nav").css("padding", "0px 90px");
  } else {
    apimovie.style.cssText = "background-color:transparent !important";
  }
});

$(window).scroll(function () {
  let scro = $(window).scrollTop();
  if (scro > welcom - 50) {
    $("#bton").fadeIn(500);
  } else {
    $("#bton").fadeOut(500);
  }
});

$("#bton").click(function () {
  $(Window).scrollTop(0);
  $("html,body").animate({ scrollTop: 0 }, 300);
});

$("nav a").click(function (e) {
  $(e.target).css("border-bottom", "solid 3px #fff");
  $(e.target).parent().siblings().children().css("border-bottom", "none");

  let linkHref = $(e.target).attr("href");
  let oficed = $(linkHref).offset().top;
  $("html,body").animate({ scrollTop: oficed }, 500);
});

let options = document.getElementById("options");
let colorsBox = document.getElementById("colorsBox");
let icosa = document.getElementById("icosa");

// icosa.addEventListener("click",function(){
//   colorsBox.classList.toggle("d-none")

// } )

let items = $(".color-itms");

items.eq(0).css("backgroundColor", "green");
items.eq(1).css("backgroundColor", "orange");
items.eq(2).css("backgroundColor", "white");
items.eq(3).css("backgroundColor", "black");
items.eq(4).css("backgroundColor", "#888");
items.click(function () {
  let colr = $(this).css("backgroundColor");
  $("p").css("color", colr);
});

$("#options i").click(function () {
  if ($("#options").css("left") == "0px") {
    $("#options").animate({ left: `-${divWidth}` }, 1000);
  } else {
    $("#options").animate({ left: `0px` }, 1000);
  }
});
let divWidth = $("#colorsBox").innerWidth();
$("#options").animate({ left: `-${divWidth}` }, 100);
// let wfads =$window.scrollTop();
// $(".up-icon").click(function(){
//   $(".up-icon").scrollButton(200);
//   // $("html,body").animate({scrollTop:400} ,300)

// })
let upworl = document.getElementById("up-icon");
// console.log(upworl)

// $(".up-icon").click(function() {
//   let aboutOff = $("#About").offset().top;
//   $("html , body").animate({scrollTop: aboutOff}, 200)
// })

upworl.onclick = function () {
  scroll({
    left: 0,
    top: 1000,
    behavior: "smooth",
  });
};

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 950,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

$(document).ready(function () {
  $(".skitter-large").skitter();
});
