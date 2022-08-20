let nav = document.querySelector('header nav');
let meun = document.querySelector('#btn-menu');
let cart = document.querySelector('.cart-item-container');
let shop = document.querySelector('#btn-cart');
let search = document.querySelector('.form-search');
let btnSearch = document.querySelector('#btn-search');



meun.onclick = () =>{
    nav.classList.toggle('active');
    cart.classList.remove('show');
    search.classList.remove('showe');
}

shop.onclick = () =>{
    cart.classList.toggle('show');
    nav.classList.remove('active');
    search.classList.remove('showe');
}

btnSearch.onclick = () =>{
    search.classList.toggle('showe');
    cart.classList.remove('show');
    nav.classList.remove('active');
}

window.onscroll = () =>{
    cart.classList.remove('show');
    nav.classList.remove('active');
    search.classList.remove('showe');
}