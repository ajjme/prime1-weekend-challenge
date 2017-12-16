$(document).ready(start);

// SUMMARY: Stored default info
  var people = [];
// END


function start() {
  console.log('script srced');

  // SUMMARY: Submit button collects info
    $('#submitButton').on('click', updateInfo);
  // END

}

// SUMMARY: Constructor for employee
function Employee(firstName, lastName, idNumber, jobTitle, annualSalary, monthlyCosts) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.idNumber = idNumber;
  this.jobTitle = jobTitle;
  this.annualSalary = annualSalary;
  this.monthlyCosts = monthlyCosts;
} // END: Employee(firstName, lastName, idNumber, jobTitle, annualSalary)

// SUMMARY: Collects info from input form
function updateInfo() {
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNumber = $('#idNumber').val();
  var jobTitle = $('#jobTitle').val();
  var annualSalary = $('#annualSalary').val();
  var monthlyCosts = (annualSalary / 12).toFixed(2);

  if (firstName && lastName && idNumber && jobTitle && annualSalary) {
    var newEmployee = new Employee(firstName, lastName, idNumber, jobTitle, annualSalary, monthlyCosts);
    people.push(newEmployee);
    appendEmployee(newEmployee);
    clearInputFields();
  } else {
    alert('One of the fields is not filled out!');
  }
} // END: updateInfo()

// SUMMARY: Appends new info to DOM
function appendEmployee(employee) {
  var newRow = $('<tr>');
  newRow.append('<td>' + employee.firstName + '</td>');
  newRow.append('<td>' + employee.lastName + '</td>');
  newRow.append('<td>' + employee.idNumber + '</td>');
  newRow.append('<td>' + employee.jobTitle + '</td>');
  newRow.append('<td>$' + employee.annualSalary + '</td>');
  newRow.append('<td>$' + employee.monthlyCosts + '</td>');
  newRow.append('<td><button>Delete</button></td>');

  $('#tableBody').append(newRow);
} // END: appendEmployee(newEmployee)

// SUMMARY: Clear input fields
function clearInputFields() {
  $('#firstName').val('');
  $('#lastName').val('');
  $('#idNumber').val('');
  $('#jobTitle').val('');
  $('#annualSalary').val('');
} // END: clearInputFields()
