let dongDangChon = null;
let cotDangChon = null;
let chiHienThiDong = false;
let chiHienThiCot = false;

// 1. Hiển thị đồng hồ điện tử
function hienThiGio() {
    let ngayGio = new Date();

    document.getElementById("dongHo").innerHTML =
        ngayGio.toLocaleTimeString("vi-VN", {
            hour12: false
        });
}

hienThiGio();
setInterval(hienThiGio, 1000);


// 2. Thông báo khi click chuột trái hoặc phải
document.addEventListener("click", function(event) {
    if (event.button === 0) {
        alert("Bạn vừa click chuột trái!");
    }
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Bạn vừa click chuột phải!");
});


// 3. Click vào dòng để tô đỏ
let bang = document.getElementById("myTable");

bang.addEventListener("click", function(event) {
    let o = event.target;

    if (o.tagName === "TD") {
        let dong = o.parentElement;

        // Bỏ màu đỏ của dòng trước
        let dsDong = bang.rows;

        for (let i = 0; i < dsDong.length; i++) {
            dsDong[i].classList.remove("dongDo");
        }

        // Tô đỏ dòng vừa chọn
        dong.classList.add("dongDo");
        dongDangChon = dong;

        cotDangChon = o.cellIndex;
    }
});


// 4. Thêm một dòng mới
function themDong() {
    let dong = bang.insertRow();

    let o1 = dong.insertCell(0);
    let o2 = dong.insertCell(1);

    o1.innerHTML = "Dòng mới cột 1";
    o2.innerHTML = "Dòng mới cột 2";
}


// 5. Xóa dòng đang chọn
function xoaDong() {
    if (dongDangChon == null) {
        alert("Vui lòng chọn dòng cần xóa!");
        return;
    }

    dongDangChon.remove();
    dongDangChon = null;
}


// 6. Chỉ hiển thị dòng đang chọn
function chiHienDong() {
    if (dongDangChon == null) {
        alert("Vui lòng chọn dòng cần hiển thị!");
        return;
    }

    let dsDong = bang.rows;

    if (!chiHienThiDong) {
        for (let i = 0; i < dsDong.length; i++) {
            dsDong[i].style.display =
                dsDong[i] === dongDangChon ? "" : "none";
        }

        chiHienThiDong = true;
    } else {
        for (let i = 0; i < dsDong.length; i++) {
            dsDong[i].style.display = "";
        }

        chiHienThiDong = false;
    }
}


// 7. Chỉ hiển thị cột đang chọn
function chiHienCot() {
    if (cotDangChon == null) {
        alert("Vui lòng chọn một ô trong cột cần hiển thị!");
        return;
    }

    let dsDong = bang.rows;

    if (!chiHienThiCot) {
        for (let i = 0; i < dsDong.length; i++) {
            for (let j = 0; j < dsDong[i].cells.length; j++) {
                dsDong[i].cells[j].style.display =
                    j === cotDangChon ? "" : "none";
            }
        }

        chiHienThiCot = true;
    } else {
        for (let i = 0; i < dsDong.length; i++) {
            for (let j = 0; j < dsDong[i].cells.length; j++) {
                dsDong[i].cells[j].style.display = "";
            }
        }

        chiHienThiCot = false;
    }
}


// 8. Mở một trang mới
function moTrangMoi() {
    window.open("https://tranduythanh.com/", "_blank");
}
