function loadJSON(file,callback) {
  let x=new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
    if(x.readyState===4&&x.status=="200"){
      callback(x.responseText);
        }
  }
  x.send(null);
}
loadJSON("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  card1(data.card1);
});
var cards=document.querySelector(".cards");
function card1(details1){
  for (i in details1) {
  var card=document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);
  let image=document.createElement("img");
  image.src=details1[i].image;
  card.appendChild(image);
  var name=document.createElement("h2");
  name.textContent=details1[i].name;
  card.appendChild(name);
  var occ=document.createElement("h2");
  occ.textContent=details1[i].occ;
  card.appendChild(occ);
  let anc=document.createElement("a");
  anc.href="res.html";
  card.appendChild(anc);
  var pro=document.createElement("h2");
  pro.textContent=details1[i].profile;
  anc.appendChild(pro);
}
}
