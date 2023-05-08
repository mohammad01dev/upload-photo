let fileimg = document.querySelector('#file-hidden');
let image_container = document.querySelector('.image-box');

fileimg.addEventListener("change", (e) => {
  const file_url = e.target;
  const file = file_url.files;
  const files = file[0];
  const reader = new FileReader();

  reader.onload = () => {
    let image = document.createElement("img");
    image.src = reader.result;
    image.classList.add("images");
    image_container.append(image);
    console.log(reader.result);
  };
  reader.readAsDataURL(files);
});