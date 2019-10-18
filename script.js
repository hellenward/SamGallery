const images = ["./photos/Sam1.png", "./photos/Sam2.png", "./photos/Sam3.png",
"./photos/Sam4.png","./photos/Sam5.png", "./photos/Sam6.png","./photos/Sam7.png",
"./photos/Sam8.png", "./photos/Sam9.png", "./photos/Sam10.png", "./photos/Sam11.png",
"./photos/Sam12.png", "./photos/Sam13.png", "./photos/Sam14.png", "./photos/Sam15.png",
]

function drawPic(myImage) {

        //Create canvas for all other images
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', 132);
        canvas.setAttribute('height', 150);
        //insert before images
        const canvasInsert = document.getElementById('canvasInsert');
        canvasInsert.appendChild(canvas,myImage);

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
        ctx.drawImage(myImage, xOffset, yOffset);

        //add frame
        ctx.drawImage(document.getElementById('frame'), 0, 0);
}

function draw() {

  //loop through all images
  var imgs = images.map(function(image) {
    var img = new Image();
    img.addEventListener('load', function() {
      drawPic(img);
    }, false);
    img.src = image;
  })
}

/* document.getElementById('file').onchange=function(event) {
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
  var wrh = myImage.width/myImage.height;
  var frameOffset = 20;
  var newWidth = canvas.width - frameOffset;
  var newHeight = newWidth / wrh;
  if (newHeight > canvas.height) {
    newHeight = canvas.height - frameOffset;
    newWidth = newHeight * wrh;
  }
  var xOffset = newWidth < canvas.width ? ((canvas.width - newWidth) / 2) : 0;
  var yOffset = newHeight < canvas.height ? ((canvas.height - newHeight) / 2) : 0;
  ctx.drawImage(myImage, xOffset, yOffset, newWidth, newHeight);

  //add frame
  ctx.drawImage(document.getElementById('frame'), 0, 0);
}
*/
