console.log('Loading client.js');

let employeeArray = [];
let totalAnnualSalary = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jQuery has been loaded!');
    $('#addEmployee').on('click', addEmployeeClick);
    // any time #employeeTableBody is clicked
    // check to see (more specifically) if the descendant has class .deleteEmployee
    // if it does, run the function with the .deleteEmployee element as $(this)
    $('#employeeTableBody').on('click', '.deleteEmployee', deleteEmployeeClick);
};

function addEmployeeClick() {
    console.log('I have been clicked!');
    let newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeId: $('#employeeId').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    }
    employeeArray.push(newEmployee);
    console.log(employeeArray);
    updateTable();
}

function deleteEmployeeClick() {
    console.log('deleting employee!');
    let elementId = $(this).attr('id'); // attr is value of any attribute on element
    console.log('elementId', elementId);
    for (let i = 0; i < employeeArray.length; i++) {
        const employee = employeeArray[i];
        if (employee.employeeId == elementId) {
            employeeArray.splice(i, 1);
        }
    }
    updateTable();
}

function updateTable() {
    totalAnnualSalary = 0;
    $('#employeeTableBody').empty();
    for (let i = 0; i < employeeArray.length; i++) {
        const employee = employeeArray[i];
        $('#employeeTableBody').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeId}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
                <td><button class="deleteEmployee" id="${employee.employeeId}">Delete</button></td>
            </tr>
        `);        
    }
    for (let i = 0; i < employeeArray.length; i++) {
        const employee = employeeArray[i];
        totalAnnualSalary += Number(employee.annualSalary);
    }
    $('#monthlySalary').text(totalAnnualSalary / 12);

    if(totalAnnualSalary/12 > 20000) {
        // turn background red
        $('#monthlySalary').css('background-color', 'red');
    } else {
        $('#monthlySalary').css('background-color', 'transparent');
    }
}