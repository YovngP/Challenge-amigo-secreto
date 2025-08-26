// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo
function AgregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    // Llamamos a la función que muestra la lista
    mostrarAmigos();

    input.value = "";
}

// 🔹 Función para mostrar todos los amigos en la lista
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");

    // 1. Limpiar lista previa
    lista.innerHTML = "";

    // 2. Recorrer el array y crear <li> por cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function SortearAmigo() {
    // 1. Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // 2. Generar índice aleatorio
    // Math.random() → número entre 0 y 1
    // * amigos.length → lo escalamos al tamaño del array
    // Math.floor(...) → redondeamos hacia abajo a un entero
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}


