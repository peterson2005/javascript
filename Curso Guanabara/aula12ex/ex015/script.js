function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && < 14) {
                // crianca
                img.setAttribute('src','imagens/bebemas.jpg')
            } else if ( idade < 21){
                // jovem
                img.setAttribute('src','imagens/jovemmas.jpg')
            } else if ( idade < 50){
                // adulto
                img.setAttribute('src','imagens/adultomas.jpg')
            } else {
                // idoso
                img.setAttribute('src','imagens/velhomas.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && < 14) {
                // crianca
                img.setAttribute('src','imagens/bebefem.jpg')
            } else if ( idade < 21){
                // jovem
                img.setAttribute('src','imagens/jovemfem.jpg')
            } else if ( idade < 50){
                // adulto
                img.setAttribute('src','imagens/adultofem.jpg')
            } else {
                // idoso
                img.setAttribute('src','imagens/velhafem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}