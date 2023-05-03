

function displayMessage() {
	var title = "Vibe Check Delivery"
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
	var names = ["Smellward", "Poopington", "Fartsman", "Cheesewick", "McLoser", "Hoobitoob", "Cramsworth", "Plooperbum", "Frimblebim", "Feebrizz", "Skibblecheeks", "Crotchworth", "Dummy Dum Dum", "Pooperpants", "Butts", "Peachfuzz", "Diapy", "Noober"];

	// randomly select two names from the array
	var randomIndex1 = Math.floor(Math.random() * names.length);
	var randomIndex2 = Math.floor(Math.random() * names.length);
	while (randomIndex1 === randomIndex2) {
		randomIndex2 = Math.floor(Math.random() * names.length);
	}
	var randomName1 = names[randomIndex1];
	var randomName2 = names[randomIndex2];

	// construct the message
	var message = "<br><br>Hey " + firstname + " " + lastname + "! Here's a message to cheer you up! You are an " + selected.join(", ") + " little jerk, and " + selectedOption + ". <br><br>You have lost the right to use the name " + firstname + " " + lastname + ", you nerd. You will be henceforth known as " + randomName1 + " " + randomName2 + ". May shame follow your family for 1000 years.";

	var gif = document.getElementById("gif");
	gif.style.display = "block";

	var popup = window.open("", "Popup", "width=400,height=200");
	popup.document.write(title + "\n\n" + message + "\n" + <img id="gif" alt="" src="catdance.gif"></img>);
}