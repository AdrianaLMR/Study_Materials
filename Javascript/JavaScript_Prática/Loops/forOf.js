/*simplifica a iteração apenas dos elementos iteráveis ​​como arrays, strings... */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    console.log(numero);
}

/*Uma vantagem do for...of em relação ao for tradicional é que ele oculta os detalhes da iteração e torna o código mais legível e conciso. 
Além disso, o for...of só itera sobre os valores dos elementos*/