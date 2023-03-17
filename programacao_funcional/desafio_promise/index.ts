import fs from "fs";
import path from "path";

function readFilePromise(pathToFile: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, (error, data) => {
      error ? reject(error) : resolve(data.toString());
    });
  });
}

const pathToFile = path.join(__dirname, "dados.txt");
readFilePromise(pathToFile)
  .then(console.log)
  .catch((err) => console.log("deu ruim"));
