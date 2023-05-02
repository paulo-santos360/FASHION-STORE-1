let products = {
  data: [
    {
      productName: "Camisa Feminina Fashion Store",
      category: "Bottomwear",
      price: "49",
      image: "img/camisa-1.jpg",
    },
    {
      productName: "Camisa Feminina Fashion Store",
      category: "Bottomwear",
      price: "49",
      image: "img/camisa-2.jpg",
    },
    {
      productName: "Camisa Feminina Fashion Store",
      category: "Bottomwear",
      price: "49",
      image: "img/camisa-3.jpg",
    },
    {
      productName: "Camisa Feminina Fashion Store",
      category: "Bottomwear",
      price: "49",
      image: "img/camisa-4.jpg",
    },
    {
      productName: "Vestidos Feminina Fashion Store",
      category: "Topwear",
      price: "30",
      image: "img/vestidos.jpg",
    },
    {
      productName: "Vestidos Feminina Fashion Store",
      category: "Bottomwear",
      price: "49",
      image: "img/vestidos-2.jpg",
    },
    {
      productName: "Vestidos Feminina Fashion Store",
      category: "Watch",
      price: "99",
      image: "img/vestidos-33.jpg",
    },
    {
      productName: "Vestidos Feminina Fashion Store",
      category: "Topwear",
      price: "29",
      image: "img/vestidos-4.jpg",
    },
    {
      productName: "Moda Feminina Fashion Store",
      category: "Topwear",
      price: "29",
      image: "img/sapato.jpg",
    },
    {
      productName: "Moda Feminina Fashion Store",
      category: "Topwear",
      price: "29",
      image: "img/sapato-2.jpg",
    },
    {
      productName: "Moda Feminina Fashion Store",
      category: "Topwear",
      price: "29",
      image: "img/sapato-3.jpg",
    },
    {
      productName: "Moda Feminina Fashion Store",
      category: "Topwear",
      price: "29",
      image: "img/sapato-4.jpg",
    },
    {
      productName: "Camisa Masculina Fashion Store",
      category: "Jacket",
      price: "129",
      image: "img/camisaM.jpg",
    },
    {
      productName: "Camisa Masculina Fashion Store",
      category: "Bottomwear",
      price: "89",
      image: "img/camisaM-2.jpg",
    },
    {
      productName: "Camisa Masculina Fashion Store",
      category: "Jacket",
      price: "189",
      image: "img/camisaM-3.jpg",
    },
    {
      productName: "Camisa Masculina Fashion Store",
      category: "Bottomwear",
      price: "49",
      image: "img/camisaM-4.jpg",
    },

    {
      productName: "Moda Masculina Fashion Store",
      category: "Jacket",
      price: "129",
      image: "img/calca.jpg",
    },
    {
      productName: "Moda Masculina Fashion Store",
      category: "Bottomwear",
      price: "89",
      image: "img/calca-2.jpg",
    },
    {
      productName: "Moda Masculina Fashion Store",
      category: "Jacket",
      price: "189",
      image: "img/calca-3.jpg",
    },
    {
      productName: "Moda Masculina Fashion Store",
      category: "Bottomwear",
      price: "49",
      image: "img/calca-4.jpg",
    },
    {
      productName: "Tenis Fashion Store",
      category: "Jacket",
      price: "129",
      image: "img/tenis.jpg",
    },
    {
      productName: "Tenis Fashion Store",
      category: "Bottomwear",
      price: "89",
      image: "img/tenis-2.jpg",
    },
    {
      productName: "Tenis Fashion Store",
      category: "Jacket",
      price: "189",
      image: "img/tenis-3.jpg",
    },
    {
      productName: "Tenis Fashion Store",
      category: "Bottomwear",
      price: "49",
      image: "img/tenis-4.jpg",
    },
  ],
};

for (let i of products.data){
  //Criar cartão
  let card = document.createElement("div");
  //Cartão deve ser categoria  e deve ficar oculto inicialmente
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElemente("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //Nome do produto
  let name = document.createElement("h5");
  name.classList.add("product-name")
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //preço
  let price = document.createElement("h6");
  price.innerText = "R$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// parâmetro passado do botão (parâmetro igual á categoria)
function filterProduct(value){
  //Código da Classe do botão
  let button = document.querySelectorAll(".button-value");
  button.forEach((button) =>{
    //verificar se o valor é igual a innerText
    if(value.toUpperCase() == button.innerText.toUpperCase()){
      button.classList.add("active");
    } else{
      button.classList.remove("active");
    }
  })
}