const checaRenovacaoRG=('') 
    const anoAtual = Number("Digite o ano atual")
    const anoNascimento = Number("Digite o ano de nascimento")
    const anoEmissao = Number("Digite o ano de emissão do documento")
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    console.log(cond1 || cond2 || cond3)