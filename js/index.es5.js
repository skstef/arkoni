"use strict";

console.log("loaded");

// --------------------------------     IE11 Compatibility -------------------
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === "function" || toStr.call(fn) === "[object Function]";
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError(
          "Array.from requires an array-like object - not null or undefined"
        );
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== "undefined") {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError(
            "Array.from: when provided, the second argument must be a function"
          );
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] =
            typeof T === "undefined"
              ? mapFn(kValue, k)
              : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  })();
}

//TOP menu link scrolldown on click
$(".toContact").click(function (e) {
  e.preventDefault();
  var dest = "#contact";
  console.log(dest);
  $("html,body").animate({ scrollTop: $(dest).offset().top }, "slow");
});

//---------------------Button as link behavior---------------------
var redirectToContact = function redirectToContact() {
  window.location = "/#contact";
};

$(".header__link").click(function (e) {
  e.preventDefault();
  var dest = $(this).attr("href");
  console.log(dest);
  $("html,body").animate({ scrollTop: $(dest).offset().top }, "slow");
});

//---------------------Menu---------------------

var isMenuOpened = false;
var menu = document.querySelector(".menu");
var pageTitle = document.querySelector("#topTitle");
var menuButton = document.querySelector(".burger-btn");

var handleMenu = function handleMenu() {
  isMenuOpened ? closeMenu() : openMenu();
};

var openMenu = function openMenu() {
  //displaying menu
  menu.style.opacity = 1;
  menu.style.visibility = "visible"; //displaying page title

  pageTitle.style.zIndex = 10;
  pageTitle.children[0].style.color = "white"; //displaying button

  menuButton.style.zIndex = 10;
  menuButton.style.background = "transparent";
  Array.from(menuButton.children).forEach(function (elem) {
    elem.style.background = "white";
  }); //moving button

  menuButton.children[0].style.transform = "rotate(45deg) translateX(4px)";
  menuButton.children[1].style.transform = "rotate(-45deg) translateX(4px)";
  isMenuOpened = true;
};

var closeMenu = function closeMenu() {
  //hiding menu
  menu.style.opacity = 0;
  menu.style.visibility = "hidden"; //displaying page title

  pageTitle.children[0].style.color = "#191a1e"; //displaying button

  menuButton.style.zIndex = 10;
  menuButton.style.background = "transparent";
  Array.from(menuButton.children).forEach(function (elem) {
    elem.style.background = "#191a1e";
  }); //moving back the button

  menuButton.children[0].style.transform = "rotate(0deg) translateX(0px)";
  menuButton.children[1].style.transform = "rotate(-0deg) translateX(0px)";
  isMenuOpened = false;
};

Array.from(document.getElementsByClassName("menu__link")).forEach(function (
  el
) {
  el.addEventListener("click", closeMenu);
});

//---------------------Slider---------------------

if (window.innerWidth > 750) {
  console.log(1);
  $(document).ready(function () {
    $(".slider__panels").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 200,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: document.getElementsByClassName("slider__next")[0],
      prevArrow: document.getElementsByClassName("slider__prev")[0],
    });
  });
}

//---------------------People change---------------------

var currentActive = 0;
var width = window.width;
var interval = 5000; //! IMPORTANT: Change here the interval

var persons = [
  {
    name: "David Ramsey",
    position: "CEO, Apple Inc",
    quote:
      "“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.”",
  },
  {
    name: "Tim Cook",
    position: "Apple Founder",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Bill Gates",
    position: "Microsoft Founder",
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ",
  },
  {
    name: "Igor Kaspersky",
    position: "Security Expert",
    quote:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 ",
  },
  {
    name: "Dmirty Mihailoff",
    position: "Web Designer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
var peoplesNode = document.querySelector(".people__qeue");
var quoteNode = document.querySelector(".people__quotes").children[0];
var nameNode = document.querySelector(".people__quotes").children[1];
var positionNode = document.querySelector(".people__quotes").children[2];
var buttonNode = document.querySelector(".people__dots-qeue");

var setQuote = function setQuote(quote) {
  quoteNode.innerHTML = quote;
};

var setName = function setName(name) {
  nameNode.innerHTML = name;
};

var setPosition = function setPosition(position) {
  positionNode.innerHTML = position;
};

setInterval(function () {
  //Removing all active elems
  Array.from(peoplesNode.children).forEach(function (node) {
    node.classList.remove("people__img--active");
  });
  Array.from(buttonNode.children).forEach(function (node) {
    node.classList.remove("people__dot--active");
  }); //Setting active icon, button and it's quote

  peoplesNode.children[currentActive].classList.add("people__img--active");
  buttonNode.children[currentActive].classList.add("people__dot--active");
  setQuote(persons[currentActive].quote);
  setName(persons[currentActive].name);
  setPosition(persons[currentActive].position);
  currentActive > 3 ? (currentActive = 0) : currentActive++;
}, interval);

var setActive = function setActive(number) {
  console.log(buttonNode.children[number]);
  //Removing all active elems
  Array.from(peoplesNode.children).forEach(function (node) {
    node.classList.remove("people__img--active");
  });
  Array.from(buttonNode.children).forEach(function (node) {
    node.classList.remove("people__dot--active");
  }); //Setting active icon, button and it's quote

  peoplesNode.children[number].classList.add("people__img--active");
  buttonNode.children[number].classList.add("people__dot--active");
  setQuote(persons[number].quote);
  setName(persons[number].name);
  setPosition(persons[number].position);
  currentActive = number;
};

// --------------------- Event listeners--------------------

Array.from(peoplesNode.children).forEach(function (node, number) {
  if (number < 5) {
    node.addEventListener("click", function () {
      setActive(number);
    });
  }
});

Array.from(buttonNode.children).forEach(function (node, number) {
  node.addEventListener("click", function () {
    setActive(number);
  });
});

// --------------------- Footer 100%bg--------------------

if (window.outerWidth > 1440) {
  const height = document.querySelector(".footer").offsetHeight;

  const background = document.querySelector(".footer__bg");
  background.style.display = "block";

  background.style.height = height + 2 + "px";
}
