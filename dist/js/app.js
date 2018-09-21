const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

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
    } else if(e.target.classList.contains('sincity-add')) {
      Caman('#canvas', img, function(){
        this.sinCity().render();
      });
    } else if(e.target.classList.contains('crossprocess-add')) {
      Caman('#canvas', img, function(){
        this.crossProcess().render();
      });
    } else if(e.target.classList.contains('pinhole-add')) {
      Caman('#canvas', img, function(){
        this.pinhole().render();
      });
    } else if(e.target.classList.contains('nostalgia-add')) {
      Caman('#canvas', img, function(){
        this.nostalgia().render();
      });
    } else if(e.target.classList.contains('hermajesty-add')) {
      Caman('#canvas', img, function(){
        this.herMajesty().render();
      }); ``
    }
  }
});

// Reset Filters & Effects
resetBtn.addEventListener('click', () => {
  Caman('#canvas', img, function() {
    this.revert();
  });
});

// Upload File
uploadFile.addEventListener('change', (e) => {
  // Get File
  const file = document.getElementById('upload-file').files[0];

  // Init FileREader
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
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.removeAttribute('data-caman-id');
    }
  }, false);
});

// Download Event
downloadBtn.addEventListener('click', (e) => {
  // Get file ext
  const fileExtension = fileName.slice(-4);

  // Init new fileName
  let newFileName;

  // Check image type
  if(fileExtension === '.jpg' || fileExtension === '.png') {
    newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';
  }

  // Call download
  download(canvas, newFileName);
});

// Download function
function download(canvas, filename) {
  //init event
  let e;
  // Create Link
  const link = document.createElement('a');
  //set props
  link.download = fileName;
  link.href = canvas.toDataURL('image/jpeg', 0.8);
  // New mouse Event
  e = new MouseEvent('click');
  //Dispatch event
  link.dispatchEvent(e);
}
