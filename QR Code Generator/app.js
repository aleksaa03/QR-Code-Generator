function generateQR() {
  var url = document.getElementById("url").value;
  var height = document.getElementById("height").value;
  var width = document.getElementById("width").value;

  var qrCodeDiv = document.getElementById("qrcode");

  qrCodeDiv.innerHTML = "";

  if (!isNaN(height) && !isNaN(width)) {
    if (height <= 200 && width <= 200) {
      var qrcode = new QRCode(qrCodeDiv, {
        text: url,
        width: height,
        height: width,
      });
    }
  }
}
