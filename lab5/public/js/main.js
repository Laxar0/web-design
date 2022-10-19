if(document.readyState == "loading"){
  load();
};

function addItem(name, img, card){
  console.log(img);
  let diva = document.createElement("div");
  diva.className = "item";
  let imga = document.createElement("img");
  imga.src = img;
  diva.appendChild(imga);
  let text = document.createElement("h2");
  text.innerHTML = name;
  diva.appendChild(text);
  let text1 = document.createElement("h3");
  if(card == "yes"){
    text1.innerHTML = "Memory card slot: yes"
  }else{
    text1.innerHTML = "Memory card slot: no"
  }
  diva.appendChild(text1);
  let butt = document.createElement("button");
  butt.innerHTML = "Add to cart";
  butt.className = "butt";
  butt.type = "butt";
  butt.id = "butt";
  butt.setAttribute("onClick", "cart()");
  diva.appendChild(butt);
  document.getElementById("main").appendChild(diva);
  
  
  //let ViewerContent = `
  //<div class="item">
  //  <img src="${img}" alt="${img}">
  //  <h2>${name}</h2>
  //  <h3>Memory card slot: ${card}</h3>
  //  <button>Add to cart</button>
  //</div>`;
  
};

function load(){
  fetch("http://localhost:3000/items").then((response)=>{
    return response.text();
  }).then((text)=>{
    let itemArray = JSON.parse(text);
    itemArray.forEach(element => {
      addItem(element.name, element.image_link, element.memoryCardSupport)
    });
  })
}
function writ(){
  console.log('hello');
}

function cart(){
  const el = document.getElementById("imagen");
  el.style.opacity = 1;
}

