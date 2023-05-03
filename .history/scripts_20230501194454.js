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

	// get the value of the selected option in the dropdown menu
	var dropdown = document.getElementById("dropdown");
	var selectedOption = dropdown.options[dropdown.selectedIndex].value;

	// create an array of names
	var names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Isabella", "Jack"];

	// randomly select two names from the array
	var randomIndex1 = Math.floor(Math.random() * names.length);
	var randomIndex2 = Math.floor(Math.random() * names.length);
	while (randomIndex1 === randomIndex2) {
		randomIndex2 = Math.floor(Math.random() * names.length);
	}
	var randomName1 = names[randomIndex1];
	var randomName2 = names[randomIndex2];

	// construct the message
	var message = "Hello " + firstname + " " + lastname + ", you have selected the following options: " + selected.join(", ") + ". You have also selected " + selectedOption + " from the dropdown menu. Your new name is " + randomName1 + " " + randomName2 + ".";

	// display the message in an alert box
	alert(message);
}
