<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>AJAX</title>
	<script type="text/javascript" src="../js/requestobject.js"></script>
</head>
<style>
	body{
		display: flex;
		justify-content: center;
	}
	form{
		display: flex;
		flex-flow: column;
		width: 300px;
		margin-top: 5%;
	}
</style>
<body>
	<form method="GET">
		<label for="Kind_of_transport">Вид транспорта</label>
		<select id="Kind_of_transport" onchange="DB_model_car_js()">
			<option></option>
			<script>DB_view_car_js();</script>
		</select>

		<label for="Сar_model">Марка автомобиля</label>
		<select id="Сar_model" onchange="formula_js()">
		</select>

		<label for="distance">Расстояние (км)</label>
		<input min='0' type="number" id="distance" onchange="formula_js()">

		<label>Расход бензина</label>
		<input type="text" id="Gasoline_consumption" disabled>
	</form>
</body>
</html>
