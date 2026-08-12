document.addEventListener("DOMContentLoaded", function () {

    const firstPopup = document.getElementById("downloadPopup");
    const secondPopup = document.getElementById("driverPopup");
    const thirdPopup = document.getElementById("connectionPopup");

    /*=========================
      OPEN POPUP
    =========================*/

    document.querySelectorAll(".openPopup").forEach(btn => {

        btn.addEventListener("click", function (e) {

            e.preventDefault();

            firstPopup.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    /*=========================
      CLOSE POPUP 1
    =========================*/

    document.getElementById("closePopup").onclick = function () {

        firstPopup.classList.remove("active");

        document.body.style.overflow = "auto";

    };

    /*=========================
      POPUP 1 → POPUP 2
    =========================*/

    document.getElementById("nextPopup").onclick = function (e) {

        e.preventDefault();

        firstPopup.classList.remove("active");

        secondPopup.classList.add("active");

    };

    /*=========================
      CLOSE POPUP 2
    =========================*/

    document.getElementById("closeDriverPopup").onclick = function () {

        secondPopup.classList.remove("active");

        document.body.style.overflow = "auto";

    };

    /*=========================
      POPUP 2 → POPUP 3
    =========================*/

    document.getElementById("driverForm").addEventListener("submit", function (e) {

        e.preventDefault();

        if (!this.checkValidity()) {

            this.reportValidity();

            return;

        }

        const model = document.getElementById("printerModel").value.trim();

        localStorage.setItem("printerModel", model);

        secondPopup.classList.remove("active");

        thirdPopup.classList.add("active");

    });

    /*=========================
      CLOSE POPUP 3
    =========================*/

    document.getElementById("closeConnectionPopup").onclick = function () {

        thirdPopup.classList.remove("active");

        document.body.style.overflow = "auto";

    };

    /*=========================
      USB BUTTON
    =========================*/

    document.querySelector(".usbBtn").onclick = function () {

        window.location.href = "usb-setup.html";

    };

    /*=========================
      WIFI BUTTON
    =========================*/

    document.querySelector(".wifiBtn").onclick = function () {

        window.location.href = "wifi-setup.html";

    };

});