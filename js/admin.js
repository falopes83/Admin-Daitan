// Menu Button
// select dom items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const navItems = document.querySelectorAll(".nav-link");
const dropdownItems = document.querySelectorAll(".dropdown-item"); // seleciona os itens dropdown
const collapse = document.querySelector(".submenu"); // seleciona o collapse

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {  
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        navItems.forEach((menu) => menu.classList.add("show"));
        $('.nav-link').one('click', function () {
            $(".menu").removeClass("show");   
            $(".menu-btn").removeClass("close");
            showMenu = false;
        });    

        // Reset the menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        navItems.forEach((menu) => menu.classList.remove("show"));     
            
        // Reset the menu state
        showMenu = false;
        // Hide the collapse when menu is closed
        collapse.classList.remove("show");
    }
}

// Adiciona evento de clique para os itens dropdown
dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("show");
        menuBtn.classList.remove("close");
        showMenu = false;
        // Hide the collapse when dropdown item is clicked
        collapse.classList.remove("show");
    });
});


// Date
function exibirDataHora() {
    // Obter a data e o horário atual
    var agora = new Date();

    // Obter os componentes da data
    var dia = agora.getDate();
    var mes = agora.toLocaleString('default', { month: 'long' });
    var ano = agora.getFullYear();

    // Obter os componentes do horário
    var horas = agora.getHours();
    var minutos = agora.getMinutes();

    // Formatar a data e o horário no formato desejado
    var dataFormatada = "Hoje é dia " + dia + " de " + mes + " de " + ano;
    var horarioFormatado = horas + ":" + (minutos < 10 ? "0" : "") + minutos;

    // Atualizar o conteúdo do elemento com id "data-hora"
    document.getElementById("data-hora").textContent = dataFormatada + " - " + horarioFormatado;
  }


  // Drag Drop
  var dropArea = document.getElementById('drop-area');

    // Impedir comportamento padrão (abrir o arquivo no navegador ao arrastá-lo)
    dropArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    });

    // Lidar com o evento de soltar
    dropArea.addEventListener('drop', function(e) {
    e.preventDefault();

    // Obter a lista de arquivos arrastados
    var files = e.dataTransfer.files;

    // Processar cada arquivo
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        console.log('Nome do arquivo:', file.name);
        console.log('Tipo do arquivo:', file.type);
        console.log('Tamanho do arquivo:', file.size, 'bytes');
    }
    });

// Dropdown com checkbox
var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

function toggle(source) {
  checkboxes = document.getElementsByName('unidade');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}

var checkList = document.getElementById('list1');
var anchor = checkList.getElementsByClassName('anchor')[0];
var btnIncluir = document.getElementById('btnIncluir');

// Função para verificar se o elemento clicado pertence ao menu ou ao botão
function isDescendant(element, ancestor) {
  var node = element.parentNode;
  while (node != null) {
    if (node == ancestor) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// Função para fechar o menu
function closeMenu() {
  checkList.classList.remove('visible');
}

// Função para fechar o menu quando o usuário clicar fora da área do botão
function closeMenuOnClick(event) {
  if (!isDescendant(event.target, checkList) && event.target != anchor) {
    closeMenu();
  }
}

// Adiciona o evento de clique no documento
document.addEventListener('click', closeMenuOnClick);

// Adiciona o evento de clique para o botão de id "btnIncluir"
btnIncluir.addEventListener('click', closeMenu);
