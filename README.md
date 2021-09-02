# Generador-De-Imagenes-NFT
 - Utilizando de base un proyecto de `HashLips` Usuario de Github, les enseñare cómo, a través de este código y usando `NodeJs` podrán crear sus propios NFTs con capas png de su autoría de forma ilimitada. Ejemplo [Aquí](https://opensea.io/KitsuneMask)
 - Using a project from `HashLips` Github User, I will show you how, through this code and using `NodeJs` how you can create your own NFTs with png layers of your authorship in an unlimited way. Example [Aquí](https://opensea.io/KitsuneMask)

## Pasos a seguir `ESP`
- 1 ) Descargamos `NodeJS` según nuestro sistema operativo [aquí](https://nodejs.org/en/)
- 2 ) Dentro de la Carpeta `Layers` agregaremos nuestras carpetas con diversas capas .png para formar nuestros NFTs
- 3 ) Modificar el `config.js` con el nombre de las carpetas que hemos agregado en `Layers`:
```js
const layersOrder = [
    'fondos', <- (Reemplazar los necesarios)
    'cabeza',
    'orejas',
    'ojos',
    'boca',
    'detalles'
];
```
- 4 ) Modificamos la cantidad de Imagenes que queremos crear:
```js
const defaultEdition = 10; <-(Se crearan 10 imagenes)
];
```

- 5 ) En nuestro Visual Studio Code abrimos la terminal iniciando un New Terminal y en la consola agregamos:

```js
> npm install
```
(Nos creara una carpeta llamada `Node_Modules`)
- 6 ) En la consola instalamos truffle para luego generar elementos aleatorios: (a veces tarda tiempo)
```js
> npm install truffle -g
```
- 7 ) En la consola de la terminal ejecutamos el Index para que cree las imagenes:
```js
> node index.js
```
- 8 ) Finalmente se nos creará una carpeta `Build` con las imagenes aleatorias generadas


## Step by step `ENG`
- 1 ) We download `NodeJS` according to our operating system [here](https://nodejs.org/en/)
- 2 ) Inside `Layers` folder we will add our folders with different .png layers to form our NFTs
- 3 ) Modify `config.js` with the name of folders that we have added in` Layers`:

```js
const layersOrder = [
    'fondos', <- (Replace the necessary ones )
    'cabeza',
    'orejas',
    'ojos',
    'boca',
    'detalles'
];
```
- 4 ) We modify the amount of Images we want to create :
```js
const defaultEdition = 10; <-(Se crearan 10 imagenes)
];
```
- 5 ) In Visual Studio Code we open a new terminal and we add:

```js
> npm install
```
(that will create a folder called `Node_Modules`)

- 6 ) we install truffle and then generate random elements: (sometimes it takes time) 
```js
> npm install truffle -g
```
- 7 ) In the terminal console we execute the Index to create the images: 
```js
> node index.js
```
- 8 ) Finally a `Build` folder will be created with the random images generated. 
