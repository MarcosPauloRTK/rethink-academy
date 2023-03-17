const promise2 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    console.log("Estou contando 1,8 segundos.");
    resolve("Segunda promise");
  }, 1800);
});

const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    console.log("Estou contando 0,2 segundos.");
    resolve("Terceira promise");
  }, 200);
});

const promise1 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    console.log("Comecei a contar 1 segundo.");
    reject({ error: "Deu erro" });
  }, 1000);
  setTimeout(() => {
    console.log("Comecei a contar 1 segundo. (Resolve)");
  }, 1000);
  resolve("Deu certo");
});

Promise.race([promise3, promise1, promise2])
  .then(console.log)
  .catch(console.log);
