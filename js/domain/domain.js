function domainCheck() {
    var domainName = document.getElementById("domain-name").value;
    document.getElementById("domain-com").innerHTML = domainName + ".com";
    document.getElementById("domain-id").innerHTML = domainName + ".id";
    document.getElementById("domain-xyz").innerHTML = domainName + ".xyz";
    document.getElementById("domain-me").innerHTML = domainName + ".me";
}
