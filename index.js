console.log("EXERCICIO 1")
for(let i = 0; i <= 100;i++){
    if(i % 2 === 0){
        console.log("Número Par: "+i+" ,")
    }
}


console.log("EXERCICIO 2")
function somaArray(){
   let array = [1, 6, 5, 8, 32, 21]
   let soma = 0

   for(let i = 0; i < array.length;i++){
       soma += array[i]
   }
   return console.log(soma)

}

somaArray()


console.log("EXERCICIO 3")
function RmvArray(){
   let array = [-1, 6, -5, -8, 32, 21]

   for(let i = 0; i < array.length;i++){
       if(array[i] >= 0){
           console.log(array[i])
       }
   }

}

RmvArray()


console.log("EXERCICIO 4")
function MultiplicaArray(){
   let array = [1, 2, 3, 4, 5, 6]

   for(let i = 0; i < array.length;i++){
       console.log(array[i]*2)
   }

}

MultiplicaArray()

