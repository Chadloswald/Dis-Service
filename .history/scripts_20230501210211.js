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
	var names = ["Smellward", "Poopington", "Fartsman", "Cheesewick", "McLoser", "Hoobitoob", "Cramsworth", "Plooperbum", "Frimblebim", "Feebrizz"];

	// randomly select two names from the array
	var randomIndex1 = Math.floor(Math.random() * names.length);
	var randomIndex2 = Math.floor(Math.random() * names.length);
	while (randomIndex1 === randomIndex2) {
		randomIndex2 = Math.floor(Math.random() * names.length);
	}
	var randomName1 = names[randomIndex1];
	var randomName2 = names[randomIndex2];

	// construct the message
	var message = "Hello " + firstname + " " + lastname + ", you are a " + selected.join(", ") + " little jerk, and " + selectedOption + ". You have lost the right to use the name " + firstname + " " + lastname + ". You will be henceforth know as " + randomName1 + " " + randomName2 + ". May shame follow your family for 1000 years.";

	// display the message in an alert box
	alert(message);
}
