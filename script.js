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
function Employee(firstName, lastName, idNumber, jobTitle, annualSalary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.idNumber = idNumber;
  this.jobTitle = jobTitle;
  this.annualSalary = annualSalary;
} // END: Employee(firstName, lastName, idNumber, jobTitle, annualSalary)

// SUMMARY: Collects info from input form
function updateInfo() {
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNumber = $('#idNumber').val();
  var jobTitle = $('#jobTitle').val();
  var annualSalary = $('#annualSalary').val();

  if (firstName && lastName && idNumber && jobTitle && annualSalary) {
    var newEmployee = new Employee(firstName, lastName, idNumber, jobTitle, annualSalary);
    people.push(newEmployee);
  }
} // END: updateInfo()
