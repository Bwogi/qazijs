//alert("Hello");
//console.log("Hello");

function ageInDays(){
    let birthyear = prompt("What year were you born...my friend?");
    let noOfDays = (2020 - birthyear) * 365;
    //console.log(noOfDays);
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('You are ' + noOfDays + ' days old!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(h1Text);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
