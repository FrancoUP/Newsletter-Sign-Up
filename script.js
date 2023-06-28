const imgIllustration = document.querySelector(".img-illustration");
const mail = document.querySelector(".mail-input");
const btn_subscribe = document.querySelector(".btn-subscribe");
const overlay = document.querySelector(".overlay");
const invalidMail = document.querySelector(".invalid-mail");
const text = document.getElementById("text-part-3");
const btnDismiss = document.querySelector(".btn-part-4");



(function() {
  const width = window.innerWidth;
  const styleComputer = `<link rel="stylesheet" href="style.css">`;
  const styleMobile = `<link rel="stylesheet" href="styleMobile.css">`;

  if( width > "450") {
    imgIllustration.data = "assets/images/illustration-sign-up-desktop.svg";
    document.head.insertAdjacentHTML("beforeend", styleComputer);
  } else {
    imgIllustration.data = "assets/images/illustration-sign-up-mobile.svg";
    document.head.insertAdjacentHTML("beforeend", styleMobile);
  }
  
})();



const setErrorLayout = function() {

  invalidMail.innerHTML = "Valid mail required";
  invalidMail.style.color = "hsl(4, 100%, 67%)";
  mail.style.borderColor = "hsl(4, 100%, 67%)";
  mail.style.color = "hsl(4, 100%, 67%)";
  mail.style.backgroundColor = "rgba(255, 98, 87, 0.2)"
  mail.setAttribute("placeholder", "");
}


const setOverlay = function() {

  overlay.style.zIndex = "1";
  overlay.style.opacity = "1";
  text.innerHTML = `A confirmation email has been sent to <b>${mail.value}</b>. Please open it and click the button inside to confirm your subscription.`
} 


const setDismiss = function() {

  overlay.style.zIndex = "0";
  overlay.style.opacity = "0";
  mail.value = "";
  invalidMail.innerHTML = "";
  mail.style.borderColor = "hsl(233, 7%, 75%)";
  mail.style.color = "hsl(234, 29%, 20%)";
  mail.style.backgroundColor = "white";
  mail.setAttribute("placeholder", "email@company.com");
}


function mailValidator(mail) {

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) { return true };

  return (false)
}


mail.addEventListener("click", function(e) {
  e.preventDefault();

  mail.style.color = "hsl(234, 29%, 20%)";
})


btn_subscribe.addEventListener("click", function(e) {
   e.preventDefault();

   
   if(mailValidator(mail.value)) setOverlay();
   else setErrorLayout();

})

btnDismiss.addEventListener("click", function(e) {
  e.preventDefault();

  setDismiss();
})



/////////////////////  TOUCH MOBILE ///////////////////////////


btn_subscribe.addEventListener("touchstart", function(e) {
  e.preventDefault();

  btn_subscribe.style.backgroundImage = "linear-gradient(to right,#FF527B, #FF6A3A)";

}, {passive: false})


btn_subscribe.addEventListener("touchend", function(e) {
  e.preventDefault();
  
  btn_subscribe.style.backgroundImage = "";
  if(mailValidator(mail.value)) setOverlay();
  else setErrorLayout();
  
}, {passive: false})




btnDismiss.addEventListener("touchstart", function(e) {
  e.preventDefault();

  btnDismiss.style.backgroundImage = "linear-gradient(to right,#FF527B, #FF6A3A)";

}, {passive: false})

btnDismiss.addEventListener("touchend", function(e) {
  e.preventDefault();

  btnDismiss.style.backgroundImage = "";
  setDismiss();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}), {passive: false}