/* Weather API Task
	Written by Joseph Distler
*/

//farenheit default
var selection = true;

//JQuery to detect input change
$(document).ready(function(){
	$("#searchBar").on('input',function(e){
		$("#warningNote").hide();
		$("#alert").html("");
		var input = $("#searchBar").val();
		//input is determined to be zip code, city, or invalid
		if(isZipCode(input)){
			if(input.length === 5){
				//make ajax call
				callAPI(input, selection);
			}
			$("#alert").html(2);
		}
		else if(isCity(input)){
			//make ajax call
			callAPI(input, selection);
		}
		else{
			debugger;
			//invalid input
			$("#warningNote").show();
			$("#alert").html("<h4>Invalid Input</h4>");
		}
    });
});

function isZipCode(input){
	var zip = Number(input);
	if(isNaN(zip) || input.length > 5){
		return false;
	}
	return true;
}

function isCity(input){
	//regex to find numbers in string
	var numbers = input.match(/\d+/g);
	if(numbers.length > 0){
		return false;
	}
	return true;
}

function callAPI(input){
	console.log("yes");
	var url = "http://api.worldweatheronline.com/free/v1/weather.ashx?q={"+input+"}&format=json&num_of_days=3&key=4925da30d1aa95a1460e52de2c833d6c18fbba28";
	$.ajax({url: url, success: function(result){
        processWeather(result);
    }});
}

function processWeather(data){
	var tempNow;
	var maxTempLater = [];
	var minTempLater = [];
	if(selection){
		
	}
	else{
		
	}
	temp.push(data.data.current_condition[0].temp_F);
	temp.push(data.data.current_condition[0].temp_C);
	temp.push(data.data.current_condition[0].weatherDesc.value);
	temp.push(data.data.current_condition[0].weatherIconUrl.value);
	conditions.push(temp);
	temp = [];
	
	temp.push(data.data.weather[i].temp_F);
	temp.push(data.data.current_condition[i].temp_C);
	temp.push(data.data.current_condition[i].weatherDesc.value);
	temp.push(data.data.current_condition[i].weatherIconUrl.value);
	conditions.push(temp);
	temp = [];
	
	temp.push(data.data.current_condition[0].temp_F);
	temp.push(data.data.current_condition[0].temp_C);
	temp.push(data.data.current_condition[0].weatherDesc.value);
	temp.push(data.data.current_condition[0].weatherIconUrl.value);
	conditions.push(temp);
	temp = [];
}