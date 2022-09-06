console.log('JS OK');
// Progetto

/*
Utilizzando i dati forniti, creare un array di oggetti 
per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti 
informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo 
e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su 
DOM sottoforma di stringhe
*/

// Creo array con informazioni del team
const team = [
    {
    'name' : 'Wayne Barnett',
    'rule' : 'Founder & CEO',
    'imgProfile' : 'img/wayne-barnett-founder-ceo.jpg',
    },
    
    {
    'name' : 'Angela Caroll',
    'rule' : 'Chief Editor',
    'imgProfile' : 'img/angela-caroll-chief-editor.jpg',
    
    },

    {
    'name' : 'Walter Gordon',
    'rule' : 'Office Manager',
    'imgProfile' : 'img/walter-gordon-office-manager.jpg',
        
    },

    {
    'name' : 'Angela Lopez',
    'rule' : 'Social Media Manager',
    'imgProfile' : 'img/angela-lopez-social-media-manager.jpg',
         
    },

    {
    'name' : 'Scott Estrada',
    'rule' : 'Developer',
    'imgProfile' : 'img/scott-estrada-developer.jpg',
              
    },

    {
    'name' : 'Barbara Ramos',
    'rule' : 'Graphic Designer',
    'imgProfile' : 'img/barbara-ramos-graphic-designer.jpg',
         
    },
];



for(let index = 0; index < team.length; index++) {

    const teamMember = team[index];
    console.log(teamMember.name);
    console.log(teamMember.rule);
    console.log(teamMember.imgProfile);

    const userMembers = document.createElement("div");
    const row = document.querySelector(".user").append(userMembers);
    
    //Collego in Html le informazioni
   userMembers.innerHTML += ` <img src="${teamMember.imgProfile}" class="img-fluid pt-3"> `
   userMembers.innerHTML += ` <div> ${teamMember.name} </div> ` 
   userMembers.innerHTML += ` <div> ${teamMember.rule} </div> ` 
   userMembers.className = "col-2 mx-3";

    

}


