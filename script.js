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

      //draw image to canvas
      ctx.drawImage(document.images[i], 15, 20);

      //add frame
      ctx.drawImage(document.getElementById('frame'), 0, 0); 
    }
  }
}
