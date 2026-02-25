// 1. STAGGERED ANIMATIONS
// Handles the fade-in effect for your content
document.querySelectorAll(".fade, .fade-img").forEach((el, i) => {
  el.style.animationDelay = `${i * 0.15}s`;
});

// 2. MOBILE MENU TOGGLE
// Opens and closes the dropdown links on phone
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  if (menu) {
    menu.classList.toggle("show");
  }
}

// 3. UX: CLOSE MENU WHEN CLICKING A LINK
// Ensures the menu disappears after you click a section
document.addEventListener("click", (e) => {
  const menu = document.getElementById("navMenu");
  if (menu && menu.classList.contains("show")) {
    if (e.target.closest(".nav-links a")) {
      menu.classList.remove("show");
    }
  }
});

// document.querySelectorAll('.fade, .fade-img').forEach((el, i) => {
//     el.style.animationDelay = `${i * 0.3}s`;
// });

// // //
// //       /* Toggle mobile menu */
// //       function toggleMenu() {
// //         const menu = document.getElementById("navMenu");
// //         menu.classList.toggle("show");
// //         console.log("Menu toggled"); // Useful for debugging
// //       }

// //       // Staggered delays for animations
// //       document.querySelectorAll(".fade").forEach((el, i) => {
// //         el.style.animationDelay = `${i * 0.3}s`;
// //       });

// //       let lastScrollY = window.scrollY;
// //       window.addEventListener("scroll", () => {
// //         const header = document.getElementById("site-header");
// //         if (window.innerWidth <= 900) {
// //           if (window.scrollY > lastScrollY) {
// //             header.classList.add("hide");
// //           } else {
// //             header.classList.remove("hide");
// //           }
// //         } else {
// //           header.classList.remove("hide");
// //         }
// //         lastScrollY = window.scrollY;
// //       });

// //       /* UX: Close menu when clicking outside or on a link */
// //       document.addEventListener("click", (e) => {
// //         const menu = document.getElementById("navMenu");
// //         if (menu.classList.contains("show")) {
// //           if (
// //             e.target.closest(".nav-links a") ||
// //             (!e.target.closest(".nav-links") && !e.target.closest(".hamburger"))
// //           ) {
// //             menu.classList.remove("show");
// //           }
// //         }
// //       });

// //
