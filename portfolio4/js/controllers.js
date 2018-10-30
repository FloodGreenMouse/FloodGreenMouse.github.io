'use strict'

angular.module('lawyerMaltsev', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'mainPageCtrl',
				templateUrl: '/templates/mainpage.html'
			})
	})

	.controller('mainPageCtrl', function($scope, $location, $http) {
		console.log("HELLO");
	})