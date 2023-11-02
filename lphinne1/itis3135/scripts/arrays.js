let person = [
    "D.I. von Briesen",
    "Esam Abdullah",
    "Medina Gomez",
    "Kingston Hill",
    "Mateo Perdomo",
    "Alec Woods",
    "Amaan Rashid"
];
let salaries = [
    115000,
    98000,
    105000,
    76000,
    88000,
    65000,
    100000
];
function addSalary()
{
    let newPerson = prompt("What is the employees full name?");
    let newSalary = parseInt(prompt("What is the employees salary?"));
    let newPersonRegex = /^[A-Za-z\s.]+$/;
    let newSalaryRegex = /^\d+$/;
    if(newPersonRegex.test(newPerson) && newSalaryRegex.test(newSalary))
    {
        person.push(newPerson);
        salaries.push(newSalary);
        let selectList = document.getElementById('employee-list');
        let newListItem = document.createElement('option');
        newListItem.textContent = newPerson;
        selectList.appendChild(newListItem);
    }
    else
    { alert("Please try again. An input contained a forbidden character."); }
}
function displaySalary()
{
    let employeeTable = document.getElementById('employee-table');
    employeeTable.innerHTML = " <tr> <th>Name</th> <th>Salary</th> </tr>";
    for (let i = 0; i < salaries.length; i++)
    {
        let newTR = document.createElement('tr');
        let newTDName = document.createElement('td');
        let newTDSalary = document.createElement('td');
        newTDName.textContent = person[i];
        newTDSalary.textContent = "$"+salaries[i].toFixed(2);
        newTDSalary.style.textAlign = 'right';
        newTDSalary.style.fontFamily = 'Anonymous Pro';
        newTR.appendChild(newTDName);
        newTR.appendChild(newTDSalary);
        employeeTable.appendChild(newTR);
    }
    employeeTable.style.visibility = 'visible';
}
function displayResults()
{
    let averageSalary = 0;
    let highestSalary = 0;
    let avgCount = 0;
    for (let i = 0; i < salaries.length; i++)
    {
        if (salaries[i] > highestSalary)
            highestSalary = salaries[i];
        avgCount += salaries[i];
        averageSalary = avgCount / salaries.length;
    }
    let resultsText = document.getElementById('results');
    resultsText.textContent = "Highest Salary: $" + highestSalary.toFixed(2) + " | Average Salary: $" + averageSalary.toFixed(2);
    resultsText.style.visibility = 'visible';
}