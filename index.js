const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "var myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console do navegador?",
      respostas: [
        "console.log();",
        "print();",
        "log();",
      ],
      correta: 0
    },
    {
      pergunta: "Como você acessaria o primeiro elemento de um array chamado `myArray` em JavaScript?",
      respostas: [
        "myArray[0];",
        "myArray.first();",
        "myArray.get(0);",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "&",
        "%",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão `5 == '5'` em JavaScript?",
      respostas: [
        "true",
        "false",
        "erro de sintaxe",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Como você define uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "def myFunction() {}",
        "void myFunction() {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de verificar se uma variável é do tipo número em JavaScript?",
      respostas: [
        "typeof myVar === 'number'",
        "myVar instanceof Number",
        "myVar.type === 'number'",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toNumber()",
        "convertToNumber()",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
  
    const quizItem = template.content.cloneNode(true)
    //clona o objeto Pergunta 10 vezes
    quizItem.querySelector('h3').textContent = item.pergunta
    //substitui o objeto Pergunta pelo conteúdo da pergunta
  
    for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  //clona o objeto Resposta
  dt.querySelector('span').textContent = resposta
  //substitui o objeto Resposta pelo conteúdo
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  quizItem.querySelector('dl').appendChild(dt)
  //põe as respostas na tela
    }
  
  quizItem.querySelector('dl dt').remove()
  //remove o RespostaA
  
    //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  
  }