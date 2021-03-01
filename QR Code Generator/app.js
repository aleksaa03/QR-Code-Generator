var colorPicker = document.getElementById("color");
var block = document.getElementById("block");

function generateQR() {
  var url = document.getElementById("url").value;
  var height = document.getElementById("height").value;
  var width = document.getElementById("width").value;

  var qrCodeDiv = document.getElementById("qrcode");

  qrCodeDiv.innerHTML = "";

  var color = colorPicker.value;
  var r = parseInt(color.substr(1, 2), 16);
  var g = parseInt(color.substr(3, 2), 16);
  var b = parseInt(color.substr(5, 2), 16);

  if (r < 240 || g < 235 || b < 215) {
    color = colorPicker.value;
  } else {
    color = "#000000";
  }

  if (!isNaN(height) && !isNaN(width)) {
    if (height <= 200 && width <= 200) {
      var qrcode = new QRCode(qrCodeDiv, {
        text: url,
        width: height,
        height: width,
        colorDark: color,
        colorLight: "#ffffff",
      });
    }
  }
}

function openColorPicker() {
  colorPicker.click();
}

function getColor(e) {
  block.style.background = e.target.value;
}
