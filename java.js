let kartink1 = document.querySelector('.wp1')
let kartink2 = document.querySelector('.wp2')
let knopk = document.querySelector('.knpkTud')
let knopks = document.querySelector('.knpkSud')

kartink1.style.display = 'none'
/*function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}*/
function perecl() {
    kartink2.style.display = 'none'
    knopk.style.display = 'none'
}

while (true) {
    knopk.addEventListener('click', perecl);
}