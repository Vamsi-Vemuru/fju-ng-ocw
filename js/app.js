(function() {
	var app = angular.module('landingpage',['ngMaterial']);
	angular.controller("foundationCoursesCtrl", function() {
		this.courses = foundationCourses;
	});

	var foundationCourses = [{
		course: "Intro Programming",
		description: "",
		instructor: ""
	}, {
		course: "Object Oriented Programming",
		description: "",
		instructor: ""
	}, {
		course: "Computer Systems",
		description: "",
		instructor: ""
	}, {
		course: "Algorithms and Data Structures",
		description: "",
		instructor: ""
	}, {
		course: "Databases",
		description: "",
		instructor: ""
	}, {
		course: "Software Engineering",
		description: "",
		instructor: ""
	}];

	var breadthCourses = [{
		course: "Social Network Computing",
		description: "",
		instructor: ""
	}, {
		course: "Mobile Apps",
		description: "",
		instructor: ""
	}, {
		course: "Data Analytics",
		description: "",
		instructor: ""
	}, {
		course: "Cloud Computing",
		description: "",
		instructor: ""
	}, {
		course: "Artificial Intelligence",
		description: "",
		instructor: ""
	}, {
		course: "Robotics",
		description: "",
		instructor: ""
	}, {
		course: "Network",
		description: "",
		instructor: ""
	} , {
		course: "Security",
		description: "",
		instructor: ""
	}];

	var specializations = [{
		course: "Full Stack Web Development",
		description: "",
		instructor: ""
	}, {
		course: "Android App Development",
		description: "",
		instructor: ""
	}, {
		course: "Data Science",
		description: "",
		instructor: ""
	}, {
		course: "Software Engineering",
		description: "",
		instructor: ""
	}, {
		course: "Cloud Computing",
		description: "",
		instructor: ""
	}, {
		course: "Advanced Programming",
		description: "",
		instructor: ""
	}];
})();