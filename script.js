let home = document.getElementById("nav-item1");
let resume = document.getElementById("nav-item2");
let projects = document.getElementById("nav-item3");
let contact = document.getElementById("nav-item4");
let homeSection = document.getElementById("homeSection");
let resumeBtn = document.getElementById("resumeBtn");
let projectsBtn = document.getElementById("projectsBtn");
let resumeSection = document.getElementById("resumeSection");
let projectsSection = document.getElementById("projectsSection");
let contactMeBtn = document.getElementById("contactMeBtn");
let contactSection = document.getElementById("contactSection");
let footerSection = document.getElementById("footerSection");
contactSection.classList.add("d-none");
projectsSection.classList.add("d-none");
resumeSection.classList.add("d-none");
contact.addEventListener("click", function(e) {
    e.preventDefault();
    homeSection.classList.add("d-none");
    resumeSection.classList.add("d-none");
    projectsSection.classList.add("d-none");
    contactSection.classList.remove("d-none");
    footerSection.classList.remove("d-none");
});
projects.addEventListener("click", function(e) {
    e.preventDefault();
    homeSection.classList.add("d-none");
    resumeSection.classList.add("d-none");
    contactSection.classList.add("d-none");
    projectsSection.classList.remove("d-none");
    footerSection.classList.remove("d-none");
});
resume.addEventListener("click", function(e) {
    e.preventDefault();
    homeSection.classList.add("d-none");
    contactSection.classList.add("d-none");
    projectsSection.classList.add("d-none");
    resumeSection.classList.remove("d-none");
    footerSection.classList.remove("d-none");
});
home.addEventListener("click", function(e) {
    e.preventDefault();
    contactSection.classList.add("d-none");
    projectsSection.classList.add("d-none");
    resumeSection.classList.add("d-none");
    homeSection.classList.remove("d-none");
    footerSection.classList.remove("d-none");
});
resumeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    homeSection.classList.add("d-none");
    contactSection.classList.add("d-none");
    projectsSection.classList.add("d-none");
    resumeSection.classList.remove("d-none");
    footerSection.classList.remove("d-none");
});
projectsBtn.addEventListener("click", function(e) {
    e.preventDefault();
    homeSection.classList.add("d-none");
    resumeSection.classList.add("d-none");
    contactSection.classList.add("d-none");
    projectsSection.classList.remove("d-none");
    footerSection.classList.remove("d-none");
});
contactMeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    homeSection.classList.add("d-none");
    resumeSection.classList.add("d-none");
    projectsSection.classList.add("d-none");
    contactSection.classList.remove("d-none");
    footerSection.classList.remove("d-none");
});

let myForm = document.getElementById("myForm");

function sendMail() {
    let parms = {
        name: document.getElementById("nameEl").value,
        email: document.getElementById("emailEl").value,
        message: document.getElementById("messageEl").value
    }
    emailjs.send("service_n8txauo", "template_bvfyh1c", parms).then(function(res) {
        alert("Email Sent Successfully!!");
    });
};
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendMail();
});