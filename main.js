let div = document.querySelector('.list ul');
let input = document.querySelector('#input-item');
let button = document.querySelector('#button').addEventListener('click', createIten);
var itens = JSON.parse(localStorage.getItem('list')) || [];


function renderAll(){
  
  div.innerHTML = '';
  
  for(iten of itens){
    
    var position = itens.indexOf(iten);
    var listElement = document.createElement('li');
    var listText = document.createTextNode(iten);
    var buttonElement = document.createElement('a');
    var buttonText = document.createTextNode('Excluir');
    
    listElement.appendChild(listText);
    buttonElement.appendChild(buttonText);
    buttonElement.setAttribute('onclick', `deleteIten(${position})`);
    
    div.appendChild(listElement);
    div.appendChild(buttonElement);
    
  }
}

function createIten(){
  
    var listIten = input.value;
    
    itens.push(listIten);
    input.value = '';
  
    saveAll();
  
    renderAll();
    
}

function deleteIten(pos){
  itens.splice(pos, 1);
  saveAll();
}


function saveAll(){
  localStorage.setItem('list', JSON.stringify(itens) );
  
  renderAll();
}

renderAll();