<?php
	require_once('car_class.php');
	if (isset($_GET['view'])) {
		if ($_GET['view'] == '') {
			echo '';
		}
		else{
			$model_object = new car();
			$models = $model_object->DB_model_car($_GET['view']);
			echo $models;
		}
	}
	else if (isset($_GET['model']) && isset($_GET['distance'])) {
		if ($_GET['model'] == '') {
			echo '';
		}
		else{
			$formula_object = new car();
			$formula_answer = $formula_object->formula($_GET['model'], $_GET['distance']);
			echo $formula_answer;
		}
	}
	else{
		$view_object = new car();
		$views = $view_object->DB_view_car(); 
		echo $views;
	}
?>
