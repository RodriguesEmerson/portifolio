const icones = 'imagens/icones'
const cover = 'imagens/capas-dos-projetos'
const javascript = 'https://rodriguesemerson.github.io/JAVASCRIPT/desafios'
const datas = [
    {
    title: 'Kanban',
    imgGlob: `${icones}/kanban.png`,
    desc: 'Criei este projeto para praticar e obter novos conhecimentos.',
    link: '#',
    langs: ['HTML', 'CSS', 'JS'],
    cover: `${cover}/kanban2.png`,
    resumo: "Com o layout inspirado no Trello, este site permite, criar cards, tags para os cards e movê-los livremente na vertical e entre colunas. Obs: Os dados são salvos no localstorage."
    },

    {
    title: 'Mini Organizado Financeiro',
    imgGlob: `${icones}/finance-organizer.png`,
    desc: 'Aqui, além de praticar tabelas, aprendi muito sobre manipulação de dados!',
    link: `${javascript}/finance/`,
    langs: ['HTML', 'CSS', 'JS'],
    cover: `${cover}/finance-organizer.png`,
    resumo: "O que mais me agregou valor neste projeto, foi a quetão de manipulação de dados, e requereu muita lógica, assim como os outros projetos."
    },

    {
    title: 'Weather',
    imgGlob: `${icones}/weather.png`,
    desc: 'Projeto para praticar requisições e tratamento dos dados recebidos de APIs.',
    link: `${javascript}/weather/`,
    langs: ['HTML', 'CSS', 'JS'],
    cover: `${cover}/weather.png`,
    resumo: "Este é uns dos projetos em que pratiquei e obtive conhecimentos sobre APIs, desde a requisição até o tratamento dos dados recebidos."
    },

    {
    title: 'To do List',
    imgGlob: `${icones}/to-do-list.png`,
    desc: 'Essa To do List, criei qundo ainda estava bem no início de estudos com JavaScritp.',
    link: `${javascript}/to-do-list/`,
    langs: ['HTML', 'CSS', 'JS'],
    cover: `${cover}/to-do-list.png`,
    resumo: "Foi neste projeto que aprendi como atualizar a seleção do dom com elementos dinâmicos. Projeto muito desafiador pra quem está começando."
    },

    {
    title: 'Calculadora',
    imgGlob: `${icones}/calculator.png`,
    desc: 'Pensa nunhuma coisa que deu trabalho foi essa calculadora, mas ficou muito boa.',
    link: `${javascript}/calculadoratwo/`,
    langs: ['HTML', 'CSS', 'JS'],
    cover: `${cover}/calculator.png`,
    resumo: "Eu não queria uma calculadora que calculasse apenas dois números por vez, foi aqui que aprendi usar RegEx. Essa é a segunda versão, fiz novamente para praticar."
    }, 
    
    {
    title: 'Blog de Notícias',
    imgGlob: `${icones}/blog-news.png`,
    desc: 'Construi este blog para aprender sobre mais sobre APIs.',
    link: `${javascript}/blog/`,
    langs: ['HTML', 'CSS', 'JS'],
    cover: `${cover}/blog-news.png`,
    resumo: "O blog ficou bem legal, mas o servidor funcina apenas com localhost. Cada notícia tem uma url que joga para a segunda página que faz a requisição de mais dados da notícia."
    }, 

]
//colocar icone pc e responsivo
export default datas;

