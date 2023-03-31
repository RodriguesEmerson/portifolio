const icones = 'imagens/icones';
const cover = 'imagens/capas-dos-projetos';
const javascript = 'https://rodriguesemerson.github.io/JAVASCRIPT/desafios';
const html = 'https://rodriguesemerson.github.io/Html-e-CSS/projetos';
const datas = [
    {
    title: 'Kanban',
    imgGlob: `${icones}/kanban.png`,
    desc: 'Criei este projeto para praticar e obter novos conhecimentos.',
    link: 'https://rodriguesemerson.github.io/JAVASCRIPT/projetos/clone-trello/',
    langs: ['HTML', 'CSS', 'JS'],
    respons: ['PC'],
    cover: `${cover}/kanban2.png`,
    resumo: "Com o layout inspirado no Trello, este site permite criar cards, tags e movê-los livremente na vertical e entre colunas, além de ser possível editar e excluí-los."
    },

    {
    title: 'Mini Organizador Financeiro',
    imgGlob: `${icones}/finance-organizer.png`,
    desc: 'Aqui, além de praticar tabelas, aprendi muito sobre manipulação de dados!',
    link: `${javascript}/finance/`,
    langs: ['HTML', 'CSS', 'JS'],
    respons: ['PC'],
    cover: `${cover}/finance-organizer.png`,
    resumo: "O que mais me agregou valor neste projeto, foi a quetão de manipulação de dados, e requereu muita lógica, assim como os outros projetos."
    },

    {
    title: 'Weather',
    imgGlob: `${icones}/weather.png`,
    desc: 'Projeto para praticar requisições e tratamento dos dados recebidos de APIs.',
    link: `${javascript}/weather/`,
    langs: ['HTML', 'CSS', 'JS'],
    respons: ['PC', 'CELL'],
    cover: `${cover}/weather.png`,
    resumo: "Este é uns dos projetos em que pratiquei e obtive conhecimentos sobre APIs, desde a requisição até o tratamento dos dados recebidos."
    },

    {
    title: 'Ecommerce',
    imgGlob: `${icones}/ecommerce.png`,
    desc: 'Aqui aprendi muito sobre CSS e HTML, mas tem um pouco de javascript também.',
    link: `${html}/ecommerce/`,
    langs: ['HTML', 'CSS', 'JS'],
    respons: ['PC', 'CELL'],
    cover: `${cover}/ecommerce.png`,
    resumo: "Este site não tem muitas interações, mas dediquei muito na criação do layout, aqui descobri mais sobre o maravilhoso mundo do display flex e grid."
    }, 

    {
    title: 'Site de Receitas',
    imgGlob: `${icones}/site-receitas.png`,
    desc: 'Este é mais um projeto focado em HTML e CSS.',
    link: `${html}/site-receitas/`,
    langs: ['HTML', 'CSS'],
    respons: ['PC', 'CELL'],
    cover: `${cover}/site-receitas.png`,
    resumo: "Este site tem apenas um código para mostrar e esconder o menu, o resto é html e css. Sendo totalmente estático, não tem muitas interações, foquei mais em deixá-lo responsivo."
    },

    {
    title: 'Portiólio de Fotos',
    imgGlob: `${icones}/photography.png`,
    desc: 'Este projeto foi um divisor muito um divisor de águas.',
    link: `${html}/photography-site/paginas/`,
    langs: ['HTML', 'CSS', 'JS'],
    respons: ['PC', 'CELL'],
    cover: `${cover}/photography.png`,
    resumo: "Foi aqui que aprendi muito sobre css grid e modal. Este site tem um código que verifica cada fotografia para colocá-las com o row-span correto, pois as glerias foram criadas com ccs grid."
    }, 

    {
    title: 'To do List',
    imgGlob: `${icones}/to-do-list.png`,
    desc: 'Essa To do List, criei qundo ainda estava bem no início de estudos com JavaScritp.',
    link: `${javascript}/to-do-list/`,
    langs: ['HTML', 'CSS', 'JS'],
    respons: ['PC', 'CELL'],
    cover: `${cover}/to-do-list.png`,
    resumo: "Foi neste projeto que aprendi como atualizar a seleção do dom com elementos dinâmicos. Me dediquei bastante neste projeto."
    },

    {
    title: 'Calculadora',
    imgGlob: `${icones}/calculator.png`,
    desc: 'Pensa nunhuma coisa que deu trabalho foi essa calculadora, mas ficou muito boa.',
    link: `${javascript}/calculadoratwo/`,
    langs: ['HTML', 'CSS', 'JS'],
    respons: ['PC', 'CELL'],
    cover: `${cover}/calculator.png`,
    resumo: 'Eu não queria uma calculadora que calculasse apenas dois números por vez, foi aqui que aprendi a usar RegEx. Essa é a segunda versão, fiz novamente para praticar.'
    }, 
    
    {
    title: 'Blog de Notícias',
    imgGlob: `${icones}/blog-news.png`,
    desc: 'Construi este blog para aprender sobre mais sobre APIs.',
    link: `${javascript}/blog/`,
    langs: ['HTML', 'CSS', 'JS'],
    respons: ['PC'],
    cover: `${cover}/blog-news.png`,
    resumo: "O blog ficou bem legal, mas o servidor funcina apenas com localhost. Cada notícia tem uma url que joga para a segunda página que faz a requisição de mais dados da notícia e a preenche."
    }, 

    

]
//colocar icone pc e responsivo
export default datas;

