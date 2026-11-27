function sayHello() {
    var response = prompt("What is your name?");
    alert("Hello," + response + ",have a good day!")
}

function showTopic() {
    var x = document.getElementById("demo");  //funtion 绑定id（具有唯一性），这个id在html里是paragragh（见exercise6里），所以这个功能funtion是针对那个p的（绑定了）
    x.style.fontSize = "25px";
    x.style.color = "red";
}


function add(a, b) {
    return a + b;
}
console.log(add(20, 30));
console.log(add(100, 30));