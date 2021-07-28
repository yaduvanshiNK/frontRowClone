// ***********Testimonial Card HIDE and SHOW**************

const parentConatiner = document.querySelector(".testimonial-container");
parentConatiner.addEventListener("click", function (event) {
    const clickedNode = event.target;
    const isThisReadBtnClicked = clickedNode.className.includes("read-more-btn");
    if (isThisReadBtnClicked) {
        const parentCard = event.target.parentNode;
        const moreContent = parentCard.querySelector(".more-content");
        const readBtn = parentCard.querySelector(".read-more-btn");
        moreContent.classList.toggle("more-content-show");
        if (readBtn.innerText === "READ MORE") {
            readBtn.innerText = "SHOW LESS";
        } else {
            readBtn.innerText = "READ MORE";
        }
    } else {
        return;
    }
});

// ***********Bundle Card Scroller**************
const cardLeftScroller = document.querySelector(".left-scroll-btn");
const cardRightScroller = document.querySelector(".right-scroll-btn");
const bundleCards = document.querySelector(".bundle-card-container");

cardLeftScroller.addEventListener("click", moveLeft);
cardRightScroller.addEventListener("click", moveRight);
var i = 0;

function moveRight() {
    if (i > -2000) {
        i -= 200;
    }
    let translateValue = `${i}px`;
    bundleCards.style.transform = `translateX(${translateValue})`;
    bundleCards.classList.add("slide-animation");
}

function moveLeft() {
    if (i < 0) {
        i += 200;
    }
    let translateValue = `${i}px`;
    bundleCards.style.transform = `translateX(${translateValue})`;
}

// ***********Login PopUP**************

const loginBtn = document.querySelector(".login-top-btn");
const loginForm = document.querySelector(".login-page-container");
const loginFormCross = document.querySelector(".login-cross");

loginBtn.addEventListener("click", (loginPopUp) => {
    loginForm.style.display = "flex";
});

loginForm.addEventListener("click", loginFormClose);
loginFormCross.addEventListener("click", () => {
    loginForm.style.display = "none";
});

function loginFormClose(e) {
    if (e.target.classList.value === "login-page-container") {
        loginForm.style.display = "none";
    }
}


const signUpBtn = document.querySelector(".signup-top-btn");
const signUpForm = document.querySelector(".signup-page-container");
const signUpFormCross = document.querySelector(".signup-cross");

signUpBtn.addEventListener("click", () => {
    signUpForm.style.display = "flex";
});

signUpForm.addEventListener("click", signUpFormClose);
signUpFormCross.addEventListener("click", () => {
    signUpForm.style.display = "none";
});

function signUpFormClose(e) {
    if (e.target.classList.value === "signup-page-container") {
        signUpForm.style.display = "none";
    }
}
