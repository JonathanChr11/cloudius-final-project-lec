function purchaseValidation() {
    var hostingPlan = document.getElementById("hosting-plan").value;
    var hostingEmail = document.getElementById("hosting-email").value;
    var hostingValidationPlan = document.getElementById(
        "hosting-validation-plan"
    );
    var hostingValidationEmail = document.getElementById(
        "hosting-validation-email"
    );

    if (hostingPlan === "choose") {
        hostingValidationPlan.classList.remove("visually-hidden");
    } else {
        hostingValidationPlan.classList.add("visually-hidden");
    }
    if (hostingEmail == "") {
        hostingValidationEmail.classList.remove("visually-hidden");
    } else {
        window.location.href = "index.html";
        alert("Pembelian Hosting Sukses!");
    }
}
