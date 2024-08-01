const modal = document.querySelector(".modal");
const button = document.querySelector(".start");
function handleOpenModal() {
  modal.classList.toggle("open");
  button.classList.toggle("hid");
}

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const files = event.target.files;
    const preview = document.getElementById("preview");

    // Clear any existing content

    file = files[0];
    // Loop through all selected files
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.height = "100%";
    img.style.width = "100%";
    img.style.display = "block"; // Ensure the image is displayed in a block to put it on a new line
    // Append the image and file info to the container
    imgContainer.appendChild(img);

    // Append the container to the preview div
    preview.innerHTML = "";
    preview.appendChild(imgContainer);
  });
