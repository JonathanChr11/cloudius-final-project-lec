const button = document.getElementById("button-addon2")

button.addEventListener('click', function() {
  var sementara = document.getElementById("custDname").value;
    document.getElementById("result").innerHTML = sementara;
});