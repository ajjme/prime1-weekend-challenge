$(document).ready(start);


// SUMMARY: Stored default info
  var people = [];
// END


// SUMMARY: Starts the script on pageload
function start() {
  console.log('script srced');

  // SUMMARY: Submit button collects info
    $('#submitButton').on('click', updateInfo);
  // END

  // SUMMARY: Listen to delete row
    $('#tableBody').on('click', 'button', deleteRow);
  // END
}


// SUMMARY: Deletes current row
function deleteRow() {
  $(this).closest('tr').remove();
} // END: deleteRow()


// SUMMARY: Constructor for employee
function Employee(firstName, lastName, idNumber, jobTitle, annualSalary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.idNumber = idNumber;
  this.jobTitle = jobTitle;
  this.annualSalary = annualSalary;
} // END: Employee(firstName, lastName, idNumber, jobTitle, annualSalary)


// SUMMARY: Calculates monthly costs
function calculateMonthlyCosts() {
  var totalMonthlyCosts = 0;
  for (var i = 0; i < people.length; i++) {
    totalMonthlyCosts += people[i].annualSalary / 12;
  }
  return totalMonthlyCosts;
} // END: calculateMonthlyCosts()


// SUMMARY: Collects info from input form
function updateInfo() {
  // SUMMARY: Collect info, make calculations
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();
  // END

  // SUMMARY: Store info if input is valid
    if (firstName && lastName && idNumber && jobTitle && annualSalary) {
      var newEmployee = new Employee(firstName, lastName, idNumber, jobTitle, annualSalary);
      people.push(newEmployee);
      appendEmployee(newEmployee);
      clearInputFields();
    } else {
      alert('One of the fields is not filled out!');
    }
  // END

} // END: updateInfo()


// SUMMARY: Appends new info to DOM
function appendEmployee(employee) {
  var newRow = $('<tr>');
  newRow.append('<td>' + employee.firstName + '</td>');
  newRow.append('<td>' + employee.lastName + '</td>');
  newRow.append('<td>' + employee.idNumber + '</td>');
  newRow.append('<td>' + employee.jobTitle + '</td>');
  newRow.append('<td>$' + employee.annualSalary + '</td>');
  newRow.append('<td><button class="deleteButton">Delete</button></td>');

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
