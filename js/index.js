function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

  /*Animação*/
  AOS.init();

  /*Rolagem até o Topo*/
  const rolagem = ()=> {
    const html = document.documentElement
    const seta = document.getElementById('go-top')
  
    /* Se a rolagem for maior que 550, a seta aparece 
    abaixo de 550 esconde */
    if (html.scrollTop > 350 ) {
      seta.style.display = 'block'
    } else {
      seta.style.display = 'none'
    }
  }

  //window.addEventListener('scroll', rolagem)
window.onscroll = ()=> rolagem()//evento somente para elem q existem no html