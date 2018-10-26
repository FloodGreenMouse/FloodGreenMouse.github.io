<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Юрист Евгений Мальцев</title>
	<script src="./js/jquery-3.3.1.slim.min.js"></script>
	<script src="./js/popper.min.js"></script>
	<script src="./js/angular.min.js"></script>
	<script src="./js/angular-route.min.js"></script>
	<script src="./js/controllers.js"></script>
	<script src="./js/bootstrap.min.js"></script>
	<script src="./js/wow.min.js"></script>
	<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="./css/fontawesome-all.min.css">
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<link rel="stylesheet" type="text/css" href="./css/animate.css">
</head>
<script>
	new WOW().init();
</script>

<body ng-app="lawyerMaltsev">
	<div class="container">
		<header class="header">
			<nav class="navbar navbar-expand-lg navbar-light bg-white">
				<a href="#" class="navbar-brand text-dark">
					<img src="/templates/img/smallLogo.png" width="40" height="40" alt="logo">
				</a>

				<div class="menu-button navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
					<input type="checkbox" id="menu-checkbox">
					<div class="menu-button-line-1">
					</div>
					<div class="menu-button-line-2">
					</div>
					<div class="menu-button-line-3">
					</div>
				</div>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a href="#" class="nav-link font-weight-normal text-uppercase a-navbar-link text-center">
								Главная
							</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link font-weight-normal text-uppercase a-navbar-link text-center">
								Услуги
							</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link font-weight-normal text-uppercase a-navbar-link text-center">
								О юристе
							</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link font-weight-normal text-uppercase a-navbar-link text-center">
								Контакты
							</a>
						</li>
					</ul>
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a href="tel:+7911901-49-18" class="nav-link font-weight-normal text-md-center text-center">
								+7 (911) 901-49-18
							</a>
						</li>
						<li class="nav-item">
							<a href="mailto:spb.adv@mail.ru" class="nav-link font-weight-normal text-md-center text-center">
								spb.adv@mail.ru
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	</div>
		<div ng-view>
			<!-----------CONTENT-------------->
		</div>
	<footer>
		<!--BIG DEVICES-->
		<div class="row d-none d-sm-none d-md-none d-lg-flex d-xl-flex w-100">
			<div class="col-3 mt-3 mb-3 align-self-end">
				<p class="ml-5 text-white small font-weight-light">© Юрист Евгений Мальцев, 2018 <br> Все права защищены <br>
				<a href="#" class="a-white-link text-white font-weight-light"><u>Политика конфиденциальности</u></a>
				</p>

			</div>
			<div class="col-6 mb-2 align-self-end ">
				<div class="row justify-content-center mb-3">
					<a href="#" class="text-white">
						<img src="/templates/img/smallLogo2.png" width="80" height="80" alt="logo">
					</a>				
				</div>
				<div class="row justify-content-center">
					<h1 class="text-center">
						<a href="" class="social-network-links"><i class="fab fa-vk text-white mr-3"></i></a>
						<a href="" class="social-network-links"><i class="fab fa-facebook-f text-white mr-3"></i></a>
						<a href="" class="social-network-links"><i class="fab fa-twitter text-white"></i></a>
					</h1>
				</div>
			</div>
			<div class="col-3 mt-3 mb-2">
				<table>
					<tr>
						<td class="align-top">
							<p>
								<i class="fas fa-map-marker-alt text-left mr-2 text-white"></i>
							</p>
						</td>
						<td>
							<p class="text-white font-weight-light text-justify small">г. Санкт-Петербург, ул. Гагаринская 6-А, 3 этаж, Международная коллегия адвокатов «Санкт-Петербург» ст.м. Чернышевская 
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								<i class="fas fa-phone text-left mr-3 text-white align-top"></i>
							</p>
						</td>
						<td>
							<p>								
								<a href="tel:+7911901-49-18" class="a-footer-link text-white font-weight-light small align-top">
									+7 (911) 901-49-18
								</a>
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								<i class="align-top fas fa-envelope text-left mr-3 text-white"></i>
							</p>
						</td>
						<td>
							<p>								
								<a href="mailto:spb.adv@mail.ru" class="a-footer-link text-white font-weight-light small align-top m-auto">
									spb.adv@mail.ru
								</a>
							</p>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</footer>
</body>

</html>