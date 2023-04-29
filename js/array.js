let filterarray = [];

let galleryarray = [

{
    id: 1,
    name: "PROMOÇÃO DA SEMANA",
    src: "img/promocao.jpg",
    desc: "Em <span>Oferta</span> Aproveite",
  },

  {
    id: 2,
    name: "PROMOÇÃO DA SEMANA",
    src: "img/promocao-2.jpg",
    desc: "Em <span>Oferta</span> Aproveite",
  },

  {
    id: 3,
    name: "PROMOÇÃO DA SEMANA",
    src: "img/promocao-3.jpg",
    desc: "Em <span>Oferta</span> Aproveite",
  },

  {
    id: 4,
    name: "PROMOÇÃO DA SEMANA",
    src: "img/promocao-4.jpg",
    desc: "Em <span>Oferta</span> Aproveite",
  },
];

//create a function to show gallery
showgallery(galleryarray);


function showgallery(currarray) {

    document.getElementById("are-produto").innerHTML = "";
  for (var i = 0; i < currarray.length; i++) {
    document.getElementById("are-produto").innerHTML += `
    
    <div class="produto">
        <div class="row">
        <img src="${currarray[i].src}" alt="" />
        <div class="area-produto">
            <h5>${currarray[i].name}</h5>
        </div>   
        <div class="price">
            <h5>PROMOÇÃO DA SEMANA</h5>
            <p>${currarray[i].desc}</p>
        </div>
        </div>
    </div>
    `;
  }
}

// live seacrhing using keyup input

document.getElementById("myinput").addEventListener("keyup", function () {
  let text = document.getElementById("myinput").value;

  filterarray = galleryarray.filter(function(a){
    if (a.name.includes(text)){
      return a.name;
    }
  });
  if(this.value == "") {
    showgallery(galleryarray);
  } else {
    if(filterarray == "") {
        document.getElementById("para").style.display = "block";
        document.getElementById("produto").innerHTML = "";
    }
    else{
        showgallery(filterarray);
        document.getElementById("produto").style.display = 'none';
    }
  }
});

{/* */}