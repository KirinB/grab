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

function giaTien1Den19(loaiXe) {
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

function giaTien19TroLen(loaiXe) {
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

function giaTienThoiGianCho(loaiXe) {
  console.log(loaiXe);
  switch (loaiXe) {
    case XE_GRAB_CAR:
      return "2.000";
    case XE_GRAB_SUV:
      return "3.000";
    case XE_GRAB_BLACK:
      return "3.500";
    default:
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
        (soKm - 1) * giaTien1Den19(loaiXe.value) +
        tinhThoiGianCho(loaiXe.value, thoiGianCho);
      document.getElementById("divThanhTien").style = `display:block`;
    } else if (soKm > 19) {
      total =
        1 * giaTienKmDauTien(loaiXe.value) +
        (19 - 1) * giaTien1Den19(loaiXe.value) +
        (soKm - 19) * giaTien19TroLen(loaiXe.value) +
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

function thongTinInHoaDon(loaiXe, soKm) {
  $("#exampleModal").modal("show");
  document.getElementById("loaiXe").innerHTML = loaiXe;
  document.getElementById("soKm").innerHTML = `${soKm} km`;
}

function thoiGianChoInHoaDon(loaiXe, thoiGianCho) {
  if (thoiGianCho <= 3) {
    return `<td scope="row">Thời gian chờ <br /> <span class="small">3 phút đầu free</span></td>
      <td>chờ ${thoiGianCho} phút</td>
      <td>0 ₫</td>
      <td>0 ₫</td>`;
  } else {
    return `<td scope="row">Thời gian chờ <br /> <span class="small">3 phút đầu free</span></td>
      <td>chờ ${thoiGianCho} phút tính tiền ${thoiGianCho - 3} phút</td>
      <td>${giaTienThoiGianCho(loaiXe.value) + " ₫"}</td>
      <td>${tinhThoiGianCho(loaiXe.value, thoiGianCho).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>`;
  }
}

document.getElementById("inHoaDon").onclick = () => {
  //input
  const soKm = document.getElementById("txt-km").value * 1;
  const thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  const loaiXe = document.querySelector("input[name=selector]:checked");
  //handle
  if (loaiXe === null || soKm === 0) {
    alert("Vui lòng điền đầy đủ thông tin");
  } else if (soKm === 1) {
    $("#exampleModal").modal("show");
    thongTinInHoaDon(loaiXe.value, soKm);
    document.getElementById("kmDauTien").innerHTML = `
      <td scope="row">KM đầu tiên</td>
      <td>1km</td>
      <td>${giaTienKmDauTien(loaiXe.value).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${giaTienKmDauTien(loaiXe.value).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>`;
    document.getElementById("thoiGianCho").innerHTML = thoiGianChoInHoaDon(
      loaiXe,
      thoiGianCho
    );
    document.getElementById("tongTien").innerHTML = `${(
      1 * giaTienKmDauTien(loaiXe.value) +
      tinhThoiGianCho(loaiXe.value, thoiGianCho)
    ).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}`;
  } else if (soKm <= 19) {
    $("#exampleModal").modal("show");
    thongTinInHoaDon(loaiXe.value, soKm);
    document.getElementById("kmDauTien").innerHTML = `
      <td scope="row">KM đầu tiên</td>
      <td>1km</td>
      <td>${giaTienKmDauTien(loaiXe.value).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${giaTienKmDauTien(loaiXe.value).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>`;
    document.getElementById("tu1Den19").innerHTML = `
      <td scope="row">Từ 1km đến ${soKm}km</td>
      <td>${soKm - 1}km</td>
      <td>${giaTien1Den19(loaiXe.value).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${((soKm - 1) * giaTien1Den19(loaiXe.value, soKm)).toLocaleString(
        "vi",
        {
          style: "currency",
          currency: "VND",
        }
      )}</td>
      `;
    document.getElementById("thoiGianCho").innerHTML = thoiGianChoInHoaDon(
      loaiXe,
      thoiGianCho
    );
    document.getElementById("tongTien").innerHTML = `${(
      1 * giaTienKmDauTien(loaiXe.value) +
      (soKm - 1) * giaTien1Den19(loaiXe.value) +
      tinhThoiGianCho(loaiXe.value, thoiGianCho)
    ).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}`;
  } else {
    $("#exampleModal").modal("show");
    thongTinInHoaDon(loaiXe.value, soKm);
    document.getElementById("kmDauTien").innerHTML = `
      <td scope="row">KM đầu tiên</td>
      <td>1km</td>
      <td>${giaTienKmDauTien(loaiXe.value).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${giaTienKmDauTien(loaiXe.value).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>`;
    document.getElementById("tu1Den19").innerHTML = `
      <td scope="row">Từ 1km đến 19km</td>
      <td>18km</td>
      <td>${giaTien1Den19(loaiXe.value).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${(18 * giaTien1Den19(loaiXe.value)).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>
      `;
    document.getElementById("tu19TroLen").innerHTML = `
      <td scope="row">Từ 19km trở lên</td>
      <td>${soKm - 19}km</td>
      <td>${giaTien19TroLen(loaiXe.value).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${((soKm - 19) * giaTien19TroLen(loaiXe.value)).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</td>
      `;
    document.getElementById("thoiGianCho").innerHTML = thoiGianChoInHoaDon(
      loaiXe,
      thoiGianCho
    );
    document.getElementById("tongTien").innerHTML = `${(
      1 * giaTienKmDauTien(loaiXe.value) +
      (19 - 1) * giaTien1Den19(loaiXe.value) +
      (soKm - 19) * giaTien19TroLen(loaiXe.value) +
      tinhThoiGianCho(loaiXe.value, thoiGianCho)
    ).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}`;
  }
};
