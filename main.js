// BÀI TẬP 01----------------------------
// - Đầu vào:
//     + Điểm 3 môn
//     + Điểm ưu tiên
//     + Điểm chuẩn
// - Xử lý:
//     + Tính tổng điểm thí sinh đạt được
// - Đầu ra:
//     + Kết quả đậu hoặc trượt

function tinhDiem(diemMon1, diemMon2, diemMon3, khuVuc, doiTuong, diemChuan){
   
    var diemKhuVuc = 0;
    khuVuc = khuVuc.toUpperCase();
    if (khuVuc == "A"){
       diemKhuVuc = 2;
    }
    else if (khuVuc == "B"){
        diemKhuVuc = 1;
    }
    else if (khuVuc == "B"){
        diemKhuVuc = 0.5;
    }
    else if (khuVuc == "X"){
        diemKhuVuc = 0;
    }

    var diemDoiTuong = 0;
    if (doiTuong == 1){
       diemDoiTuong = 2.5;
    }
    else if (doiTuong == 2){
        diemDoiTuong = 1.5;
    }
    else if (doiTuong == 3){
        diemDoiTuong = 1;
    }
    else if (doiTuong == 0){
        diemDoiTuong = 0;
    }

    var tongDiem = diemMon1 + diemMon1 + diemMon1 + diemKhuVuc + diemDoiTuong;
    var result;

    if (tongDiem>=diemChuan && diemMon1 != 0 && diemMon2 != 0 && diemMon3 != 0){
        result =true;
    }
    else{
        result = false;
    }
    return result;
}


document.getElementById("exBtn01").onclick = function(){
    var diemMon1 = parseInt(document.getElementById("diemMon1").value);
    var diemMon2 = parseInt(document.getElementById("diemMon2").value);
    var diemMon3 = parseInt(document.getElementById("diemMon3").value);
    var diemChuan = parseInt(document.getElementById("diemChuan").value);
    var khuVuc = document.getElementById("khuVuc").value.toUpperCase();
    var doiTuong = document.getElementById("doiTuong").value.toUpperCase();
    var ktKhuVuc, ktDoiTuong;

    if(khuVuc == "A" || khuVuc == "B" || khuVuc == "C" || khuVuc == "X"){
        ktKhuVuc = true;
    }
    else{
        ktKhuVuc = false
    }

    if(doiTuong == 1 || doiTuong == 2 || doiTuong == 3 || doiTuong == 0){
        ktDoiTuong = true;
    }
    else{
        ktDoiTuong = false
    }

    if (diemMon1>= 0 && diemMon2>= 0 && diemMon3>= 0 && ktDoiTuong ==true && ktKhuVuc == true){
        var ketqua = tinhDiem(diemMon1,diemMon2,diemMon3,khuVuc,doiTuong,diemChuan);
        if (ketqua == true){
            document.getElementById("ex01_result").innerHTML = "Bạn đã trúng tuyển"
            document.getElementById("ex01_result").classList.remove("alert-danger");
            document.getElementById("ex01_result").classList.remove("alert-warning");
            document.getElementById("ex01_result").classList.add("alert-success"); 
        }
        else{
            document.getElementById("ex01_result").innerHTML = "Bạn đã thi trượt"
            document.getElementById("ex01_result").classList.remove("alert-success");
            document.getElementById("ex01_result").classList.remove("alert-warning");
            document.getElementById("ex01_result").classList.add("alert-danger"); 
        }
    }
    else{
        document.getElementById("ex01_result").innerHTML = "Bạn đã nhập sai thông tin"
        document.getElementById("ex01_result").classList.add("alert-warning");
    }

}


// BÀI TẬP 02----------------------------
// - Đầu vào:
//     + Số điện tiêu thụ
// - Xử lý:
//     + Tính tổng điểm thí sinh đạt được
// - Đầu ra:
//     + Kết quả đậu hoặc trượt

function tinhTienDien(tongKW){
    var tongTien = 0;
    if (tongKW <= 50){
        tongTien = tongKW * 500
    }
    else if (tongKW > 50 && tongKW <=100){
        tongTien = 50*500 + (tongKW-50)*650;
    }
    else if (tongKW > 100 && tongKW <=200){
        tongTien = 50*500 + 50*650 + (tongKW - 50 - 50)*850;
    }
    else if (tongKW > 200 && tongKW <=350){
        tongTien = 50*500 + 50*650 + 100*850 + (tongKW - 50 - 50 -100)*1100;
    }
    else{
        tongTien = 50*500 + 50*650 + 100*850 + 150*1100 + (tongKW - 50 - 50 -100 - 150)*1300;
    }
    return tongTien;
}

var currencyFormat = Intl.NumberFormat("vn-VN")

document.getElementById("exBtn02").onclick = function(){
    var tongKw = parseFloat(document.getElementById("tongKw").value);
    document.getElementById("ex02_result").innerHTML = "Số tiền bạn phải trả là " + currencyFormat.format(tinhTienDien(tongKw)) + " VND";
}