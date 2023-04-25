/*

P.A. é a sigla para Progressão Aritmética, que é uma sequência numérica em que cada termo é obtido pela soma
(ou subtração) constante da razão com o termo anterior.

Por exemplo, a sequência 2, 5, 8, 11, 14, 17 é uma P.A. com razão igual a 3, pois para obter cada termo, 
basta somar 3 ao termo anterior.A fórmula geral para encontrar um termo qualquer de uma P.A. é: an = a1 + (n - 1)r

Onde:

an é o n-ésimo termo da P.A.
a1 é o primeiro termo da P.A.
n é a posição do termo que se deseja encontrar
r é a razão da P.A.
Por exemplo, para encontrar o 10º termo da P.A. 2, 5, 8, 11, 14, 17, cuja razão é 3,
podemos utilizar a fórmula geral da seguinte forma:

a10 = 2 + (10 - 1)3
a10 = 2 + 27
a10 = 29

Portanto, o 10º termo da P.A. é 29.

*/

function PA (posicao,arr){
    if(arr.length < 2){
        return 'O array deve conter no minimo  dois elementos'
    }
//razao é igual ao enésimo termo menos o seu antecessor,neste caso usei os dois primeiros    
const r = arr[1] - arr[0] 

for(let i = 2; i <arr.length ;i++){
    if(arr[i] - arr[i - 1] != r){
//percorrendo cada termo do array e verificando se o array é uma P.A válida        
        return 'O array não representa uma P.A.';
    }
}
    const res = arr[0] + (posicao - 1) * r
    return res
}

const valores = [4,[2,10,18]]
//posicao[0] é referente ao n-ésimo termo da P.A.
//posicao[1] é referente a sequência numérica.  
console.log(PA(...valores));

//neste caso o quarto termo da P.A será 26
//obs: a contagem do array comeca em 0