const input = document.querySelector("#input");
const searchBtn = document.querySelector("#searchBtn");

const im1 = document.querySelector("#im1");
const im2 = document.querySelector("#im2");

const section = document.querySelector(".section");

searchBtn.addEventListener("click", async function() {
    section.classList.toggle("active");
    im1.src = "assets/loading.gif";
    im2.src = "assets/loading.gif";

    let im2Text = await fetch("http://172.22.227.228:8000/api/v1/keywords/?video_link=" + input.value).then((res) => res.json());
    im2.src = im2Text["img_url"];

    let im1Text = await fetch("http://172.22.227.228:8000/api/v1/analysis/?video_link=" + input.value).then((res) => res.json());
    im1.src = im1Text["img_url"];
});