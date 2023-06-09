function submitValidation() {
    var helpSelect = document.getElementById("help-select").value;
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var details = document.getElementById("details").value;

    var helpValidation = document.getElementById("help-validation");
    var nameValidation = document.getElementById("name-validation");
    var emailValidation = document.getElementById("email-validation");
    var subjectValidation = document.getElementById("subject-validation");
    var detailsValidation = document.getElementById("details-validation");

    if (helpSelect === "choose") {
        helpValidation.classList.remove("visually-hidden");
    } else {
        helpValidation.classList.add("visually-hidden");
    }
    if (fullName == "") {
        nameValidation.classList.remove("visually-hidden");
    } else {
        nameValidation.classList.add("visually-hidden");
    }
    if (email == "") {
        emailValidation.classList.remove("visually-hidden");
    } else {
        emailValidation.classList.add("visually-hidden");
    }
    if (subject == "") {
        subjectValidation.classList.remove("visually-hidden");
    } else {
        subjectValidation.classList.add("visually-hidden");
    }
    if (details == "") {
        detailsValidation.classList.remove("visually-hidden");
    } else {
        window.location.href = "index.html";
    }
}
