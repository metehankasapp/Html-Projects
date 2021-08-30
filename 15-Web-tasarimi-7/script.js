var colorginbg = document.querySelector('#iletisims');

colorginbg.addEventListener('click', function (e) {
    var xd = document.querySelector('#navbar');
    xd.style.transition = '.3s all';
    xd.style.backgroundColor = 'black';
    setTimeout(function () {

        xd.style.backgroundColor = '#3B3E46';
    }, 1000);

    e.preventDefault();
})


var abouttext = document.querySelector('#hakkimizda');

abouttext.addEventListener('click', function (a) {
    document.querySelector('.about-text-2').style.transition = '.3s all'
    document.querySelector('.about-text-2').style.fontSize = '1.15rem';
    document.querySelector('.about-text-2').style.color = 'black';
    

    setTimeout(function () {

        document.querySelector('.about-text-2').style.fontSize = '1.1rem';
        document.querySelector('.about-text-2').style.color = '#333';
    }, 1000);




    a.preventDefault();
})
