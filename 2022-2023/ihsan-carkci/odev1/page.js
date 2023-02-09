console.log("hello world!");


var colorlist = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#07164d"];

console.log(colorlist);
const blocks = document.getElementsByClassName("item");


for (let index = 0; index < blocks.length; index++) {
    console.log("III")
    const element = blocks[index];
    element.style.backgroundColor = colorlist[Math.floor(Math.random() * colorlist.length)];

}

