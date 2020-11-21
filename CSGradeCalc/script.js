var grades = [0, 0, 0, 0];

// helper function to add to existing result
function addToRes(resnode, content, tag = "p") {
	var newp = document.createElement(tag);
	var text = document.createTextNode(content);
	newp.appendChild(text);
	newp.className = "res-text";
	resnode.appendChild(newp);
}

// helper method to add new result, return resnode
function addResult(divId, content) {
	var rootDiv = document.getElementById(divId);
	var resultsDiv, newres;
	for (var i = 0; i < rootDiv.childElementCount; i++) {
		if (rootDiv.children[i].className == "results") {
			resultsDiv = rootDiv.children[i];
		}
	}
	for (var i = 0; i < resultsDiv.childElementCount; i++) {
		if (resultsDiv.children[i].className == "res") {
			resultsDiv.children[i].remove();
		}
	}
	newres = document.createElement("div");
	newres.className = "res";
	addToRes(newres, content);
	resultsDiv.appendChild(newres);
	return newres;
}

// calculate exam grade and update exam result
function examGrade(form) {
	// all are stored in percentagr (rounded)
	var highest = [20, 20, 20, 20, 20, 20];
	exams = new Array(6);
	for (var i = 0; i < form.length - 1; i++) {
		exams[i] = parseInt(form[i].value) / highest[i] * 100;
	}
	exams = exams.filter(function (val) {
		return !isNaN(val);
	});
	var min = Math.min.apply(null, exams);
	var sum = 0, percent = 0.36;
	for (var i = 0; i < exams.length; i++) {
		sum += exams[i];
	}
	if (exams.length > 5) {
		sum -= min;
	}
	if (!isFinite(min)) { // if no input, min will be infinity
		min = 0;
	}
	var total = (sum * percent / 5);
	if (total > 36) { // bound check
		total = 36;
	} else if (total < 0) {
		total = 0
	}
	var resnode = addResult("form1", "Total = " + Math.round(total) + "% out of 36%");
	addToRes(resnode, "Lowest = " + min + "%");
	addToRes(resnode, "Percentage breakdown:");
	var breakdown = "";
	for (var i = 0; i < exams.length; i++) {
		breakdown += exams[i] + "% ";
	}
	addToRes(resnode, breakdown);
	grades[0] = total;
}


// calculate project grade and update project result
function projectGrade(form) {
	// all are stored in percentagr (rounded)
	projects = new Array(5);
	var highest = [100, 100, 100, 100, 1000];
	projects = new Array(5);
	for (var i = 0; i < form.length - 1; i++) {
		projects[i] = parseInt(form[i].value) / highest[i] * 100;
	}
	projects = projects.filter(function (val) {
		return !isNaN(val);
	});
	var min = Math.min.apply(null, projects);
	var sum = 0, percent = 0.4;
	for (var i = 0; i < projects.length; i++) {
		sum += projects[i];
	}
	if (projects.length > 4) {
		sum -= min;
	}
	if (!isFinite(min)) { // if no input, min will be infinity
		min = 0;
	}
	var total = (sum * percent / 4);
	if (total > 40) { // bound check
		total = 40;
	} else if (total < 0) {
		total = 0
	}
	var resnode = addResult("form2", "Total = " + Math.round(total) + "% out of 40%");
	addToRes(resnode, "Lowest = " + min + "%");
	addToRes(resnode, "Percentage breakdown:");
	var breakdown = "";
	for (var i = 0; i < projects.length; i++) {
		breakdown += projects[i] + "% ";
	}
	addToRes(resnode, breakdown);
	grades[1] = total;
}


// calculate lab grade and update lab result
function labGrade(form) {
	// all are stored in percentagr (rounded)
	var highest = [5, 5, 5, 4, 4];
	labs = new Array(5);
	for (var i = 0; i < form.length - 1; i++) {
		labs[i] = parseInt(form[i].value) / highest[i] * 100;
	}
	labs = labs.filter(function (val) {
		return !isNaN(val);
	});
	var min = Math.min.apply(null, labs);
	var sum = 0, percent = 0.1;
	for (var i = 0; i < labs.length; i++) {
		sum += labs[i];
	}
	if (labs.length > 4) {
		sum -= min;
	}
	if (!isFinite(min)) { // if no input, min will be infinity
		min = 0;
	}
	var total = (sum * percent / 4);
	if (total > 10) { // bound check
		total = 10;
	} else if (total < 0) {
		total = 0
	}
	var resnode = addResult("form3", "Total = " + Math.round(total) + "% out of 10%");
	addToRes(resnode, "Lowest = " + min + "%");
	addToRes(resnode, "Percentage breakdown:");
	var breakdown = "";
	for (var i = 0; i < labs.length; i++) {
		breakdown += labs[i] + "% ";
	}
	addToRes(resnode, breakdown);
	grades[2] = total;
}


// calculate challenge grade and update challenge result
function challengeGrade(form) {
	// all are stored in percentagr (rounded)
	var highest = [6, 11, 25, 11, 11, 17, 31, 20, 11, 16, 21, 18];
	challenges = new Array(12);
	for (var i = 0; i < form.length - 1; i++) {
		challenges[i] = parseInt(form[i].value) / highest[i] * 100;
	}
	challenges = challenges.filter(function (val) {
		return !isNaN(val);
	});
	var min = Math.min.apply(null, challenges);
	var sum = 0, percent = 0.14;
	for (var i = 0; i < challenges.length; i++) {
		sum += challenges[i];
	}
	if (challenges.length > 11) {
		sum -= min;
	}
	if (!isFinite(min)) { // if no input, min will be infinity
		min = 0;
	}
	var total = (sum * percent / 11);
	if (total > 14) { // bound check
		total = 14;
	} else if (total < 0) {
		total = 0
	}
	var resnode = addResult("form4", "Total = " + Math.round(total) + "% out of 14%");
	addToRes(resnode, "Lowest = " + min + "%");
	addToRes(resnode, "Percentage breakdown:");
	var breakdown = "";
	for (var i = 0; i < challenges.length; i++) {
		breakdown += challenges[i] + "% ";
	}
	addToRes(resnode, breakdown);
	grades[3] = total;
}

// run all the calculation and returns final grade
function finalGrade() {
	// only form 1-4 is useful (index 0-3) 5 is last one
	var forms = document.getElementsByClassName("forms");
	// run all calculation again
	examGrade(forms[0].getElementsByTagName("form")[0]);
	projectGrade(forms[1].getElementsByTagName("form")[0]);
	labGrade(forms[2].getElementsByTagName("form")[0]);
	challengeGrade(forms[3].getElementsByTagName("form")[0]);
	var sum = Math.round(grades[0] + grades[1] + grades[2] + grades[3]);
	var message1 = "Your total grade is " + sum + "%";
	var message2 = "Percentage breakdown: " + grades[0] + "% + " + grades[1] + "% + " + grades[2] + "% + " + grades[3] + "%";
	var message3 = "Your final Grade : "
	if (sum >= 93) {
		message3 += "A"
	} else if (sum >= 90) {
		message3 += "A-"
	} else if (sum >= 87) {
		message3 += "B+"
	} else if (sum >= 83) {
		message3 += "B"
	} else if (sum >= 80) {
		message3 += "B-"
	} else if (sum >= 77) {
		message3 += "C+"
	} else if (sum >= 73) {
		message3 += "C"
	} else if (sum >= 70) {
		message3 += "C-"
	} else if (sum >= 67) {
		message3 += "D+"
	} else if (sum >= 60) {
		message3 += "D"
	} else {
		message3 += "F"
	}
	var resdiv = forms[4].getElementsByClassName("fin-res")[0];
	for (var i = 0; i < resdiv.childElementCount; i++) {
		resdiv.children[i].remove();
	}
	var newres = document.createElement("div");
	newres.className = "res";
	addToRes(newres, message1, "h2");
	addToRes(newres, message2, "h2");
	addToRes(newres, message3, "h2");
	resdiv.appendChild(newres);
	window.scrollTo(0, document.body.scrollHeight); // scroll to bottom
}