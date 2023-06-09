function domainCheck() {
    var domainName = document.getElementById("domain-name").value;
    document.getElementById("domain-com").innerHTML = domainName + ".com";
    document.getElementById("domain-id").innerHTML = domainName + ".id";
    document.getElementById("domain-xyz").innerHTML = domainName + ".xyz";
    document.getElementById("domain-me").innerHTML = domainName + ".me";
}

function registerValidation() {
    var domainName = document.getElementById("domain-name").value;
    var domainValidation = document.getElementById("domain-validation");

    if (domainName == "") {
        domainValidation.classList.remove("visually-hidden");
    } else {
        window.location.href = "billing-domain.html";
    }
}
