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
    
    //BONUS 1:

    // for (const employee of team) {
    //     console.log(employee);
    //     elencoTeam.innerHTML += 'Nome: ' + employee.name + '<br>' + ' Ruolo: ' + employee.role + '<br>' + ' Photo: '+ '<br>';
    //     elencoTeam.innerHTML +=`<img src="./img/${employee.photo}" alt="employeePhoto">`   + '<br>' + '<br>';
    // }

    //BONUS 2:

    for (const employee of team) {
        console.log(employee);
        elencoTeam.innerHTML += `
        <div class="card m-3 col-3">

            <img src="./img/${employee.photo}" alt="employeePhoto">

            <div class="card-body">
                <h5 class="card-title">${employee.name}</h5>
                <p class="card-text">${employee.role}</p>
            </div>
        </div>`;
        
    }