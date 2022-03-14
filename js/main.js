var elList = document.querySelector(".list");
var elImages = document.querySelector(".images");
var newLogo = document.createElement("img");
newLogo.src = "./img/qqq.png";
elImages.setAttribute("class"," d-flex justify-content-around mb-5 mt-3"  );
elImages.appendChild(newLogo);

document.body.style.backgroundColor ="#48d1cc";

for(var film of pokemons){
  
  
  var newItem = document.createElement("li");
  var newSpan = document.createElement("span");
  var newImg = document.createElement("img")
  var newTittle = document.createElement("h3");
  var newTime = document.createElement("time");
  var newInfo = document.createElement("p");
  var newCand = document.createElement("span");
  
  
  newSpan.textContent = film.num;
  
  newTittle.textContent = film.name;
  
  newTime.textContent = film.spawn_time;
  
  newCand.textContent = film.candy;


  
  // (ul) style
  elList.setAttribute("class","p-0 m-0 d-flex flex-wrap justify-content-evenly align-items-center");
  
  // (tittle) style
  newTittle.setAttribute("class","text-center alert alert-info mb-0");
  
  // (li) style
  newItem.setAttribute("class","card m-3 mb-4 shadow  mb-5 bg-body rounded border border-success alert-primary");
  newItem.setAttribute("style","width: 16rem;");
  
  // (img) style
  newImg.setAttribute("src", film.img)
  newImg.setAttribute("class", "card-img-top  alert-primary")
  
  // (p) style
  newInfo.setAttribute("class","alert alert-warning text-center mb-0 border border-info ");
  

  // (span num) style
  newSpan.setAttribute("class","position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger");

  // (date) style
  newTime.setAttribute("class","badge bg-warning text-dark position-absolute top-0 start-100 translate-middle badge rounded-pill");

  // (span candy) style
  newCand.setAttribute("class","text-center ");



  
  newItem.appendChild(newTittle);
  newItem.appendChild(newImg);
  newItem.appendChild(newInfo);
  newItem.appendChild(newSpan);
  newInfo.appendChild(newTime);
  newInfo.appendChild(newCand);
  elList.appendChild(newItem);
  
}