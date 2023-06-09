function purchaseValidation() {
    var domainName = document.getElementById("domain-name").value;
    var domainDuration = document.getElementById("domain-duration").value;
    var domainEmail = document.getElementById("domain-email").value;
    var domainValidationName = document.getElementById("domain-validation-name");
    var domainValidationDuration = document.getElementById("domain-validation-duration");
    var domainValidationEmail = document.getElementById("domain-validation-email");

    if (domainName == "") {
        domainValidationName.classList.remove("visually-hidden");
    } else {
        domainValidationName.classList.add("visually-hidden");
    }
    if (domainDuration === "choose") {
        domainValidationDuration.classList.remove("visually-hidden");
    } else {
        domainValidationDuration.classList.add("visually-hidden");
    }
    if (domainEmail == "") {
        domainValidationEmail.classList.remove("visually-hidden");
    } else {
        window.location.href = "index.html";
    }
}
