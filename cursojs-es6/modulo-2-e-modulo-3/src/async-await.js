//Módulo 3
//Async/Await
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

async function executaPromise(){
    console.log("Exemplo Async - Await", await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    
}
executaPromise();
