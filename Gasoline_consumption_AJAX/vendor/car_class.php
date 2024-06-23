<?
	class car
	{
		protected $conn;
		function __construct()
		{
			$this->conn = new PDO("mysql:host=localhost; dbname=lab4", "root", "root");
		}

		function DB_view_car()
		{
			$result = $this->conn->query("SELECT Вид_транспорта FROM transport");
			foreach ($result as $value) {
				echo $value[0].', ';
			}
		}

		function DB_model_car($view)
		{
			$result = $this->conn->query("SELECT Марка_автомобиля FROM transport WHERE Вид_транспорта = '$view'");
			foreach ($result as $value) {
				echo $value[0].', ';
			}
		}

		function formula($model, $distance)
		{
			if (is_numeric($distance) && $distance>=0) {
				$result = $this->conn->query("SELECT Расход_бензина_на_100км FROM transport WHERE Марка_автомобиля = '$model'");
				foreach ($result as $value) {
					$Gasoline_consumption = $value[0] * $distance / 100;
				}
				echo $Gasoline_consumption;
			}
			else{
				echo "Ошибка: Проверьте данные!";
			}
		}

		function _destruct()
		{
			$this->conn->close();
		}
	}
?>