# Interbanking App

La aplicación permite agregar frases en una grilla y poder filtrar por las mismas. Está hecha con React, Typescript, y MUI Material como biblioteca de componentes.
Cada frase nueva ingresada se va a ir agregando a la grilla como componente PhraseCard. El color utilizado para el mismo se va a elegir aleatoriamente de un array de posibles opciones. 

## Instalación

1. Clonar este repositorio o descargalo como archivo ZIP
2. Abrir una terminal en el directorio raiz de la aplicación y ejeguar el comando `npm install`
3. Una vez terminada la instalación, ejecutar el comando `npm start` para abrir la aplicación en el navegador

## Estructura del proyecto
- src/App.tsx contiene la mayor parte de la lógica de la aplicación
- src/components/PhrseCard.tsx representa cada Card (frase) agregada a la grilla
- src/utilities/index.tsx contiene una función que cambia el color del texto dependiendo del color de fondo de la Card

## Testing

Hay tests unitarios para validar funcionalidades de la aplicación. Las mismas se pueden correr con el comando `npm test`, que abarcan los archivos que se encuentran en:
- src/App.test.tsx
- src/components/PhrseCard.test.tsx