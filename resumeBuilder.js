var bio = {
	"name" : "Jeff Lemire",
	"role" : "WebDeveloper",
	"welcomeMessage" : "Welcome to my page!",
	"image" : "images/me.jpg",
	"contacts" : [{
		"mobile" : "555-555-5555",
		"skype" : "jeff1985",
		"email" : "jeff-lemire@live.com",
		"github" : "Eljefe11",
		"location" : "San Francisco, CA, US",
		"email" : "jeff-lemire@live.com"
	}],
	"skills" : ["HTML", "CSS", "JavaScript", "Python"]
};

var work = {
	"jobs" : [
	{
		"employer" : "SNEI",
		"title" : "Biologist",
		"location" : "Las Vegas, NV, US",
		"dates" : "February 2011 - May 2015",
		"description" : "Surveyed and monitored construction projects for desert tortoise"
	},
	{
		"employer" : "NH Fish and Game",
		"title" : "Biological Technician",
		"location" : "Concord, NH, US",
		"dates" : "May 2008 - September 2008",
		"description" : "Pine barrens habitat restoration"
	}]
};

var projects = {
	"project" : [{
		"title" : "Project portfolio ",
		"dates" : "2015", 
		"description" : "Created web page to show finished and developing projects.", 
		"images" : ["images/ND1.png"]	
	},
	{
		"title" : "Online Resume",
		"dates" : "2015", 
		"description" : "Developed online resume to display projects and information.", 
		"images" : ["images/NanodegreeResume1.png"]
	}]
};

var education = {
	"schools" : [
	{
		"name" : "University of New Hampshire",
		"location" : "Durham, NH, US",
		"degree" : "Bachelor of Science", 
		"majors" : "Conservation Biology",
		"dates" : "2004 - 2008",
		"url" : "http://www.unh.edu/"
	}],
	"online courses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "udacity",
		"dates" : "2015 - present",
		"url" : "https://www.udacity.com/course/nd001"
	}]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='index.html'>Data</a></li>" +
"<li><a href='index.html'>About</a></li>" +
"</ul>";
