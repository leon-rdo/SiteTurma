let alunosArea = document.querySelector('.box-alunos');

for(let i=0; i<alunosJson.length; i++){
        
    let div = document.createElement('div');
    div.classList.add('col-12');
    div.classList.add('col-md-6');
    div.classList.add('col-lg-3');

    let itemAluno = document.querySelector('.modelo-aluno').cloneNode(true);    
    itemAluno.querySelector('.modelo-aluno a').href = alunosJson[i].link;
    itemAluno.querySelector('.modelo-aluno a .card img').src = alunosJson[i].img;
    itemAluno.querySelector('.modelo-aluno a .card img').alt = 'Foto de '+alunosJson[i].name;
    itemAluno.querySelector('.modelo-aluno a .card .card-body .card-title').innerHTML = alunosJson[i].name;
    itemAluno.querySelector('.modelo-aluno a .card .card-body .card-text').innerHTML = alunosJson[i].description;
    div.append(itemAluno)

    alunosArea.append(div);
}