console.log("Hello World")
let maincontainer = document.getElementById('maincontainer');
let maincontainer2 = document.getElementById('maincontainer2');
let container = document.getElementById('container')
let container2 = document.getElementById('container2')
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let cleog = document.getElementById('cleog');
btn.addEventListener('click', function() {
    maincontainer.style.transform = 'rotate(-90deg)'
    maincontainer.style.transition = 'all 4s'
    // maincontainer2.style.transform = 'rotate(0deg)'
    // maincontainer2.style.transition = 'all 4s'
    maincontainer2.style.background = '#A31BFF'
    maincontainer2.style.transition = 'all 4s'
    //container.style.transform = 'translateY(-100vh)';
    //container.style.transition = 'all 2s ease-in';
    maincontainer2.style.transform = 'translateY(-100vh)';
    maincontainer2.style.transition = 'all 2.2s ease-in';
})
btn2.addEventListener('click', function() {
    maincontainer.style.background = '#F9DF33'
    maincontainer.style.transition = 'all 4s'
    maincontainer2.style.transform = 'rotate(90deg)'
    maincontainer2.style.transition = 'all 4s'
    maincontainer2.style.background = '#F9DF33'
    maincontainer2.style.transition = 'all 4s'
    container.style.transform = 'translateY(0px)';
    container.style.transition = 'all 2s ease-in';
    maincontainer2.style.transform = 'translateY(0px)';
    maincontainer2.style.transition = 'all 2s ease-in';
    maincontainer.style.transform = 'rotate(0deg)'
    maincontainer.style.transition = 'all 2.2s'
})

