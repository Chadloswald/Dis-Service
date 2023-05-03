function displayMessage() {
	// get the values of the input fields
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;

	// get the values of the selected checkboxes
	var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	var selected = [];
	for (var i = 0; i < checkboxes.length; i++) {
		selected.push(checkboxes[i].value);
	}

	// construct the message
	var message = "Hello " + firstname + " " + lastname + ", you have clicked the following boxes: " + selected.join(", ");

	// display the message in an alert box
	alert(message);
}
