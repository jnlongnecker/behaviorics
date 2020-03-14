

document.querySelector("#submitFiles").addEventListener("click", function() {
  var files = document.querySelector("#fileupload").files;
  document.querySelector(".video-player").src = files[0].name;
});
