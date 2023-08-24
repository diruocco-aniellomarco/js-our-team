const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo:'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo:'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo:'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo:'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo:'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo:'barbara-ramos-graphic-designer.jpg'
    },   
]

const elencoTeam = document.getElementById('elenco-team');
    // console.log(team);

    for (const employee of team) {
        console.log(employee);
        elencoTeam.innerHTML += 'Nome: ' + employee.name + '<br>' + ' Ruolo: ' + employee.role + '<br>' + ' Photo: ' + employee.photo + '<br>' + '<br>';
    }