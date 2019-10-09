function draw() {

  //loop through all images
  for (var i = 0; i < document.images.length; i++) {

    //Don't add canvas for frame
    if (document.images[i].getAttribute('id') != "frame") {

      //Create canvas for all other images
      canvas = document.createElement('canvas');
      canvas.setAttribute('width', 132);
      canvas.setAttribute('height', 150);

      //insert before images
      document.images[i].parentNode.insertBefore(canvas,document.images[i]);

      ctx = canvas.getContext('2d');

      //black background
      ctx.fillStyle = '#0000000';
      ctx.fillRect(0, 0, 132, 150);

      //draw image to canvas
      var xOffset = document.images[i].width < canvas.width ? ((canvas.width - document.images[i].width) / 2) : 0;
      var yOffset = document.images[i].height < canvas.height ? ((canvas.height - document.images[i].height) / 2) : 0;
      ctx.drawImage(document.images[i], xOffset, yOffset);

      //add frame
      ctx.drawImage(document.getElementById('frame'), 0, 0);
    }
  }
}
