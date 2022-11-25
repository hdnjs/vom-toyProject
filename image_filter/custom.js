const filterBtn = document.querySelectorAll(".filter-btn");
const filterImg = document.querySelectorAll(".filter-image");
const closeBtn = document.querySelector(".ri-close-line");
const lightBox = document.querySelector(".light-box");
const overLay = document.querySelector(".overlay");
const categoryTxt = document.querySelector(".title p");

// ========== tab and filtering function ==========
const activeBtn = (e) => {
  const target = e.target;
  const selectedTabData = target.getAttribute("data-filter"); // 탭에 있는 data-filter 속성값
  filterBtn.forEach((btn) => {
    btn.classList.remove("active");
    // 전체 class 내 "active" 제거
  });

  target.classList.add("active");
  // 각 버튼 클릭 시 class 내 "active" 추가

  filterImg.forEach((image) => {
    image.classList.add("hide");
    const selectedImgData = image.getAttribute("data-filter"); // 이미지에 있는 data-filter 속성값

    setTimeout(() => {
      if (selectedTabData === selectedImgData || selectedTabData === "all") {
        image.classList.remove("hide");
        // 전체 class 내 "hide" 제거
        image.classList.add("show");
      } else {
        image.classList.add("hide");
        image.classList.remove("show");
      }
    }, 100);
  });
};

// ========== showLightbox click function ==========
const showLightbox = (e) => {
  const target = e.currentTarget;
  const selectedImg = target.children[0].children[0].getAttribute("src");
  const categoryNm = target.getAttribute("data-filter");
  const lightBoxImg = document.querySelector(".light-box-img img");

  lightBoxImg.setAttribute("src", selectedImg);
  categoryTxt.textContent = categoryNm;

  lightBox.classList.add("show");
  overLay.classList.add("show");
};

filterImg.forEach((image) => {
  image.addEventListener("click", showLightbox);
});

filterBtn.forEach((btn) => {
  btn.addEventListener("click", activeBtn);
});

closeLightBox = () => {
  lightBox.classList.remove("show");
  overLay.classList.remove("show");
};

closeBtn.addEventListener("click", closeLightBox);
overLay.addEventListener("click", closeLightBox);
