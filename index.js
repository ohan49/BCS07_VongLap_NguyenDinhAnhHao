// todo: Tìm Số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... + n > 10000
/*
* Sơ đồ 3 khối
! Đề bài: Tìm Số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... + n > 10000
* input: 
* Các bước xử lý: tạo ra 2 biến tong và n bằng 0 khi tổng nhỏ hơn 10000 thì i tăng lên 1 và tổng sẽ cộng thêm i
* output: số nguyên dương n in ra màn hình.
*/

function timSo() {
  var tong = 0;
  var n = 0;
  while (tong < 10000) {
    n++;
    tong += n;
  }
  document.querySelector("#timSo").innerHTML = "Kết quả là: " + n;
}

// todo: Viết chương trình nhập vào 2 số x, n tính tổng S(n) = x + x^2 + x^3 + ... + x^n
/*
* Sơ đồ 3 khối
! Đề bài: Viết chương trình nhập vào 2 số x, n tính tổng S(n) = x + x^2 + x^3 + ... + x^n
* input: số nguyên dương x và n
* Các bước xử lý: tạo ra 2 biến tong và n bằng 0 khi tổng nhỏ hơn 10000 thì i tăng lên 1 và tổng sẽ cộng thêm i
* output: số nguyên dương n in ra màn hình.
*/

function timTong() {
  var n = document.getElementById("n").value * 1;
  var x = document.getElementById("x").value * 1;
  var s = 0;
  var ketQua = "";
  if ((x < 0) | (n < 0)) {
    var ketQua = "Số nguyên dương x và n phải lớn hơn 0";
  } else {
    for (var i = 1; i <= n; i++) {
      s += Math.pow(x, i);
    }
    var ketQua = "Kết quả là: " + s;
  }
  document.querySelector("#bT2").innerHTML = ketQua;
}

// todo: nhập vào n tính giai thừa
/*
* Sơ đồ 3 khối
! Đề bài: nhập vào n tính giai thừa
* input: số nguyên dương n
* Các bước xử lý: lấy dữ liệu từ input sau đó *1 để ép kiểu number cho n tạo 1 biên s = 1 sau đó cho chạy vòng lặp từ 1 đến n rồi lấy s*i.
* output: giai thừa của n in ra màn hình.
*/
function timGiaiThua() {
  var n = document.getElementById("n1").value * 1;
  var s = 1;
  var ketQua = "";
  if (n > 0) {
    for (var i = 1; i <= n; i++) {
      s *= i;
    }
    ketQua = "Kết quả là: " + s;
  } else {
    ketQua = "Error nhập lại n";
  }
  document.querySelector("#bT3").innerHTML = ketQua;
}

// todo: Click vào button sẽ in ra 10 thẻ div. Nếu div chẵn thì màu đỏ lẻ thì màu xanh
/*
* Sơ đồ 3 khối
! Đề bài: Click vào button sẽ in ra 10 thẻ div. Nếu div chẵn thì màu đỏ lẻ thì màu xanh
* input: 
* Các bước xử lý: chạy vòng lặp i từ 1 đến 10 nếu i%2 == 0 là chẵn in ra thẻ div đỏ ngược lại in ra thẻ div xanh
* output: in ra màn hình 10 thẻ div thẻ chẵn màu đỏ lẻ màu xanh.
*/
function inRaDiv() {
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
      document.querySelector(
        ".bT4"
      ).innerHTML += `<div class="bg-danger p-4"></div>`;
    } else {
      document.querySelector(
        ".bT4"
      ).innerHTML += `<div class="bg-info p-4"></div>`;
    }
  }
}

// todo: In ra số nguyên tố
/*
* Sơ đồ 3 khối
! Đề bài: nhập vào n in ra số nguyên tố
* input: số nguyên dương n
* Các bước xử lý: lấy dữ liệu từ input sau đó *1 để ép kiểu number cho n tạo 2 vòng lặp vòng lặp 1 cho i chạy từ 2 đến n, tạo 1 biến count trong vòng lặp 1 tạo thêm 1 vòng lặp chạy từ 1 đến i, nếu i chia hết cho j thì biến count sẽ được cộng thêm 1, nếu i chỉ chia hết cho 1 và chính nó thì count sẽ bằng 2 và in ra i.
* output: in ra màn hình số nguyên tố i.
*/
function nguyenTo() {
  var n = document.getElementById("n2").value * 1;
  var ketQua = "";
  if (n > 1) {
    for (var i = 2; i <= n; i++) {
      var count = 0;
      for (var j = 1; j <= i; j++) {
        if (i % j == 0) {
          count++;
        }
      }
      if (count == 2) {
        ketQua += "Số nguyên tố là: " + i + "<br>";
      }
    }
  } else {
    ketQua = "Số nguyên tố không hợp lệ!";
  }
  document.querySelector("#bT5").innerHTML = ketQua;
}
