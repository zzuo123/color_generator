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
	exams = new Array(6);
	exams[0] = parseInt(form.exam1.value) / 20 * 100;
	exams[1] = parseInt(form.exam2.value) / 20 * 100;
	exams[2] = parseInt(form.exam3.value) / 20 * 100;
	exams[3] = parseInt(form.exam4.value) / 20 * 100;
	exams[4] = parseInt(form.exam5.value) / 20 * 100;
	exams[5] = parseInt(form.exam6.value) / 20 * 100;
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
	var resnode = addResult("form1", "Total = " + Math.round(sum * percent / 5) + "% out of 36%");
	addToRes(resnode, "Lowest = " + min + "%");
	addToRes(resnode, "Percentage breakdown:");
	var breakdown = "";
	for (var i = 0; i < exams.length; i++) {
		breakdown += exams[i] + "% ";
	}
	addToRes(resnode, breakdown);
	grades[0] = (sum * percent / 5);
}


// calculate project grade and update project result
function projectGrade(form) {
	// all are stored in percentagr (rounded)
	projects = new Array(6);
	projects[0] = parseInt(form.project1.value) / 100 * 100;
	projects[1] = parseInt(form.project2.value) / 100 * 100;
	projects[2] = parseInt(form.project3.value) / 100 * 100;
	projects[3] = parseInt(form.project4.value) / 100 * 100;
	projects[4] = parseInt(form.project5.value) / 1000 * 100;
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
	var resnode = addResult("form2", "Total = " + Math.round(sum * percent / 4) + "% out of 40%");
	addToRes(resnode, "Lowest = " + min + "%");
	addToRes(resnode, "Percentage breakdown:");
	var breakdown = "";
	for (var i = 0; i < projects.length; i++) {
		breakdown += projects[i] + "% ";
	}
	addToRes(resnode, breakdown);
	grades[1] = (sum * percent / 4);
}


// calculate lab grade and update lab result
function labGrade(form) {
	// all are stored in percentagr (rounded)
	labs = new Array(6);
	labs[0] = parseInt(form.lab1.value) / 5 * 100;
	labs[1] = parseInt(form.lab2.value) / 5 * 100;
	labs[2] = parseInt(form.lab3.value) / 5 * 100;
	labs[3] = parseInt(form.lab4.value) / 4 * 100;
	labs[4] = parseInt(form.lab5.value) / 4 * 100;
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
	var resnode = addResult("form3", "Total = " + Math.round(sum * percent / 4) + "% out of 10%");
	addToRes(resnode, "Lowest = " + min + "%");
	addToRes(resnode, "Percentage breakdown:");
	var breakdown = "";
	for (var i = 0; i < labs.length; i++) {
		breakdown += labs[i] + "% ";
	}
	addToRes(resnode, breakdown);
	grades[2] = (sum * percent / 4);
}


// calculate challenge grade and update challenge result
function challengeGrade(form) {
	// all are stored in percentagr (rounded)
	challenges = new Array(6);
	challenges[0] = parseInt(form.challenge1.value) / 6 * 100;
	challenges[1] = parseInt(form.challenge2.value) / 11 * 100;
	challenges[2] = parseInt(form.challenge3.value) / 25 * 100;
	challenges[3] = parseInt(form.challenge4.value) / 11 * 100;
	challenges[4] = parseInt(form.challenge5.value) / 11 * 100;
	challenges[5] = parseInt(form.challenge6.value) / 17 * 100;
	challenges[6] = parseInt(form.challenge7.value) / 31 * 100;
	challenges[7] = parseInt(form.challenge8.value) / 20 * 100;
	challenges[8] = parseInt(form.challenge9.value) / 11 * 100;
	challenges[9] = parseInt(form.challenge10.value) / 16 * 100;
	challenges[10] = parseInt(form.challenge11.value) / 21 * 100;
	challenges[11] = parseInt(form.challenge12.value) / 18 * 100;
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
	var resnode = addResult("form4", "Total = " + Math.round(sum * percent / 11) + "% out of 14%");
	addToRes(resnode, "Lowest = " + min + "%");
	addToRes(resnode, "Percentage breakdown:");
	var breakdown = "";
	for (var i = 0; i < challenges.length; i++) {
		breakdown += challenges[i] + "% ";
	}
	addToRes(resnode, breakdown);
	grades[3] = (sum * percent / 11);
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
	var message2 = "Percentage breakdown: "+grades[0]+"% + "+grades[1]+"% + "+grades[2]+"% + "+grades[3]+"%";
	var message3 = "Your final Grade : "
	if(sum >= 93) {
		message3 += "A"
	} else if(sum >=90) {
		message3 += "A-"
	}else if(sum >=87) {
		message3 += "B+"
	}else if(sum >=83) {
		message3 += "B"
	}else if(sum >=80) {
		message3 += "B-"
	}else if(sum >=77) {
		message3 += "C+"
	}else if(sum >=73) {
		message3 += "C"
	}else if(sum >=70) {
		message3 += "C-"
	}else if(sum >=67) {
		message3 += "D+"
	}else if(sum >=60) {
		message3 += "D"
	}else{
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
}