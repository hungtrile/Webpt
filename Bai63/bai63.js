
function taoDanhSach() {
    // Tạo danh sách ngày
    document.getElementById("ngay").innerHTML =
        '<option value="" selected></option>';

    for (let i = 1; i <= 31; i++) {
        let ngay = i < 10 ? "0" + i : i;

        document.getElementById("ngay").innerHTML +=
            `<option value="${i}">${ngay}</option>`;
    }

    // Tạo danh sách tháng
    document.getElementById("thang").innerHTML =
        '<option value="" selected></option>';

    for (let i = 1; i <= 12; i++) {
        document.getElementById("thang").innerHTML +=
            `<option value="${i}">${i}</option>`;
    }

    // Tạo danh sách năm
    document.getElementById("nam").innerHTML =
        '<option value="" selected></option>';

    for (let i = 1970; i <= 2026; i++) {
        document.getElementById("nam").innerHTML +=
            `<option value="${i}">${i}</option>`;
    }
}

// Lấy giới tính
function layGioiTinh() {
    let ds = document.getElementsByName("gioiTinh");

    for (let i = 0; i < ds.length; i++) {
        if (ds[i].checked) {
            return ds[i].value;
        }
    }

    return "";
}

// Lấy sở thích
function laySoThich() {
    let ds = document.getElementsByName("soThich");
    let ketQua = [];

    for (let i = 0; i < ds.length; i++) {
        if (ds[i].checked) {
            ketQua.push(ds[i].value);
        }
    }

    return ketQua.join(", ");
}

// Lấy màu yêu thích
function layMau() {
    let ds = document.getElementsByName("mau");

    for (let i = 0; i < ds.length; i++) {
        if (ds[i].checked) {
            return ds[i].value;
        }
    }

    return "";
}

// Đăng ký thành viên
function dangKy() {
    let hoTen = document.getElementById("hoTen").value.trim();
    let email = document.getElementById("email").value.trim();

    // Kiểm tra họ tên
    if (hoTen == "") {
        alert("Vui lòng nhập họ tên!");
        document.getElementById("hoTen").focus();
        return;
    }

    // Kiểm tra email
    let mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!mauEmail.test(email)) {
        alert("Email không hợp lệ!");
        document.getElementById("email").focus();
        return;
    }

    // Kiểm tra ngày tháng năm sinh
    let ngay = document.getElementById("ngay").value;
    let thang = document.getElementById("thang").value;
    let nam = document.getElementById("nam").value;

    if (ngay == "" || thang == "" || nam == "") {
        alert("Vui lòng chọn đầy đủ ngày sinh!");
        return;
    }

    ngay = Number(ngay);
    thang = Number(thang);
    nam = Number(nam);

    let ngaySinh = new Date(nam, thang - 1, ngay);

    if (
        ngaySinh.getDate() != ngay ||
        ngaySinh.getMonth() != thang - 1 ||
        ngaySinh.getFullYear() != nam
    ) {
        alert("Ngày sinh không hợp lệ!");
        return;
    }

    // Kiểm tra giới tính
    let gioiTinh = layGioiTinh();

    if (gioiTinh == "") {
        alert("Vui lòng chọn giới tính!");
        return;
    }

    // Kiểm tra màu yêu thích
    let mau = layMau();

    if (mau == "") {
        alert("Vui lòng chọn màu yêu thích!");
        return;
    }

    // Lấy sở thích
    let soThich = laySoThich();

    // Tạo dòng mới trong bảng
    let dong = document.createElement("tr");

    let duLieu = [
        hoTen,
        email,
        gioiTinh,
        (ngay < 10 ? "0" + ngay : ngay) + "/" +
        (thang < 10 ? "0" + thang : thang) + "/" + nam,
        soThich,
        mau
    ];

    for (let i = 0; i < duLieu.length; i++) {
        let o = document.createElement("td");
        o.textContent = duLieu[i];
        dong.appendChild(o);
    }

    document.getElementById("dsThanhVien").appendChild(dong);

    alert("Đăng ký thành công!");
}

// Nút Tiếp
function tiep() {
    document.getElementById("formDangKy").reset();
    document.getElementById("ngay").selectedIndex = 0;
    document.getElementById("thang").selectedIndex = 0;
    document.getElementById("nam").selectedIndex = 0;
    document.getElementById("hoTen").focus();
}

// Khởi tạo danh sách ngày, tháng, năm
taoDanhSach();
