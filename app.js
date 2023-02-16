//모든 박스를 boxes에 저장
const boxes = document.querySelectorAll('.box');

//윈도우 창에서 스크롤하면 => checkBoxes 함수 실행
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  //트리거 포인트 : 박스를 보여지거나 사라지게 하는 높이
  const triggerBottom = (window.innerHeight / 5) * 4;
  const triggerTop = window.innerHeight * -1/7;
  //각각의 박스의 높이를 비교
  boxes.forEach(box => {
    //모든 박스의 상단 높이
    const boxTop = box.getBoundingClientRect().top;
  
    if (boxTop < triggerBottom && boxTop > triggerTop) {
      box.classList.add('show');
    }
    else {
      box.classList.remove('show');
    }
  })
}
