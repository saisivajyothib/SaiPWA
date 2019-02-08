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
  personal(data.personaldetails);
  carrerobj(data.CAREEROBJECTIVE);
  acadamic(data.ACADEMICS);
  Techanical(data.Technicalskills);
  Habbies(data.Habbies);
});
var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
console.log(main);
function personal(details){
  var l1=document.createElement("div");
  l1.classList.add("l1");
  left.appendChild(l1);
  var image=document.createElement("img");
  image.src=details.image;
  l1.appendChild(image);
  var n1=document.createElement("h2");
  n1.textContent=details.n1;
  l1.appendChild(n1);
  var disg=document.createElement("h2");
  disg.textContent=details.disg;
  l1.appendChild(disg);
  left.appendChild(document.createElement("hr"));
  var l2=document.createElement("div");
  l2.classList.add("l2");
  left.appendChild(l2);
  var fname=document.createElement("p");
  fname.textContent=details.fname;
  l2.appendChild(fname);
  var email=document.createElement("p");
  email.textContent=details.email;
  l2.appendChild(email);
  var phone=document.createElement("p");
  phone.textContent=details.Phone;
  l2.appendChild(phone);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function carrerobj(details1){
  var info=document.createElement("h2");
  info.textContent=details1.info;
  right.appendChild(info);
  var obj=document.createElement("p");
  obj.textContent=details1.obj;
  right.appendChild(obj);
  right.appendChild(document.createElement("hr"));
}
function acadamic(details2){
  var info3=document.createElement("h2");
  info3.textContent=details2.info3;
  right.appendChild(info3);
  var info3=document.createElement("h3");
  info3.textContent=details2.graduation;
  right.appendChild(info3);
  var info3=document.createElement("h3");
  info3.textContent=details2.intermediate;
  right.appendChild(info3);
  var info3=document.createElement("h3");
  info3.textContent=details2.ssc;
  right.appendChild(info3);
}
function Techanical(details3){
  var info3=document.createElement("h2");
  info3.textContent=details3.infor;
  right.appendChild(info3);
  var info3=document.createElement("h4");
  info3.textContent=details3.info1;
  right.appendChild(info3);
}
function Habbies(details4){
  var info3=document.createElement("h2");
  info3.textContent=details4.infer;
  right.appendChild(info3);
  var info3=document.createElement("h4");
  info3.textContent=details4.info2;
  right.appendChild(info3);
}
