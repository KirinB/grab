const XE_GRAB_CAR = "grabCar";
const XE_GRAB_SUV = "grabSUV";
const XE_GRAB_BLACK = "grabBlack";

function giaTienKmDauTien(loaiXe) {
  switch (loaiXe) {
    case XE_GRAB_CAR:
      return 8000;
    case XE_GRAB_SUV:
      return 9000;
    case XE_GRAB_BLACK:
      return 10000;
    default:
      alert("Hệ thống có vấn đề vui lòng thử lại sau");
      break;
  }
}

function giaTien1Den19(loaiXe, doanDuong) {
  switch (loaiXe) {
    case XE_GRAB_CAR:
      return 7500;
    case XE_GRAB_SUV:
      return 8500;
    case XE_GRAB_BLACK:
      return 9500;
    default:
      alert("Hệ thống có vấn đề vui lòng thử lại sau");
      break;
  }
}

function giaTien19TroLen(loaiXe, doanDuong) {
  switch (loaiXe) {
    case XE_GRAB_CAR:
      return 7000;
    case XE_GRAB_SUV:
      return 8000;
    case XE_GRAB_BLACK:
      return 9000;
    default:
      alert("Hệ thống có vấn đề vui lòng thử lại sau");
      break;
  }
}

function tinhThoiGianCho(loaiXe, thoiGianCho) {
  const heSoTgCho = Math.floor((thoiGianCho - 1) / 3);
  switch (loaiXe) {
    case XE_GRAB_CAR:
      return heSoTgCho * 2000;
    case XE_GRAB_SUV:
      return heSoTgCho * 3000;
    case XE_GRAB_BLACK:
      return heSoTgCho * 3500;
    default:
      break;
  }
}

document.getElementById("btnTinhTien").onclick = () => {
  //Input
  const soKm = document.getElementById("txt-km").value * 1;
  const thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  const loaiXe = document.querySelector("input[name=selector]:checked");
  //Handle
  let total = 0;
  if (loaiXe === null) {
    alert("Vui lòng chọn loại xe sử dụng");
  } else {
    if (soKm <= 19) {
      total =
        1 * giaTienKmDauTien(loaiXe.value) +
        (soKm - 1) * giaTien1Den19(loaiXe.value, soKm) +
        tinhThoiGianCho(loaiXe.value, thoiGianCho);
      document.getElementById("divThanhTien").style = `display:block`;
    } else if (soKm > 19) {
      total =
        1 * giaTienKmDauTien(loaiXe.value) +
        (soKm - 1) * giaTien1Den19(loaiXe.value, soKm) +
        (soKm - 19) * giaTien19TroLen(loaiXe.value, soKm) +
        tinhThoiGianCho(loaiXe.value, thoiGianCho);
      document.getElementById("divThanhTien").style = `display:block`;
    }
  }

  //Output
  document.getElementById("xuatTien").innerHTML = `${total.toLocaleString(
    "vi",
    { style: "currency", currency: "VND" }
  )}`;
};
