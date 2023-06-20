function verificar() {
    var txtIdade = window.document.getElementById('txt-idade');
    var valorIdade = Number(txtIdade.value);

    var resultado = window.document.getElementById('resultado');

    if(valorIdade < 16) {
        resultado.innerHTML = 'Você <strong>não</strong> pode votar.';
    } else if(valorIdade < 18 || valorIdade > 70) {
        resultado.innerHTML = '<strong>Voto opcional</strong>';
        resultado.innerHTML += '<p>Para quem o voto é opcional? O voto é opcional para:<ul><li>maiores de 16 anos e menores de 18 anos</li><li>maiores de 70 anos</li><li>analfabetas(os)</li></ul></p>'
    } else {
        resultado.innerHTML = '<strong>Voto obrigatório</strong>';
        resultado.innerHTML += '<p>O voto é obrigatório para eleitoras e eleitores alfabetizadas(os), com idades entre 18 e 70 anos</p>';
    }
}