var bio = {
    "name": "Rahul Kathuria",
    "role": "Android Developer",
    "contacts": {
        "mobile": "+918684868265",
        "email": "rahulkathuria52@gmail.com",
        "github": "www.github.com/RahulKathuria",
        "twitter": "@rahulkathuria52",
        "location": "Bhiwani"
    },
    "welcomeMessage": "Hello Visitor ",
    "skills": ["Java", "C++", "Android", "Web-Development"],
    "biopic": "images/biopic.JPG"

};
var education = {
    schools: [{
        "name": "Bhiwani Public School",
        "location": "Bhiwani",
        "degree": "Metric",
        "majors": ["Science", "Math", "English", "Computer Science"],
        "dates": "1-march-2015"
    }],
    onlineCourses: [{
        "title": "Android Developer Nanodegree",
        "school": "Udacity",
        "dates": "1-January-2017",
        "url": "www.udacity.com"
    }]
};
var work = {
    jobs: [{
            "employer": "Udacity",
            "title": "Mentor",
            "location": "India",
            "dates": "1-August-2017",
            "description": "Mentor at Udacity"
        },
        {
            "employer": "IEI",
            "title": "Executive",
            "location": "India",
            "dates": "1-march-2016",
            "description": "Executive at IEI Society"
        }
    ]

};
var projects = {
    projects: [{
            "title": "Portfolio",
            "dates": "1-march-2017",
            "description": "Project of Front End Nanodegree",
            "images": ["images/project1.png", "images/project1_1.png"]
        },
        {
            "title": "Reverse-mad-libs",
            "dates": "1-march-2017",
            "description": "Project of IPND",
            "images": ["images/project2.png"]
        }
    ]
};
$("#mapDiv").append(googleMap);
bio.display = function() {
    var display_name = HTMLheaderName.replace('%data%', bio.name);
    var display_role = HTMLheaderRole.replace('%data%', bio.role);
    $("#header").prepend(display_role);
    $("#header").prepend(display_name);
    var display_mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var display_email = HTMLemail.replace('%data%', bio.contacts.email);
    var display_github = HTMLgithub.replace('%data%', bio.contacts.github);
    var display_twitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var display_location = HTMLlocation.replace('%data%', bio.contacts.location);
    $("#topContacts","#footerContacts").append(display_mobile);
    $("#topContacts","#footerContacts").append(display_email);
    $("#topContacts","#footerContacts").append(display_github);
    $("#topContacts","#footerContacts").append(display_twitter);
    $("#topContacts","#footerContacts").append(display_location);
    var display_biopic = HTMLbioPic.replace('%data%', bio.biopic);
    var dispaly_welcomMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $("#header").append(display_biopic);
    $("#header").append(dispaly_welcomMessage);
    $("#header").append(HTMLskillsStart);
        var display_skill, i;
        for (i = 0; i < bio.skills.length; i++) {
            display_skill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(display_skill);
        }
};
bio.display();
work.display = function() {
    $("#workExperience").append(HTMLworkStart);

    for (var a = 0; a < work.jobs.length; a++) {

        var display_employer = HTMLworkEmployer.replace("%data%", work.jobs[a].employer);
        var display_title = HTMLworkTitle.replace("%data%", work.jobs[a].title);
        var display_date = HTMLworkDates.replace("%data%", work.jobs[a].dates);
        var display_description = HTMLworkDescription.replace("%data%", work.jobs[a].description);
        var display_location = HTMLworkLocation.replace("%data%", work.jobs[a].location);
        $(".work-entry:last").append(display_employer);
        $(".work-entry:last").append(display_title);
        $(".work-entry:last").append(display_date);
        $(".work-entry:last").append(display_description);
        $(".work-entry:last").append(display_location);
    }
};
work.display();

education.display = function() {

    $("#education").append(HTMLschoolStart);

    for (var i = 0; i < education.schools.length; i++) {

        var display_schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var display_schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var display_schoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var display_schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var display_schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry").append(display_schoolName);
        $(".education-entry").append(display_schoolDegree);
        $(".education-entry").append(display_schoolDate);
        $(".education-entry:first").append(display_schoolLocation);
        $(".education-entry").append(display_schoolMajor);
    }

    $(".education-entry").append(HTMLonlineClasses);
    for (var j = 0; j < education.onlineCourses.length; j++) {

        var display_courseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var display_courseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var display_courseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        var display_CourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry").append(display_CourseUrl);
        $(".education-entry").append(display_courseTitle);
        $(".education-entry").append(display_courseSchool);
        $(".education-entry").append(display_courseDate);
    }
};

education.display();

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var j = 0; j < projects.projects.length; j++) {
        var display_projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[j].title);
        var display_projectDate = HTMLprojectDates.replace("%data%", projects.projects[j].dates);
        var display_projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[j].description);
        $(".project-entry").append(display_projectTitle);
        $(".project-entry").append(display_projectDate);
        $(".project-entry").append(display_projectDescription);
        for (var k = 0; k < projects.projects[j].images.length; k++) {
            var display_projectImage = HTMLprojectImage.replace("%data%", projects.projects[j].images[k]);
            $(".project-entry").append(display_projectImage);
        }

    }
};
projects.display();