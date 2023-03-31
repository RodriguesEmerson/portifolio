import datas from './dados.js';
const projects = document.querySelector('#projects');
const btnSeeMore = document.querySelector('#btn-see-more')

let start = 0;
let show = 3;
let addMore = 2;
if(window.innerWidth > 851){show = 5; addMore = 4};
if(window.innerWidth > 1266){show = 8; addMore = 3};
if(window.innerWidth > 1681){show = 11; addMore = 4};
if(show >)

//Fuções para carregar so projetos na página projetos.
function loadProjects() {

    for (let i = start; i <= show; i++){
        const project = datas[i];
        start = i;
    // }
    // datas.forEach(project => {
        const divProject = document.createElement('div');
            divProject.setAttribute('class', 'project');
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
        divProject.classList.add('delay')

    }
}

loadProjects();

btnSeeMore.addEventListener('click', () => {
    show = show + addMore;
    const topAtual = projects.offsetTop;
    loadProjects();
    console.log(topAtual)
})


{/* <div class="project">
    <div class="project-upside">
        <div class="glob">
            <img src="imagens/icones/kanban.png" alt="">
        </div>
        <div>
            <h4 class="project-title">Kanban</h4>
            <p class="projetc-description">
                Criei este projeto para praticar e obter novos
                conhecimentos.
            </p>
            <div class="link-lang">
                <a class="project-link" href=""><span>Ver projeto</span></a>
                <div class="languages">
                    <img class="languages-icon" src="imagens/logos/logoHTML.png" alt="logo css"></img>
                    <img class="languages-icon" src="imagens/logos/logoCSS.png" alt="logo html"></img>
                    <img class="languages-icon" src="imagens/logos/logoJS.png" alt="logo js"></img>
                </div>
            </div>
        </div>
    </div>

    <img class="project-cover" src="imagens/capas-dos-projetos/kanban2.png" alt="capa do projeto">

        <p>Com o layout inspirado no Trello,
            este site permite, criar cards, tags para os cards
            e movê-los livremente na vertical e entre colunas.
            &ldquo;Os dados são salvos no localstorage.&rdquo;
        </p>

</div> */}