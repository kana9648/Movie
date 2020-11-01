  // 페이지 로드시, 안내문만 보이도록 설정
  window.onload = function () {
    document.getElementById("notice").style.display = "block";
    document.getElementById("register").style.display = "none";
  };

  // 동의를 모두 체크했는지 확인
  function agree() {
    let agree_1 = document.getElementById("agree_1").checked;
    let agree_2 = document.getElementById("agree_2").checked;
    let agree_3 = document.getElementById("agree_3").checked;

    if (agree_1 && agree_2 && agree_3) {
      document.getElementById("notice").style.display = "none";
      document.getElementById("register").style.display = "block";
    } else {
      alert("모두 동의해야 가입할 수 있습니다.");
    }
  }

  function password_check() {
    let pass_1 = document.getElementById("PW").value;
    let pass_2 = document.getElementById("PWcheck").value;
    let id = document.getElementById("ID").value;
    let email = document.getElementById("Email").value;
    let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    let checkNumber = pass_1.search(/[0-9]/g);
    let checkEnglish = pass_1.search(/[a-z]/gi);

    if (pass_1 != pass_2) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (id == "") {
      alert("아이디를 입력하세요.");
    } else if (email == "") {
      alert("이메일을 입력하세요.");
    } else if (exptext.test(email) == false) {
      alert("이메일 형식이 틀립니다.");
    } else if (!/^[a-zA-Z0-9]{10,15}$/.test(pass_1)) {
      alert("숫자와 영문자 조합으로 10~15자리를 사용해야 합니다.");
    } else if (checkNumber < 0 || checkEnglish < 0) {
      alert("숫자와 영문자를 혼용하여야 합니다.");
    } else if (/(\w)\1\1\1/.test(pass_1)) {
      alert("같은 문자를 4번 이상 사용하실 수 없습니다.");
    } else if (pass_1.search(id) > -1) {
      alert("비밀번호에 아이디가 포함되었습니다.");
    }
  }

    let num = Math.floor(Math.random() * 5)+1;
    let img = document.getElementById(`img`);

    img.src = `img/m${num}.jpg`;
   
  
