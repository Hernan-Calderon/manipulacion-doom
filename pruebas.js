const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const btn = document.querySelector('#btnCalcular')
const elemento = document.querySelector('#elemento');
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', sumar);

function sumar(evento){
    console.log({evento});
    evento.preventDefault();
    const suma = input1.value + input2.value;    
    resultado.innerText= "El resultado es: "+suma;    
}

const imagen = document.createElement('img');
imagen.setAttribute('src', 'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg');
elemento.append(imagen);