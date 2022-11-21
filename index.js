var table = document.getElementById("TableNumber");
var NumberList = [];

function Danhsachso() {
  var n = table.rows.length;
  for (i = 0; i < n; i++) {
    // lấy danh sách số
    var number = +table.rows[i].cells[0].innerHTML;
    NumberList.push(number);
  }
}
Danhsachso();
// thêm giá trị user nhập vào
function AddNumber() {
  var Nu = document.getElementById("Numbers").value;
  // kiểm tra user nhập giá trị hay chưa
  if (Nu === "") {
    alert("vui lòng nhập giá trị");
    return;
  }
  var Nu = +document.getElementById("Numbers").value;
  NumberList.push(Nu);
  createNumber();
}
// tạo thêm bản danh sách
function createNumber() {
  var html = "";
  for (i = 0; i < NumberList.length; i++) {
    html += ` <tr>
        <td>${NumberList[i]}</td>
       
    </tr>`;
  }
  document.getElementById("TableNumber").innerHTML = html;
}

// **************** EX1*********************
function SND() {
  var sum = 0;
  for (i = 0; i < NumberList.length; i++) {
    if (NumberList[i] > 0) {
      sum += NumberList[i];
    }
  }
  document.getElementById("ex1").classList.add("active");
  document.getElementById("ex1").innerHTML = sum;
}
// **************** EX2*********************
function Dem() {
  var n = 0;
  for (i = 0; i < NumberList.length; i++) {
    if (NumberList[i] > 0) {
      n += 1;
    }
  }
  document.getElementById("ex2").classList.add("active");
  document.getElementById("ex2").innerHTML = n;
}
// **************** EX3*********************
function Min() {
  for (i = 0; i < NumberList.length; i++) {
    for (j = i + 1; j < NumberList.length; j++) {
      if (NumberList[i] > NumberList[j]) {
        var temp = NumberList[j];
        NumberList[j] = NumberList[i];
        NumberList[i] = temp;
      }
    }
  }
  document.getElementById("ex3").classList.add("active");
  document.getElementById("ex3").innerHTML = NumberList[0];
}
// **************** EX4*********************
function MinDuong() {
  var ListDuong = [];
  for (i = 0; i < NumberList.length; i++) {
    if (NumberList[i] > 0) {
      ListDuong.push(NumberList[i]);
    }
  }
  for (k = 0; k < ListDuong.length; k++) {
    for (j = k + 1; j < ListDuong.length; j++) {
      if (ListDuong[k] > ListDuong[j]) {
        var temp = ListDuong[j];
        ListDuong[j] = ListDuong[k];
        ListDuong[k] = temp;
      }
    }
  }

  document.getElementById("ex4").classList.add("active");
  document.getElementById("ex4").innerHTML = ListDuong[0];
}
// **************** EX5*********************
function chan() {
  var ListChan = [];
  for (i = 0; i < NumberList.length; i++) {
    if (NumberList[i] % 2 === 0) {
      ListChan.push(NumberList[i]);
    }
  }
  document.getElementById("ex5").classList.add("active");
  document.getElementById("ex5").innerHTML = ListChan[ListChan.length - 1];
}
// **************** EX6*********************
function ChangeLocal() {
  var temp = 0;
  var N1 = +document.getElementById("n1").value;
  var N2 = +document.getElementById("n2").value;

  for (i = 0; i < NumberList.length; i++) {
    if (NumberList[i] === N1) {
      temp = NumberList[i];
      for (j = 0; j < NumberList.length; j++) {
        if (NumberList[j] === N2) {
          NumberList[i] = N2;
          NumberList[j] = temp;
          document.getElementById("ex6").classList.add("active");
          document.getElementById("ex6").innerHTML =
            "giá trị mãng sau khi đổi là " + NumberList;
          return;
        }
      }
    }
  }
}
// **************** EX7*********************
function TT() {
  for (i = 0; i < NumberList.length; i++) {
    for (j = i + 1; j < NumberList.length; j++) {
      if (NumberList[i] > NumberList[j]) {
        var temp = NumberList[j];
        NumberList[j] = NumberList[i];
        NumberList[i] = temp;
      }
    }
  }
  document.getElementById("ex7").classList.add("active");
  document.getElementById("ex7").innerHTML = NumberList;
}
// **************** EX8*********************
function snt() {
  for (i = 0; i < NumberList.length; i++) {
    var flag = true;
    var n = NumberList[i];

    if (n < 2) {
      flag = false;
    } else if (n == 2) {
      flag = true;
      document.getElementById("ex8").classList.add("active");
      document.getElementById("ex8").innerHTML =
        "số nguyên tố đầu tiên là " + n;
      break;
    } else if (n % 2 == 0) {
      flag = false;
    } else {
      for (var i = 3; i < n - 1; i += 2) {
        if (n % i == 0) {
          flag = false;
          break;
        }
      }
    }

    if (flag == true) {
      document.getElementById("ex8").classList.add("active");
      document.getElementById("ex8").innerHTML =
        "số nguyên tố đầu tiên là " + n;
      break;
    }
  }
}

// **************** EX9*********************
// user add dãy số
var Nu_ex9 = [];
function addEx9() {
  var n = +document.getElementById("Number_ex9").value;
  if (n == "") {
    alert("vui long nhập số");
    return;
  }
  Nu_ex9.push(n);

  document.getElementById("ex9_1").innerHTML = Nu_ex9;
  document.getElementById("ex9_1").classList.add("active");
}
function SoNguyen() {
  var dem =0;
  for (i=0;i<Nu_ex9.length;i++){
    if( Number.isInteger(Nu_ex9[i]) ){
      dem +=1
    }
  }
  document.getElementById("ex9").innerHTML = "có tất cả "+ dem+ " số Nguyên";
  document.getElementById("ex9").classList.add("active");
}
// **************** EX10*********************
function SoSanh() {
  var Soduong = [];
  var SoAm = [];

  for (i = 0; i < NumberList.length; i++) {
    if (NumberList[i] >= 0) {
      Soduong.push(NumberList[i]);
    } else {
      SoAm.push(NumberList[i]);
    }
  }
  if (Soduong.length > SoAm.length) {
    var sum = Soduong.length - SoAm.length;
    document.getElementById("ex10").classList.add("active");
    document.getElementById("ex10").innerHTML =
      "số Dương lớn hơn số âm " + sum + " số";
  } else {
    var sum = SoAm.length - sumSoduong.length;
    document.getElementById("ex10").classList.add("active");
    document.getElementById("ex10").innerHTML =
      " số âm lớn hơn số dương " + sum + " số ";
  }
}
