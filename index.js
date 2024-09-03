let arrNumber = [];
document.querySelector(".btn--primary").onclick = function () {
  let number = document.getElementById("inputNum").value;
  if (number == false) {
    arrNumber.push((number = 0));
  } else {
    arrNumber.push(number);
  }
  document.getElementById("txtArray").innerHTML = arrNumber;
};

document.getElementById("sumDuong").onclick = function () {
  let sum = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      sum += arrNumber[i] * 1;
    } else {
      continue;
    }
  }
  document.getElementById("txtSum").innerHTML = `Tổng số dương là: ${sum}.`;
};

document.getElementById("countNumber").onclick = function () {
  let count = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      count++;
    }
  }
  document.getElementById(
    "txtCount"
  ).innerHTML = `Ta đếm được ${count} số dương.`;
};

document.getElementById("smallestNumber").onclick = function () {
  let smallestNumber = arrNumber[0];
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < smallestNumber) {
      smallestNumber = arrNumber[i];
    }
  }
  document.getElementById(
    "txtMin"
  ).innerHTML = `Số nhỏ nhất là : ${smallestNumber}.`;
};

document.getElementById("smallestPositiveNumber").onclick = function () {
  let arrPositiveNumber = [];
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      arrPositiveNumber.push(arrNumber[i]);
    }
  }
  console.log(arrPositiveNumber);

  let checkArrNumber = arrPositiveNumber[0];
  for (let z = 0; z < arrPositiveNumber.length; z++) {
    if (arrPositiveNumber[z] < checkArrNumber) {
      checkArrNumber = arrPositiveNumber[z];
    }
  }

  if (arrNumber == false) {
    document.getElementById("txtMinPos").innerHTML = `Không có số dương`;
  } else {
    document.getElementById(
      "txtMinPos"
    ).innerHTML = `Số Dương Nhỏ Nhất Là: ${checkArrNumber}`;
  }
};

document.getElementById("soChan").onclick = function () {
  let soChanCuoiCung;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 == 0) {
      soChanCuoiCung = arrNumber[i];
    }
  }
  document.getElementById(
    "txtEven"
  ).innerHTML = `Số chẵn cuối cùng là : ${soChanCuoiCung}`;
};

document.getElementById("changePos").onclick = function () {
  let input1 = document.getElementById("inputIndex1").value;
  let input2 = document.getElementById("inputIndex2").value;
  let bienTam;

  bienTam = arrNumber[input1];
  arrNumber[input1] = arrNumber[input2];
  arrNumber[input2] = bienTam;

  document.getElementById(
    "txtChangePos"
  ).innerHTML = `Mảng sau khi đổi là:${arrNumber}`;
};

document.getElementById("minToMax").onclick = function () {
  arrNumber.sort((a, b) => a - b);
  document.getElementById(
    "txtIncrease"
  ).innerHTML = `Mảng có số từ nhỏ đến lớn: ${arrNumber}`;
};

document.getElementById("soNguyenTo").onclick = function () {
  let firstPrimeNumber = [];
  for (let i = 0; i < arrNumber.length; i++) {
    if (isPrime(arrNumber[i])) {
      firstPrimeNumber.push(arrNumber[i]);
      break;
    }
  }
  document.getElementById(
    "txtPrime"
  ).innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${firstPrimeNumber}`;
};
function isPrime(arrNumber) {
  if (arrNumber <= 1) return false;
  for (let i = 2; i <= Math.sqrt(arrNumber); i++) {
    if (arrNumber % i === 0) return false;
    break;
  }
  return true;
}
let checkSoNguyen = [];
document.getElementById("addNumber").onclick = function () {
  let soNguyen = document.getElementById("inputFloat").value;
  if (soNguyen == false) {
    checkSoNguyen.push((soNguyen = 0));
  } else {
    checkSoNguyen.push(soNguyen);
  }
  document.getElementById("txtArrayFloat").innerHTML = checkSoNguyen;
};
console.log(checkSoNguyen);

document.getElementById("countSoNguyen").onclick = function () {
  let countSoNguyen = countIntergers(checkSoNguyen);

  document.getElementById(
    "txtInt"
  ).innerHTML = `Có ${countSoNguyen} số nguyên.`;
};
function countIntergers(checkSoNguyen) {
  let count = 0;
  for (let i = 0; i < checkSoNguyen.length; i++) {
    if (Number.isInteger(checkSoNguyen[i])) {
      count++;
    }
  }
  return count;
}

document.getElementById("difNum").onclick = function () {
  document.getElementById("txtCompare").innerHTML = ``;
};
