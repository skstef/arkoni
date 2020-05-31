//---------------------Button as link behavior---------------------
const redirectToContact = () => {
  window.location = "/#contact";
};
//---------------------Menu---------------------
let isMenuOpened = false;

const menu = document.querySelector(".menu");
const pageTitle = document.querySelector("#topTitle");
const menuButton = document.querySelector(".burger-btn");

const handleMenu = () => {
  isMenuOpened ? closeMenu() : openMenu();
};

const openMenu = () => {
  //displaying menu
  menu.style.opacity = 1;
  menu.style.visibility = "visible";

  //displaying page title
  pageTitle.style.zIndex = 10;
  pageTitle.children[0].style.color = "white";

  //displaying button
  menuButton.style.zIndex = 10;
  menuButton.style.background = "transparent";
  [...menuButton.children].forEach((elem) => {
    elem.style.background = "white";
  });

  //moving button
  menuButton.children[0].style.transform = "rotate(45deg) translateX(4px)";
  menuButton.children[1].style.transform = "rotate(-45deg) translateX(4px)";

  isMenuOpened = true;
};

const closeMenu = () => {
  //hiding menu
  menu.style.opacity = 0;
  menu.style.visibility = "hidden";

  //displaying page title
  pageTitle.children[0].style.color = "#191a1e";

  //displaying button
  menuButton.style.zIndex = 10;
  menuButton.style.background = "transparent";
  [...menuButton.children].forEach((elem) => {
    elem.style.background = "#191a1e";
  });

  //moving back the button
  menuButton.children[0].style.transform = "rotate(0deg) translateX(0px)";
  menuButton.children[1].style.transform = "rotate(-0deg) translateX(0px)";

  isMenuOpened = false;
};

//---------------------Slider---------------------

if (window.innerWidth > 750) {
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
let currentActive = 0;
const width = window.width;

const interval = 5000; //! IMPORTANT: Change here the interval

const persons = [
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

const peoplesNode = document.querySelector(".people__qeue");
const quoteNode = document.querySelector(".people__quotes").children[0];
const nameNode = document.querySelector(".people__quotes").children[1];
const positionNode = document.querySelector(".people__quotes").children[2];
const buttonNode = document.querySelector(".people__dots-qeue");

const setQuote = (quote) => {
  quoteNode.innerHTML = quote;
};

const setName = (name) => {
  nameNode.innerHTML = name;
};

const setPosition = (position) => {
  positionNode.innerHTML = position;
};

setInterval(() => {
  //Removing all active elems
  [...peoplesNode.children].forEach((node) => {
    node.classList.remove("people__img--active");
  });

  [...buttonNode.children].forEach((node) => {
    node.classList.remove("people__dot--active");
  });

  //Setting active icon, button and it's quote
  peoplesNode.children[currentActive].classList.add("people__img--active");

  buttonNode.children[currentActive].classList.add("people__dot--active");

  setQuote(persons[currentActive].quote);
  setName(persons[currentActive].name);
  setPosition(persons[currentActive].position);

  currentActive > 3 ? (currentActive = 0) : currentActive++;
}, interval);

const setActive = (number) => {
  //Removing all active elems
  [...peoplesNode.children].forEach((node) => {
    node.classList.remove("people__img--active");
  });

  [...buttonNode.children].forEach((node) => {
    node.classList.remove("people__dot--active");
  });

  //Setting active icon, button and it's quote
  peoplesNode.children[number].classList.add("people__img--active");

  buttonNode.children[number].classList.add("people__dot--active");

  setQuote(persons[number].quote);
  setName(persons[number].name);
  setPosition(persons[number].position);

  currentActive = number;
};
