# To The Space - multi-page space tourism website

🇧🇷 **ATENÇÃO: este repositório ainda está sofrendo alterações. Neste momento, alfumas animações estão sendo adicionadas. Por isso, você pode notar algumas partes em construção no código.**

🇺🇸 **WATCH OUT: this repository is still changing. At the moment, some animations are being added. Therefore, you may notice some parts under construction in the code.**


🇧🇷 Essa é a minha solução para o [Desafio de criação de um site de turismo espacial do Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Os desafios da Frontend Mentor nos ajudam a melhorar nossas habilidades na programação por meio da construção de projetos realistas.

🇺🇸 This is my solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

**Sumário de conteúdos**

- [Overview](#overview)
  - [The challenge / O desafio](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process / Meu processo](#my-process)
  - [Built with / Construído com](#built-with)
  - [What I learned / O que eu aprendi](#what-i-learned)
    - [1. Hard skills: gain mastery and familiarity with Vue.js / ganhar domínio e familiaridade com Vue.js](#1.-Hard-skills:-ganhar-domínio-e-familiaridade-com-Vue.js)
    - [2. Soft skills: refine good ideas to the knowledge that I have available now / lapidar ideias muito boas ao conhecimento que tenho disponível agora](#2.-Soft-skills:-lapidar-ideias-muito-boas-ao-conhecimento-que-tenho-disponível-agora)
  - [Continued development / Desenvolvimento continuado](#continued-development)
  - [Useful resources / Recursos úteis](#useful-resources)
- [Acknowledgments / Agradecimentos](#acknowledgments)

## Overview

### The challenge

**O desafio**

🇧🇷 Os usuários devem ser capazes de:

- Acompanhar o desempenho das animações conforme carregamento das páginas
- Ver o layout otimizado para cada uma das páginas do website independente do tamanho da tela
- Observar mudanças de foco conforme interação com todos os elementos interativos da página (botões, abas etc)
- Ver cada página e ser capaz de alternar entre as abas para ver novas informações

🇺🇸 Users should be able to:

- Follow the performance of animations as pages load
- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page (buttons, tabs ecc)
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg) PRINT 

### Links

- Live Site URL: [To the Space - multi-page space tourism website](#)

## My process

**Meu processo**

### Built with

**Construído com**

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- CSS Grid
- [Vue.js](https://vuejs.org) - JS framework

### What I learned

**O que eu aprendi**

#### 1. Hard skills: gain mastery and familiarity with Vue.js

**1. Hard skills: ganhar domínio e familiaridade com Vue.js**

🇧🇷 Como meu primeiro projeto usando Vue.js por minha própria conta, entender na prática os mecanismos de funcionamento do framework foi, sem sombra de dúvidas, meu maior desafio.

Uma das partes do projeto que mais me orgulho é o mecanismo de troca das abas, que utiliza a reactividade para atualizar os dados mostrados a partir do index das propriedades de um objeto que contém todas as informações de cada aba. É um mecanismo relativamente simples, mas muito eficiente para atualizar as informações na tela de acordo com o que o usuário quer ver, dispensando assim a necessidade da criação de várias páginas de HTML estáticas.

Exemplo de como um determinado elemento de uma aba (nesse caso uma imagem) é atualizado:

1. O usuário clica na guia que ele quer
2. Esse clique chama a função de seleção do index da guia selecionada pelo usuário
3. Quando o index é atualizado, a função que retorna a imagem atualiza a página utilizando a reactividade da Vue.

Exemplo:

```vue.js
template: {
    <li @click="updateTab(0)">Tab</li>
},
methods: {
    updateTab(index) {
      this.selectedTab = index
    },
},
computed: {
    tabImage() {
      return this.tabs[this.selectedTab].image
},
```
🇺🇸 As my first project using Vue.js on my own, understanding the framework's working mechanisms in practice was, without a doubt, my biggest challenge.

One of the parts of the project that I'm most proud of is the mechanism for changing tabs, which uses reactivity to update the data shown from the index of the properties of an object that contains all the information for each tab. It is a relatively simple mechanism, but very efficient to update the information on the screen according to what the user wants to see, eliminating the need to create several static HTML pages.

Example of how a certain element of a tab (in this case an image) is updated:

1. The user clicks on the tab he wants
2. This click invokes the index selection function of the user selected tab
3. When the index is updated, the function that returns the image updates the page using Vue's reactivity.

#### 2. Soft skills: refine good ideas to the knowledge that I have available now

**2. Soft skills: lapidar ideias muito boas ao conhecimento que tenho disponível agora**

🇧🇷 Este projeto me mostrou que algumas ideias, por mais incríveis e disruptivas que sejam dentro da nossa mente, podem exigir mais conhecimento do que dispomos para serem trazidas à realidade. Por isso, às vezes, para colocar uma determinada funcionalidade para funcionar, é melhor implementar uma solução mais simples, mas eficiente, do que não implementar nada ou simplesmente descartar uma ideia boa.

🇺🇸 This project showed me that some ideas, however incredible and disruptive they may be inside our minds, may require more knowledge than we have to bring them to reality. Therefore, sometimes, to put a certain functionality to work, it's better to implement a simpler but more efficient solution than to implement nothing or simply discard a good idea.

### Continued development and next steps

**Desenvolvimento contínuo e próximos passos**

🇧🇷 Eu tenho muita ciência de que algumas partes do código podiam ter um mecanismo muito mais simples. Quero mergulhar ainda mais em Vue.js para melhorar a qualidade do meu código e aumentar meus conhecimentos para construir soluções cada vez melhores.

🇺🇸 I am very aware that some parts of the code could have a much simpler mechanism. I want to dive even deeper into Vue.js to improve the quality of my code and increase my knowledge to build better solutions.

### Useful resources

- [W3Schools](https://www.w3schools.com)

🇧🇷 Preciso dar um agradecimento especial aos tutoriais da W3Schools, sempre muito didáticos e práticos, me ajudaram desde os primeiros passinhos na programação.

🇺🇸 I need to give a special thanks to the W3Schools tutorials, always very didactic and practical, they helped me from the first steps in programming.

## Acknowledgments

🇧🇷 Finalmente, gostaria de agradecer a [@Front-end mentor](frontendmentor.io/challenges) por disponibilizar tantos desafios incríveis para nós, programadores, desenvolvermos. 

Pra quem quiser conhecer esse em específico e replicar, segue o link abaixo.

🇺🇸 Finally, I'd like to thank [@Front-end mentor]() for making so many amazing challenges available for us programmers to develop.

For those who want to know this one in particular and replicate, the link:

[Space tourism multipage website](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)
