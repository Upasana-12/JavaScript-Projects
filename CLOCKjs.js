var clockDiv=document.getElementById("clock");
var day=document.getElementById("day");
var date=document.getElementById("date");
var month=[];
var weekday=[];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
// function to display date ,time and day of the week
	function displayTime()
	{
		var currentTime= new Date();
		var d=weekday[currentTime.getDay()];
		day.innerText=d;
		
		var dt=currentTime.getDate();
		var mon=month[currentTime.getMonth()];
		var year=currentTime.getFullYear();
		console.log(year);
		date.innerText=mon+" "+dt+" "+year;
		
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridiem="AM";
		if(hours>12)
		{
			hours-=12;
			meridiem="PM";
		}
		if(hours===12)
		{
			hours=12;
		}
		if(seconds<10)
		{
			seconds="0"+seconds;
		}
		//var clockDiv=document.getElementById("clock");
		day.innerHTML=d;
		clockDiv.innerText=hours+" : "+minutes+" : "+seconds+" "+meridiem;
	}
	displayTime();
setInterval(displayTime, 1000);