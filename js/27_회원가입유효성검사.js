 // 유효성 여부를 체크해두는 객체 생성
 const checkList = {
    inputName: false,
  };
  const inputName = document.querySelector("#inputName");

  inputName.addEventListener("input", e => {
    //              e(input).target = 이벤트가 발생한 태그를 가리킴
    //              value = 이벤트가 발생한 태그의 값을 가져오기.
    const value = e.target.value;
    //      Sibling(형제 자매) = brother sister
    const span = e.target.nextElementSibling.nextElementSibling;
    // input        br                 span
    //만약에 입력이 아무것도 안되있으면 입력
    if (value.trim().length == 0) {
      span.textContent = "한글 2~5(단모음,단자음 제외)";
      span.checkList.remove("check", "error");
      e.target.value = "";
      checkList["inputName"] = false;
      return;
    }
    /* 한글 이름을 위한 정규식 검사 */
    // /^ 정규식 시작
    // [가-힇] 모든 한글 사용가능
    // {2,5} 2~5글자 까지만 작성
    // $/ 정규식 종료

    const 한글정규식 = /^[가-힇]{2,5}$/;

    //만약에 한글이름을 제대로 작성한 경우
    if (한글정규식.test(value)) {
      span.textContent = "유효한 이름의 형식입니다.";
      span.classList.add("check");
      span.classList.remove("error");
      checkList["inputName"] = true;
    } else {
      span.textContent = "유효하지 않은 이름의 형식입니다.";
      span.classList.add("error");
      span.classList.remove("check");
      checkList["inputName"] = false;
    }
  });