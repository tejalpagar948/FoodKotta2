let name = document.querySelector('#name');
let email = document.querySelector('#email');
let mobile = document.querySelector('#mobile');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let cpassword = document.querySelector('#cpassword');
let submit = document.querySelector('#submit');

let ename = document.querySelectorAll('span')[0];
let eemail = document.querySelectorAll('span')[1];
let emobile = document.querySelectorAll('span')[2];
let eusername = document.querySelectorAll('span')[3];
let epassword = document.querySelectorAll('span')[4];
let ecpassword = document.querySelectorAll('span')[5];
let form = document.querySelector('form');

let submitButton = document.querySelector('#submit');
let regx = /^[a-zA-Z]{2,25}$/;
let regx1 = /^[6-9][0-9]{9}$/;
let regx2 = /^[a-zA-Z0-9@]{6-15}$/;

form.addEventListener('submit', (e) => {
  if (name.value == '') {
    ename.innerHTML = 'Please enter your name';
    e.preventDefault();
  } else if (regx.test(name.value)) {
    ename.innerHTML = ' ';
  } else {
    ename.innerHTML = 'min 2 or max 25 a-z A-Z characters allowed';
    e.preventDefault();
  }

  if (email.value == '') {
    eemail.innerHTML = 'Please enter your email';
    e.preventDefault();
  } else if (regx2.test(email.value)) {
    eemail.innerHTML = ' ';
  } else {
    eemail.innerHTML = 'invalid email id';
    e.preventDefault();
  }

  if (mobile.value == '') {
    emobile.innerHTML = 'Please enter your phone number';
    e.preventDefault();
  } else if (regx1.test(mobile.value)) {
    emobile.innerHTML = ' ';
  } else {
    emobile.innerHTML = 'Invalid phone number';
    e.preventDefault();
  }

  if (username.value == '') {
    eusername.innerHTML = 'Please enter your username';
    e.preventDefault();
  } else if (regx2.test(username.value)) {
    emobile.innerHTML = ' ';
  } else {
    emobile.innerHTML = 'usewrname should be min-6 or max 15 characters';
    e.preventDefault();
  }

  if (password.value == '') {
    epassword.innerHTML = 'Please enter your password';
    e.preventDefault();
  } else if (regx2.test(password.value)) {
    epassword.innerHTML = ' ';
  } else {
    epassword.innerHTML =
      'password should be contain min 6 or max 15 characters';
    e.preventDefault();
  }

  if (cpassword.value == '') {
    ecpassword.innerHTML = 'Please enter your confirm password';
    e.preventDefault();
  } else if (password == cpassword) {
    ecpassword.innerHTML = ' ';
  } else {
    ecpassword.innerHTML = 'password is not matching';
    e.preventDefault();
  }

  let nm = name.value.trim();
  // localStorage.setItem('name', nm);
  let em = email.value.trim();
  // localStorage.setItem('email', em);
  let pn = mobile.value.trim();
  //  localStorage.setItem('mobile', pn);
  let us = username.value.trim();
  //localStorage.setItem('username', us);
  let ps = password.value.trim();
  //localStorage.setItem('password', ps);
  let cps = cpassword.value.trim();
  //localStorage.setItem('cpassword', cps);

  // let detailes = new Array();
  // detailes = JSON.parse(localStorage.getItem('users'))  ? JSON.parse(localStorage.getItem('users'))
  //   : [];
});
