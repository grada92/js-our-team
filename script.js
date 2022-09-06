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
    'img-profile' : 'img/wayne-barnett-founder-ceo.jpg',
    },
    
    {
    'name' : 'Angela Caroll',
    'rule' : 'Chief Editor',
    'img-profile' : 'img/angela-caroll-chief-editor.jpg',
    
    },

    {
    'name' : 'Walter Gordon',
    'rule' : 'Office Manager',
    'img-profile' : 'img/walter-gordon-office-manager.jpg',
        
    },

    {
    'name' : 'Angela Lopez',
    'rule' : 'Social Media Manager',
    'img-profile' : 'img/angela-lopez-social-media-manager.jpg',
         
    },

    {
    'name' : 'Scott Estrada',
    'rule' : 'Developer',
    'img-profile' : 'img/scott-estrada-developer.jpg',
              
    },

    {
    'name' : 'Barbara Ramos',
    'rule' : 'Graphic Designer',
    'img-profile' : 'img/barbara-ramos-graphic-designer.jpg',
         
    },
];

for(teamIndex = 0; teamIndex < team.length;teamIndex ++){
    const value = team[teamIndex];
    console.log('nome' + ' ' + value.name);
    console.log('rule' + ' ' + value.rule);
    console.log('img' + ' ' + value["img-profile"]);
    

}
