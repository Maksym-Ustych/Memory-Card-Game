const game=document.getElementById("game");

const emojis=[
"😀","😀",
"🐱","🐱",
"🍎","🍎",
"⭐","⭐",
"🐶","🐶",
"😎","😎",
"🍌","🍌",
"❤️","❤️"
];

emojis.sort(()=>Math.random()-0.5);

let first=null;
let second=null;

emojis.forEach(emoji=>{
let card=document.createElement("div");
card.className="card";
card.dataset.value=emoji;

card.onclick=function(){

if(card.classList.contains("open")) return;

card.textContent=emoji;
card.classList.add("open");

if(!first){
first=card;
}else{
second=card;

if(first.dataset.value===second.dataset.value){
first=null;
second=null;
}else{

setTimeout(()=>{
first.textContent="";
second.textContent="";
first.classList.remove("open");
second.classList.remove("open");
first=null;
second=null;
},800);

}

}

};

game.appendChild(card);

});