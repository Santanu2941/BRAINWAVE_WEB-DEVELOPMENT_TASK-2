document.querySelectorAll('.feature-img-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-img-1').src = src;
    });
});

document.querySelectorAll('.feature-img-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-img-2').src = src;
    });
});

document.querySelectorAll('.feature-img-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-img-3').src = src;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const menu=document.querySelector('.menu');
    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});

const menuHeight = document.querySelector('.navbar').offsetHeight;

const home = document.querySelector('.main');
const product = document.querySelector('.item-deatils');
const collection = document.querySelector('.products');
const service = document.querySelector('.features');

const sections=[home,product,collection,service];

document.querySelectorAll('.nav-option').forEach((link,i) =>{
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        const offset = sections[i].offsetTop - menuHeight;
        window.scrollTo({top:offset, behavior:'smooth'}); 
    })
})

document.querySelectorAll('.nav-option2')?.forEach((link,i) =>{
    link.addEventListener('click', (event) =>{
        document.querySelector('.menu').classList.add('hidden');
        event.preventDefault();
        const offset = sections[i]?.offsetTop - menuHeight;
        window.scrollTo({top:offset, behavior:'smooth'}); 
    })
})