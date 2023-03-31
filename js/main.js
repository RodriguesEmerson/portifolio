import datas from './dados.js';
const projects = document.querySelector('#projects');
const btnSeeMore = document.querySelector('#btn-see-more');
let  animatedElements;

let start = 0;
let show = 3;
let addMore = 2;
if(window.innerWidth > 851){show = 5; addMore = 4};
if(window.innerWidth > 1266){show = 8; addMore = 3};
if(window.innerWidth > 1681){show = 11; addMore = 4};

let animation = false;


//Fuções para carregar so projetos na página projetos.
function loadProjects() {
    if(show >= datas.length){
        show = datas.length - 1;
        btnSeeMore.style.display = 'none';
        projects.style.paddingBottom = '10px';
    } 

    for (let i = start; i <= show; i++){
        const project = datas[i];
        start = i;
    // }
    // datas.forEach(project => {
        const divProject = document.createElement('div');
            divProject.setAttribute('class', 'project');
            divProject.classList.add('toAnimate')
        const divProjectUpside = document.createElement('div');
            divProjectUpside.setAttribute('class', 'project-upside');
        const divGlob = document.createElement('div');
            divGlob.setAttribute('class', 'glob');
        const imgGlob = document.createElement('img');
        const div = document.createElement('div');
        const projectTitle = document.createElement('h4');
            projectTitle.setAttribute('class', 'project-title');
        const firstP = document.createElement('p');
            firstP.setAttribute('class', 'project-description');
        const divLinkLang = document.createElement('div');
            divLinkLang.setAttribute('class', 'link-lang');
        const projectLink = document.createElement('a');
            projectLink.setAttribute('class', 'project-link');
            projectLink.setAttribute('rel', 'external');
            projectLink.setAttribute('target', '_blank')
        const projectLinkText = document.createElement('span');
        const divLangs = document.createElement('div');
            divLangs.setAttribute('class', 'languages');
        const divResponsive = document.createElement('div');
            divResponsive.setAttribute('class', 'responsive');
        const projectCover = document.createElement('img');
            projectCover.setAttribute('class', 'project-cover');
        const lastP = document.createElement('p');

        imgGlob.setAttribute('src', `${project.imgGlob}`);
        projectTitle.textContent = project.title;
        firstP.textContent = project.desc;
        projectLink.setAttribute('href', `${project.link}`);
        projectLinkText.textContent = 'Ver projeto';
        projectCover.setAttribute('src', `${project.cover}`);
        lastP.textContent = project.resumo;

        //Insere os icones das "linguagens" usadas
        project.langs.forEach(lang => {
            const logo = document.createElement('img');
            logo.setAttribute('class', 'languages-icon');
            logo.setAttribute('src', `imagens/logos/logo${lang}.png`);
            logo.setAttribute('alt', `logo ${lang}`);
            divLangs.appendChild(logo);
        });

        //Insere icones de responsividade
        project.respons.forEach(icone => {
            const icon = document.createElement('img');
            icon.setAttribute('class', 'responsive-icon');
            icon.setAttribute('src', `imagens/logos/logo${icone}.png`);
            icon.setAttribute('alt', `icone ${icone}`);
            divResponsive.appendChild(icon)
        });
        

        divProject.appendChild(divProjectUpside);
            divProjectUpside.appendChild(divGlob);
                divGlob.appendChild(imgGlob);
            divProjectUpside.appendChild(div);
                div.appendChild(projectTitle);
                div.appendChild(firstP);
                div.appendChild(divLinkLang);
                    divLinkLang.appendChild(projectLink);
                        projectLink.append(projectLinkText)
                    divLinkLang.appendChild(divLangs)
                    divLinkLang.appendChild(divResponsive)
        divProject.appendChild(projectCover);
        divProject.appendChild(lastP);

        projects.appendChild(divProject);
        if(animation){
            divProject.classList.add('animate')
        } 
    }

    animatedElements = document.querySelectorAll('.toAnimate')

}
loadProjects();

btnSeeMore.addEventListener('click', () => {
    start++
    show = show + addMore;
    animation = true;
    const topDoScroll = window.scrollY;

    loadProjects();

    //Mantem o scroll na mesma posição de antes de inserir os novos projetos
    window.scroll({top: topDoScroll})
   
});

function scrollAnimation(){
    const topAtual = window.pageYOffset;
    animatedElements.forEach(element => {
        if((topAtual - 30) > element.offsetTop){
            element.classList.add('animate');
        }
    })

}
scrollAnimation();
window.addEventListener('scroll', debounce(scrollAnimation, 20))


//O Debounce impede que a função chapada pelo evento do scroll seja
//chamada muitas vezes seguidas


function debounce(fn, wait){
    //'fn' é a função que será executada
    //'wait' é o tempo que essa função deve esperar para ser
    //chamada novamente.

    //O timer é null aqui, para que a funão de retorno
    //não os sobrescreva.
    let timer = null;

    return function(){
        let context = this;
        let args = arguments;

        //Esse clearTimeout é quem, na verdade, impede a repetição da função
        //Se o tempo para executar a função ainda não tiver terminado,
        //ele anula a chamada da função.
        clearTimeout(timer);

        timer = setTimeout(function(){
            //poderia ser feito assim:
            //fn();

            //Mas assim permite que qualquer função possa usar este debounce.
            fn.apply(context, args);
        }, wait)
    }
//Existe uma biblioteca própria pra isso 'Lodash'!
}