const url = 'http://localhost:3000/tarefas';

// Obter tarefas
await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('Deu ruim!', error.message));


// Para consultar apenas um
await fetch(`${url}/1a2b`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('Deu ruim!', error.message));


// Criar uma tarefa
await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ "nome": "Estudar React Native", "concluida": false }),
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('Deu ruim!!', error.message));


// Alterar uma tarefa
await fetch(`${url}/1a2b`, {
    method: "PUT",
    body: JSON.stringify({ "nome": "Estudar React Native", "concluida": true }),
})
    .then((response) => response.json())
    .then((data) => console.log((data)))
    .catch((error) => console.log("Deu ruim !!!", error.message));

    
// Remover uma tarefa
await fetch(`${url}/1a2b`, {
    method: "DELETE",
})
    .then((response) => response.json())
    .then((data) => console.log((data)))
    .catch((error) => console.log("Deu ruim !!!!", error.message));