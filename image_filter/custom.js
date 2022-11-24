// const btn = document.querySelector(".filter-btn");

// const activeBtn = () => {
//   if (btn.classList.contains("active")) {
//     btn.classList.add("active");
//   } else {
//     btn.classList.remove("active");
//   }
// };

// btn.addEventListener("click", activeBtn);

const filterBtn = document.querySelectorAll(".filter-btn");

const activeBtn = (e) => {
  //   console.log(e.target);
  const target = e.target;
  filterBtn.forEach((btn) => {
    btn.classList.remove("active");
    // 전체 class 내 "active" 제거
  });

  target.classList.add("active");
  // 각 버튼 클릭 시 class 내 "active" 추가
};

filterBtn.forEach((btn) => {
  btn.addEventListener("click", activeBtn);
});
