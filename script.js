$(document).ready(start);


// SUMMARY: Stored default info
  var people = [];
  var peopleCount = 0;
  var removedCosts = 0;
// END


// SUMMARY: Starts the script on pageload
function start() {

  // SUMMARY: Submit button collects info
    $('#submitButton').on('click', updateInfo);
  // END

  // SUMMARY: Listen to delete row
    $('#tableBody').on('click', 'button', deleteRow);
  // END
}


// SUMMARY: Deletes current row
function deleteRow() {

  // SUMMARY: Removes this row's monthlyCost from total
    removedCosts += $(this).closest('tr').data().monthlyCost;
    console.log(removedCosts);
    displayMonthlyCosts();
  // END

  $(this).closest('tr').remove();
} // END: deleteRow()


// SUMMARY: Constructor for employee
function Employee(firstName, lastName, idNumber, jobTitle, annualSalary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.idNumber = idNumber;
  this.jobTitle = jobTitle;
  this.annualSalary = Number(annualSalary);
  this.monthlyCost = Number( (this.annualSalary / 12).toFixed(2) );
} // END: Employee(firstName, lastName, idNumber, jobTitle, annualSalary)


// SUMMARY: Calculates monthly costs
function calculateMonthlyCosts() {
  var totalMonthlyCosts = 0;
  for (var i = 0; i < people.length; i++) {
    totalMonthlyCosts += people[i].monthlyCost;
  }
  return totalMonthlyCosts;
} // END: calculateMonthlyCosts()


// SUMMARY: Displays monthly costs report
function displayMonthlyCosts() {
  var newCost = calculateMonthlyCosts();
  newCost = newCost - removedCosts;
  $('#monthlyCostsReport span').text(newCost);
  // NOTE: I didn't "append" this info to the DOM per the instructions, because we wanted to update the new value each time.
} // END: displayMonthlyCosts()


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
      if (!isNaN(annualSalary)) {
        var newEmployee = new Employee(firstName, lastName, idNumber, jobTitle, annualSalary);
        people.push(newEmployee);
        appendEmployee(newEmployee);
        clearInputFields();
        displayMonthlyCosts();
      } else {
        alert('The annual salary must be a number!');
      }
    } else {
      alert('One of the fields is not filled out!');
    }
  // END

} // END: updateInfo()


// SUMMARY: Appends new info to DOM
function appendEmployee(employee) {
  var newRow = $('<tr id="employee-' + peopleCount++ + '">');
  newRow.append('<td>' + employee.firstName + '</td>');
  newRow.append('<td>' + employee.lastName + '</td>');
  newRow.append('<td>' + employee.idNumber + '</td>');
  newRow.append('<td>' + employee.jobTitle + '</td>');
  newRow.append('<td>$' + employee.annualSalary + '</td>');
  newRow.append('<td>$' + employee.monthlyCost + '</td>');
  newRow.append('<td><button class="deleteButton">Delete</button></td>');

  // SUMMARY: Append info to DOM and add data
    $(newRow).data('monthlyCost', employee.monthlyCost);
    $('#tableBody').append(newRow);
  // END

} // END: appendEmployee(newEmployee)


// SUMMARY: Clear input fields
function clearInputFields() {
  $('#firstName').val('');
  $('#lastName').val('');
  $('#idNumber').val('');
  $('#jobTitle').val('');
  $('#annualSalary').val('');
} // END: clearInputFields()
