let num = [5, 2, 2, 8]
num.sort()
num.push(4)
num.sort()
console.log(num)
console.log(`Nosso valor tem ${num.length} `)
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
