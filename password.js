let btn = document.querySelector('button');
let box = document.querySelector('.box');

let str = "qwertyuioplkj789hgfdsaz?~xcvbnmQASWZXE567DCVFRTGBNYHU0JMKILO1234&_#@!/$%";  //values
let length = 12;


//event of button

btn.addEventListener('click', function() {
    let password = "";     //password to be printed
    for (let i = 0; i < length; i++) {
        let indexer = Math.floor(Math.random() * str.length);
        password = password + str.charAt(indexer);
    }
    box.innerText = password;
});
