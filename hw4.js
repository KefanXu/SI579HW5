
document.getElementById("navEdu").addEventListener("click",highlightEdu);
document.getElementById("navExp").addEventListener("click",highlightExp);
document.getElementById("navResearch").addEventListener("click",highlightResearch);
document.getElementById("header").addEventListener("mouseover",showSlogan);
document.getElementById("header").addEventListener("mouseleave",hideSlogan);
document.getElementById("showContact").addEventListener("click",showContact);


let isEduShowed = false;
let isExpShowed = false;
let isResearchShowed = false;
let isEmailShowed = false;

function highlightEdu() {
  //console.log("clicked");
  if (!isEduShowed) {
    document.getElementById("skillEdu").style.color = "red";
  } else {
    document.getElementById("skillEdu").style.color = "black";
  }
  isEduShowed = !isEduShowed;
}
function highlightExp() {
  if (!isExpShowed) {
    document.getElementById("exp").style.color = "red";
  } else {
    document.getElementById("exp").style.color = "black";
  }
  isExpShowed = !isExpShowed;
}
function highlightResearch() {
  if (!isResearchShowed) {
    document.getElementById("research").style.color = "red";
  } else {
    document.getElementById("research").style.color = "black";
  }
  isResearchShowed = !isResearchShowed;
}
function showSlogan() {
  document.getElementById("header").innerHTML = "Go Blue!"
}
function hideSlogan() {
  document.getElementById("header").innerHTML = "Kefan Xu"
}
function showContact() {
  if (!isEmailShowed) {
    let email = document.createElement("h4");
    email.setAttribute("id","email")
    let emailContext = document.createTextNode("kefanxu@umich.edu");
    email.appendChild(emailContext);

    document.getElementById("headerContent").appendChild(email);
  } else {
    let email = document.getElementById("email");
    email.remove();
  }
isEmailShowed = !isEmailShowed;
}

// Use anime.js library to animate the header "Kefan Xu"

var header = document.getElementById("headerContent");
anime({
  targets: header,
  translateX: 180,
  scale: 1.2,
});

// Use Moment.js library to format the current date into the format of Month, Day, Year. 

let date = new Date();
let formattedDate = moment(date).format('MMMM Do YYYY');
document.getElementById("date").innerText = formattedDate;