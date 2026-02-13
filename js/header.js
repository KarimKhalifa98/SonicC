const burgerIcon = document.getElementById('burgerIcon');
const mobileMenu = document.getElementById('mobile-menu');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
});

burgerIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle('scale-y-0');
    mobileMenu.classList.toggle('opacity-0');
})
// mobileLink.forEach(link => {
//     link.addEventListener("click", function () {
//         mobileMenu.classList.toggle('scale-y-0');
//         mobileMenu.classList.toggle('opacity-0');

//     })
// })

