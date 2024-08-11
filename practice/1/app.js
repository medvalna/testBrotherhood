function handleOpenModal() {
  const modal = document.querySelector(".modal");
  const button = document.querySelector(".modal__open-button");
  const overlay = document.querySelector(".overlay");
  modal.classList.toggle("open");
  button.classList.toggle("hid");
  overlay.classList.toggle("open");
}

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const files = event.target.files;
    const preview = document.getElementById("preview");
    const fileLabel = document.getElementById("fileLabel");

    file = files[0];
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.height = "200px";
    img.style.width = "200px";
    img.style.display = "block";
    imgContainer.appendChild(img);
    fileLabel.classList.remove("modal__file-upload");
    preview.innerHTML = "";
    fileLabel.classList.toggle("imglogo__input-img");
    preview.appendChild(imgContainer);
  });

function handleDeleteIcon() {
  const preview = document.getElementById("preview");
  const fileLabel = document.getElementById("fileLabel");
  preview.innerHTML = "";
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = "./assets/images/logo.png";
  img.style.height = "200px";
  img.style.width = "200px";
  img.style.display = "block";
  imgContainer.appendChild(img);
  preview.appendChild(imgContainer);
  fileLabel.classList.remove("imglogo__input-img");
  fileLabel.classList.toggle("modal__file-upload");
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const modal__inputs = document.querySelectorAll("#form input");
  let isValid = true;

  modal__inputs.forEach((input) => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
  } else {
    alert("Please fill out all required fields.");
  }
});

document.getElementById("input__phone").addEventListener("input", function (e) {
  var x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value =
    "+" + x[1] + "- (" + x[2] + ")" + "-" + x[3] + "-" + x[4] + "-" + x[5];
});
