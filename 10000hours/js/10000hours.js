const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");

const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function calculator() {
  const fieldValue = document.querySelector("#field_value");
  let timeValue = document.querySelector("#time_value");
  let timeValue_int = parseInt(document.querySelector("#time_value").value);

  const fieldResult = document.querySelector(".field_result");
  const timeResult = document.querySelector(".time_result");

  if (fieldValue.value == "") {
    alert("입력되지 않았습니다.");
    fieldValue.focus();
    return false;
  } else if (timeValue.value == "") {
    alert("입력되지 않았습니다.");
    timeValue.focus();
    return false;
  } else if (timeValue_int > 24) {
    alert("24이하의 값을 입력해 주세요.");
    return false;
  }
  result.style.display = "none";
  loading.style.display = "flex";

  setTimeout(function () {
    result.style.display = "flex";
    loading.style.display = "none";
    fieldResult.innerText = fieldValue.value;
    // console.log(timeValue_int);
    timeResult.innerText = parseInt(10000 / timeValue_int);
  }, 1800);
}
function openModal() {
  modal.style.display = "flex";
}
function closeModal() {
  modal.style.display = "none";
}
function copyUrl() {
  let url = window.location.href;
  let tmp = document.createElement("input");

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);

  alert("URL이 복사되었습니다.");
}

startButton.addEventListener("click", calculator);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
shareButton.addEventListener("click", copyUrl);

// 모달 바깥 부분을 클릭했을 때 모달 닫기
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
