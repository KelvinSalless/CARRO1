/*------------------------HAMBURGER BUTTON-----------------------------------------------*/

const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");

const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});

/*--------------------------BUSCA---------------------------------------------*/
document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})

/*---------------------------------------------------------------------------------*/

// Dados de exemplo para os carros (poderiam vir de um servidor backend)
const carros = [
  { marca: "Honda", modelo: "MOTO 1", ano: 2020, preco: 9000, imagem: "/img/mt1.jpg", KM: 95000, comb: "Flex", vermais: "#"}, //MOTO
  { marca: "Honda", modelo: "MOTO 2", ano: 2019, preco: 10000, imagem: "/img/mt2.jpg", KM: 0, comb: "Flex", vermais: "#"}, //MOTO
  { marca: "Honda", modelo: "MOTO 3", ano: 2018, preco: 25000, imagem: "/img/mt3.jpg", KM: 0, comb: "Flex", vermais: "#" }//MOTO
];

// Função para exibir os carros na página
function mostrarCarros(carros) {
  const carList = document.getElementById('carList');
  carList.innerHTML = ''; // Limpa o conteúdo anterior

  carros.forEach((carro, m25000) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <img src="${carro.imagem}" alt="${carro.marca} ${carro.modelo}">
          <h2>${carro.modelo}</h2>
          <h4> ${carro.marca} </h4>
          <p><i class="fa-regular fa-calendar-days"></i> Ano: ${carro.ano}</p>
          <p><i class="fa-solid fa-gas-pump"></i> Combustível: ${carro.comb}</p>
          <p><i class="fa-solid fa-gauge-high"></i> KM: ${carro.KM}</p>
          <p class="preco">R$ ${carro.preco.toLocaleString('pt-BR')}</p>
          <button class="vermais"><a href="${carro.vermais}">Ver mais...</a></button>
          <button class="whats"><a href="https://wa.me/5516995482315">Enviar mensagem</a></button>  
      `;
      carList.appendChild(card);
  });
}



// Função para filtrar carros com base no input de pesquisa
function filtrarCarros() {
  const filtro = document.getElementById('searchInput').value.toLowerCase();
  const carrosFiltrados = carros.filter(carro => {
      return carro.marca.toLowerCase().includes(filtro) || carro.modelo.toLowerCase().includes(filtro);
  });

  mostrarCarros(carrosFiltrados);
}

// Mostrar todos os carros ao carregar a página
mostrarCarros(carros);

// Adicionar evento de input para atualizar a lista conforme o usuário digita
document.getElementById('searchInput').addEventListener('input', filtrarCarros);

/*--------------------------------------------------------------------------------------------------------------*/


























// // Função para abrir o modal com informações detalhadas do carro
// function abrirModal(index) {
//   const modal = document.getElementById('modal');
//   const modalContent = document.getElementById('modalContent');
//   const carro = carros[index];

//   modal.style.display = 'block';
//   modalContent.innerHTML = `
//           <h2>${carro.modelo}</h2>
//           <h4> ${carro.marca} </h4>
//           <p>Ano: ${carro.ano}</p>
//           <p>KM: ${carro.KM}</p>
//           <p>R$ ${carro.preco.toLocaleString('pt-BR')}</p>
//   `;

//   // Fecha o modal ao clicar no botão de fechar (×)
//   const closeBtn = document.getElementsByClassName('close')[0];
//   closeBtn.addEventListener('click', () => modal.style.display = 'none');
// }