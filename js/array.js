let products = {
  data: [
    {
      productName: "Camisa Feminina",//Fashion Store
      category: "Bottomwear",
      price: "49,00",
      image: "img/camisa-1.jpg",
    },
    {
      productName: "Camisa Feminina",//Fashion Store
      category: "Bottomwear",
      price: "49,00",
      image: "img/camisa-2.jpg",
    },
    {
      productName: "Camisa Feminina",//Fashion Store
      category: "Bottomwear",
      price: "49,00",
      image: "img/camisa-3.jpg",
    },
    {
      productName: "Camisa Feminina",//Fashion Store
      category: "Bottomwear",
      price: "49,00",
      image: "img/camisa-4.jpg",
    },
    {
      productName: "Vestidos Feminina",//Fashion Store
      category: "Topwear",
      price: "30,00",
      image: "img/vestidos.jpg",
    },
    {
      productName: "Vestidos Feminina",//Fashion Store
      category: "Bottomwear",
      price: "49,00",
      image: "img/vestidos-2.jpg",
    },
    {
      productName: "Vestidos Feminina",//Fashion Store
      category: "Watch",
      price: "99,00",
      image: "img/vestidos-33.jpg",
    },
    {
      productName: "Vestidos Feminina",//Fashion Store
      category: "Topwear",
      price: "29,00",
      image: "img/vestidos-4.jpg",
    },
    {
      productName: "Moda Feminina",//Fashion Store
      category: "Topwear",
      price: "29,00",
      image: "img/sapato.jpg",
    },
    {
      productName: "Moda Feminina",//Fashion Store
      category: "Topwear",
      price: "29,00",
      image: "img/sapato-2.jpg",
    },
    {
      productName: "Moda Feminina",//Fashion Store
      category: "Topwear",
      price: "29,00",
      image: "img/sapato-3.jpg",
    },
    {
      productName: "Moda Feminina",//Fashion Store
      category: "Topwear",
      price: "29,00",
      image: "img/sapato-4.jpg",
    },
    {
      productName: "Camisa Masculina",//Fashion Store
      category: "Jacket",
      price: "129,00",
      image: "img/camisaM.jpg",
    },
    {
      productName: "Camisa Masculina",//Fashion Store
      category: "Bottomwear",
      price: "89,00",
      image: "img/camisaM-2.jpg",
    },
    {
      productName: "Camisa Masculina",//Fashion Store
      paragrafo: "Camisa Masculina",
      price: "189,00",
      image: "img/camisaM-3.jpg",
    },
    {
      productName: "Fashion Store",
      paragrafo: "Camisa Masculina",
      price: "49,00",
      image: "img/camisaM-4.jpg",
    },

    {
      productName: "Fashion Store",
      paragrafo: "Calça Jeans Masculina",
      price: "129,00",
      image: "img/calca.jpg",
    },
    {
      productName: "Fashion Store",
      paragrafo: "Calça Jeans Masculina",
      price: "89,00",
      image: "img/calca-2.jpg",
    },
    {
      productName: "Fashion Store",
      paragrafo: "Calça Jeans Masculina",
      price: "189,00",
      image: "img/calca-3.jpg",
    },
    {
      productName: "Fashion Store",
      paragrafo: "Calça Jeans Masculina",
      price: "49,00",
      image: "img/calca-4.jpg",
    },
    {
      productName: "Fashion Store",
      paragrafo: "Tenis",
      price: "129,00",
      image: "img/tenis2.jpg",
    },
    {
      productName: "Fashion Store",
      paragrafo: "Tenis",
      price: "89,00",
      image: "img/tenis-2.jpg",
    },
    {
      productName: "Fashion Store",
      paragrafo: "Tenis",
      price: "189,00",
      image: "img/tenis-3.jpg",
    },
    {
      productName: "Fashion Store",
      paragrafo: "Tenis",
      price: "49,00",
      image: "img/tenis-4.jpg",
    },   
  ],
};

for (let i of products.data) {
  //Criar cartão
  let card = document.createElement("div");
  //Cartão deve ter categoria e deve ficar oculto inicialmente
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer); 
  //container
  let container = document.createElement("div");
  container.classList.add("container"); 
 //Nome do Produto
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText =  i.productName.toUpperCase();
  container.appendChild(name);

  //Nome do Produto

  let paragrafo = document.createElement("p")
  paragrafo.innerText = i.paragrafo;
  container.appendChild(paragrafo)
  //preço
  let price = document.createElement("h6");
  price.innerText = "R$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parâmetro passado do botão (parâmetro igual à categoria)
  function filterProduct(value) {
  //Código da classe do botão
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {     
    //verifica se valor é igual a innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });  

  //seleciona todas as cartas
  let elements = document.querySelectorAll(".card");

  //percorre todos os cartões
  elements.forEach((element) => {
    //exibe todas as cartas ao clicar no botão 'all'
    if (value == "all") {
      element.classList.remove("hide");
    } else {
     //Verifica se o elemento contém classe de categoria
      if (element.classList.contains(value)) {
        //exibe o elemento com base na categoria
        element.classList.remove("hide");
      } else {
        //esconde outros elementos
        element.classList.add("hide");
      }
    }
  }); 
}

 //clique no botão de pesquisa
document.getElementById("search").addEventListener("click", () => {
 // inicializações
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //percorre todos os elementos
  elements.forEach((element, index) => {
    //verifica se o texto inclui o valor de pesquisa
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //exibe o cartão correspondente
      cards[index].classList.remove("hide");
    } else {
      //ocultar outros
      cards[index].classList.add("hide");
    }
  });
});

//Exibe inicialmente todos os produtos
window.onload = () => {
  filterProduct("all");
}; 