/* ================= MOBILE MENU ================= */

const header = document.querySelector(".header");
const menuButton = document.querySelector("#menuButton");

menuButton.addEventListener("click", () => {

    header.classList.toggle("mobile-open");

    const icon = menuButton.querySelector("i");

    if (header.classList.contains("mobile-open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* ================= CLOSE MENU ================= */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        header.classList.remove("mobile-open");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= SCROLL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= ACTIVE NAVBAR ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar a");

function updateActiveNav() {

    let current = "home";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* ================= HERO PARALLAX ================= */

const heroVisual =
    document.querySelector(".hero-visual");

window.addEventListener("mousemove", event => {

    if (window.innerWidth < 950) return;

    const x =
        (event.clientX / window.innerWidth - .5) * 8;

    const y =
        (event.clientY / window.innerHeight - .5) * 8;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* ================= SMOOTH BUTTON ================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", event => {

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ================= CONTENT PROTECTION (deterrent) =================
   Catatan: di GitHub Pages source tetap bisa diakses lewat repo / curl.
   Script ini hanya menghambat user awam (klik kanan, shortcut, dsb).
==================================================================== */

(function () {
  "use strict";

  function protectToast(msg) {
    let el = document.getElementById("hf-protect-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "hf-protect-toast";
      el.style.cssText =
        "position:fixed;left:50%;bottom:22px;transform:translateX(-50%);" +
        "background:#111;color:#fff;padding:11px 18px;border-radius:12px;" +
        "z-index:999999;font-family:Poppins,Arial,sans-serif;font-size:13px;" +
        "box-shadow:0 10px 28px rgba(0,0,0,.25);opacity:0;transition:opacity .2s;pointer-events:none";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = "1";
    clearTimeout(el._t);
    el._t = setTimeout(() => {
      el.style.opacity = "0";
    }, 1800);
  }

  // Blokir klik kanan
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    protectToast("Konten dilindungi");
  });

  // Blokir shortcut umum: F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I/J/C, Ctrl+P
  document.addEventListener("keydown", function (e) {
    const k = (e.key || "").toUpperCase();
    const ctrl = e.ctrlKey || e.metaKey;
    const shift = e.shiftKey;

    if (
      k === "F12" ||
      (ctrl && shift && ["I", "J", "C", "K"].includes(k)) ||
      (ctrl && ["U", "S"].includes(k))
    ) {
      e.preventDefault();
      e.stopPropagation();
      protectToast("Aksi tidak diizinkan");
      return false;
    }
  }, true);

  // Cegah drag gambar / teks
  document.addEventListener("dragstart", function (e) {
    if (e.target && (e.target.tagName === "IMG" || e.target.closest("img"))) {
      e.preventDefault();
    }
  });

  // Nonaktifkan seleksi di area non-input (opsional, user-friendly)
  document.addEventListener("selectstart", function (e) {
    const tag = (e.target && e.target.tagName) || "";
    if (["INPUT", "TEXTAREA", "A", "BUTTON"].includes(tag)) return;
    // izinkan seleksi di paragraf panjang jika perlu — di sini kita biarkan
  });

  // Deteksi DevTools kasar (ukuran jendela) — hanya deterrent ringan
  let devtoolsOpen = false;
  const threshold = 160;
  setInterval(function () {
    const widthGap = window.outerWidth - window.innerWidth > threshold;
    const heightGap = window.outerHeight - window.innerHeight > threshold;
    if ((widthGap || heightGap) && !devtoolsOpen) {
      devtoolsOpen = true;
      // tidak redirect / blank — hanya log internal
      console.clear();
    } else if (!widthGap && !heightGap) {
      devtoolsOpen = false;
    }
  }, 1200);

  // Bersihkan console secara berkala (menghambat inspect cepat)
  setInterval(function () {
    try {
      console.clear();
    } catch (err) {}
  }, 3000);

})();
