function createXmlHttpRequestObject(){
	var xHttp;
	xHttp = new XMLHttpRequest();
	if (!xHttp) {
		alert("Ошибка при попытке создания объекта XMLHttpRequest");
	}
	else{
		return xHttp;
	}
}
var xHttp = createXmlHttpRequestObject();



function DB_view_car_js() {
    var serverAddress = "../vendor/requestMySQL.php";
    if (xHttp) {
        try{
            xHttp.open("GET", serverAddress, true);
            xHttp.onreadystatechange = createSelectVIEW;
            xHttp.send(null);
        }
        catch(e){
            alert("Невозможно :\n"+e.toString());
        }
    }
}

function DB_model_car_js(){
	var serverAddress = "../vendor/requestMySQL.php?view="+encodeURIComponent(document.getElementById('Kind_of_transport').value);
    if (xHttp) {
        try{
            xHttp.open("GET", serverAddress, true);
            xHttp.onreadystatechange = createSelectMODEL;
            xHttp.send(null);
        }
        catch(e){
            alert("Невозможно :\n"+e.toString());
        }
    }
}

function formula_js() {
	var serverAddress = "../vendor/requestMySQL.php?model="+encodeURIComponent(document.getElementById('Сar_model').value)+"&distance="+encodeURIComponent(document.getElementById('distance').value);
    if (xHttp) {
        try{
            xHttp.open("GET", serverAddress, true);
            xHttp.onreadystatechange = formula_execution;
            xHttp.send(null);
        }
        catch(e){
            alert("Невозможно :\n"+e.toString());
        }
    }
}


function createSelectVIEW() {
    if (xHttp.readyState == 4) {
        if (xHttp.status == 200) {
        	try{
            	var response = xHttp.responseText;
            	if (response != '') {
            		var array_view = response.split(", ");
					var unique_set_view = new Set(array_view);
					var unique_array_view = Array.from(unique_set_view);
					for (var i = 0; i < unique_array_view.length-1; i++) {
						document.getElementById("Kind_of_transport").innerHTML += "<option>" + unique_array_view[i] + "</option>";
					}
            	}
            	else{
            		document.getElementById("Kind_of_transport").innerHTML = '';
            		document.getElementById("Сar_model").innerHTML = '';
            		document.getElementById("Gasoline_consumption").value = '';
            	}
            }
            catch(e){
                alert("Ошибка при обработке данных сервера:\n"+e.toString());
            }
        }
        else{
            alert(xHttp.statusText);
        }
    }
}

function createSelectMODEL() {
    if (xHttp.readyState == 4) {
        if (xHttp.status == 200) {
        	try{
            	var response = xHttp.responseText;
                var array_model = response.split(", ");
				document.getElementById("Сar_model").innerHTML = '';
				document.getElementById("Сar_model").innerHTML = "<option></option>";
				for (var i = 0; i < array_model.length-1; i++) {
					document.getElementById("Сar_model").innerHTML += "<option>" + array_model[i] + "</option>";
				}
            }
            catch(e){
                alert("Ошибка при обработке данных сервера:\n"+e.toString());
            }
        }
        else{
            alert(xHttp.statusText);
        }
    }
}

function formula_execution() {
	if (xHttp.readyState == 4) {
        if (xHttp.status == 200) {
        	try{
            	var response = xHttp.responseText;
            	if (response != '') {
            		document.getElementById("Gasoline_consumption").value = response;
            	}
            	else{
            		document.getElementById("Gasoline_consumption").value = '';
            	}
            }
            catch(e){
                alert("Ошибка при обработке данных сервера:\n"+e.toString());
            }
        }
        else{
            alert(xHttp.statusText);
        }
    }
}
