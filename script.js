function drawPic(myImage) {

        //Create canvas for all other images
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', 132);
        canvas.setAttribute('height', 150);

        //insert before images
        myImage.parentNode.insertBefore(canvas,myImage);

        ctx = canvas.getContext('2d');

        //black background
        ctx.fillStyle = '#0000000';
        ctx.fillRect(0, 0, 132, 150);

        //draw image to canvas
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
        var xOffset = myImage.width < canvas.width ? ((canvas.width - myImage.width) / 2) : 0;
        var yOffset = myImage.height < canvas.height ? ((canvas.height - myImage.height) / 2) : 0;
        var wrh = myImage.width/100;
        var newWidth = canvas.width;
        var newHeight = newWidth / wrh;
        if (newHeight > 100) {
          newHeight = 100;
          newWidth = newHeight * wrh;
        }
        ctx.drawImage(myImage, xOffset, yOffset, newWidth, newHeight);

        //add frame
        ctx.drawImage(document.getElementById('frame'), 0, 0);
}

document.getElementById('file').onchange=function(event) {
  const reader = new FileReader();
  const file = event.target.files[0];
  var img = new Image();
  reader.onload = () => {
    img.src = reader.result;
  }
  img.addEventListener('load', function() {
    addImage(img);
  }, false);
  reader.readAsDataURL(file);
}

function addImage(myImage) {
  //Create canvas for all other images
  canvas = document.createElement('canvas');
  canvas.setAttribute('width', 132);
  canvas.setAttribute('height', 150);
  ctx = canvas.getContext('2d');

  var insertHere = document.getElementById('picAddition');
  insertHere.appendChild(canvas);

  //black background
  ctx.fillStyle = '#0000000';
  ctx.fillRect(0, 0, 132, 150);

  //draw image to canvas
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  var xOffset = myImage.width < canvas.width ? ((canvas.width - myImage.width) / 2) : 0;
  var yOffset = myImage.height < canvas.height ? ((canvas.height - myImage.height) / 2) : 0;
  console.log(yOffset, xOffset, myImage);
  ctx.drawImage(myImage, xOffset, yOffset);

  //add frame
  ctx.drawImage(document.getElementById('frame'), 0, 0);
}

function draw() {

  //loop through all images
  for (var i = 0; i < document.images.length; i++) {
    //Don't add canvas for frame
    if (document.images[i].getAttribute('id') != "frame") {
      drawPic(document.images[i]);
    }
  }
}
