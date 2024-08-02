function handleOpenModal() {
  const modal = document.querySelector(".modal");
  const button = document.querySelector(".modal__open-button");
  modal.classList.toggle("open");
  button.classList.toggle("hid");
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
    img.style.height = "100%";
    img.style.width = "100%";
    img.style.display = "block";
    imgContainer.appendChild(img);

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
  img.src = "../assets/images/logo.png";
  img.style.height = "100%";
  img.style.width = "100%";
  img.style.display = "block";
  imgContainer.appendChild(img);
  preview.appendChild(imgContainer);
  fileLabel.classList.toggle("imgCross");
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
