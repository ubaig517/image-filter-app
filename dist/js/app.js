const canvas = document.getElementById('canvas');
const contxt = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const resetBtn = document.getElementById('reset-btn');

//Add Filters & Effects
document.addEventListener('click', (e) =>{
  if(e.target.classList.contains('filter-btn')) {
    //Brightness--------------
    if(e.target.classList.contains('brightness-add')) {
      Caman('#canvas', img, function(){
        this.brightness(5).render();
      });
    } else if(e.target.classList.contains('brightness-remove')) {
      Caman('#canvas', img, function(){
        this.brightness(-5).render();
      });
    //Contrast-----------------
    } else if(e.target.classList.contains('contrast-add')) {
      Caman('#canvas', img, function(){
        this.contrast(5).render();
      });
    } else if(e.target.classList.contains('contrast-remove')) {
      Caman('#canvas', img, function(){
        this.contrast(-5).render();
      });
    // Saturation------------------
    } else if(e.target.classList.contains('saturation-add')) {
      Caman('#canvas', img, function(){
        this.saturation(5).render();
      });
    } else if(e.target.classList.contains('saturation-remove')) {
      Caman('#canvas', img, function(){
        this.saturation(-5).render();
      });
    //Vibrance----------------------
    } else if(e.target.classList.contains('vibrance-add')) {
      Caman('#canvas', img, function(){
        this.vibrance(5).render();
      });
    } else if(e.target.classList.contains('vibrance-remove')) {
      Caman('#canvas', img, function(){
        this.vibrance(-5).render();
      });
  // EFFECTS------------------------------------------------
    //Vintage-------------------------
    } else if(e.target.classList.contains('vintage-add')) {
      Caman('#canvas', img, function(){
        this.vintage().render();
      });
    } else if(e.target.classList.contains('lomo-add')) {
      Caman('#canvas', img, function(){
        this.lomo().render();
      });
    } else if(e.target.classList.contains('clarity-add')) {
      Caman('#canvas', img, function(){
        this.clarity().render();
      });
    }
  }
});

// Upload File
uploadFile.addEventListener('change', (e) => {
  // Get File
  const file = document.getElementById('upload-file').files[0];

  // Init FIleREader
  const reader = new FileReader();

  if(file) {
    //Set file file
    fileName = file.name;
    //Read data as URL
    reader.readAsDataURL(file);
  }

  // Add image to canvas
  reader.addEventListener('load', () => {
    //Create Img
    let img = new Image();
    //Set src
    img.src = reader.result;
    //On image load, add to canvas
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      contxt.drawImage(img, 0, 0, img.width, img.height);
      canvas.removeAttribute('data-caman-id');
    }
  }, false);
});
