// Get the dropzone element
var dropzone = document.querySelector('.dropzone');

// Handle the dragover event
dropzone.addEventListener('dragover', function(e) {
  e.preventDefault();
  dropzone.classList.add('dragover');
});

// Handle the dragleave event
dropzone.addEventListener('dragleave', function(e) {
  e.preventDefault();
  dropzone.classList.remove('dragover');
});

// Handle the drop event
dropzone.addEventListener('drop', function(e) {
  e.preventDefault();
  dropzone.classList.remove('dragover');

  // Get the dropped files
  var files = e.dataTransfer.files;

  // Loop through the files and display their names, sizes, and images
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Create a new list item for the file
    var li = document.createElement('li');

    // Display the file name
    var nameSpan = document.createElement('span');
    nameSpan.textContent = file.name;
    li.appendChild(nameSpan);

    // Display the file size
    var sizeSpan = document.createElement('span');
    sizeSpan.textContent = '(' + formatBytes(file.size) + ')';
    li.appendChild(sizeSpan);

    // Display the file image (if it's an image)
    if (file.type.startsWith('image/')) {
      var img = document.createElement('img');

      // Use FileReader API to read the contents of the file and convert it to a data URL
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        img.src = e.target.result;
      };

      li.appendChild(img);

      // Display the file extension
      var extSpan = document.createElement('span');
      extSpan.textContent = getFileExtension(file.name);
      li.appendChild(extSpan);
    }

    // Add the list item to the file list
    document.querySelector('#filelist').appendChild(li);
  }
});

// Handle the file input change event
var fileInput = document.querySelector('#fileinput');
fileInput.addEventListener('change', function(e) {
  // Get the selected files
  var files = e.target.files;

  // Loop through the files and display their names, sizes, and images
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Create a new list item for the file
    var li = document.createElement('li');

    // Display the file name
    var nameSpan = document.createElement('span');
    nameSpan.textContent = file.name;
    li.appendChild(nameSpan);

    // Display the file size
    var sizeSpan = document.createElement('span');
    sizeSpan.textContent = '(' + formatBytes(file.size) + ')';
    li.appendChild(sizeSpan);

    // Display the file image (if it's an image)
    if (file.type.startsWith('image/')) {
      var img = document.createElement('img');

      // Use FileReader API to read the contents of the file and convert it to a data URL
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        img.src = e.target.result;
      };

      li.appendChild(img);

      // Display the file extension
      var extSpan = document.createElement('span');
      extSpan.textContent = getFileExtension(file.name);
      li.appendChild(extSpan);