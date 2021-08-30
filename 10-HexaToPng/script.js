


function getColor(code){
    var a = document.getElementById("color");
    a.setAttribute("src",`https://www.colorhexa.com/${code}.png`);
    
}



function btnToLink(){
    var dgr = document.getElementById('input').value;
    document.body.style.backgroundColor = `#${dgr}`;
    document.getElementById('color').style.border = `2px solid  white`;
    document.getElementsByClassName('text')[0].innerHTML = dgr;
    return getColor(dgr);
    
}








