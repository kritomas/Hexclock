var timer = -1;
var isTimer = false;

function setTimer()
{
	timer = parseInt(document.forms["form"]["value"].value);
	isTimer = true;
}
function resetTimer()
{
	isTimer = false;
}

function refreshData()
{
    const seconds_until_repeat = 1;
	var color = "#000000"

	if (isTimer)
	{
		if (timer >= 0)
		{
			color = "" + timer;
			while (color.length < 6) color = "0" + color;
			color = "#" + color;
		}
		--timer
		if (timer < 0) isTimer = false;
	}
	else
	{
	 	var d = new Date()
	 	var h = d.getHours();
	 	var m = d.getMinutes();
	 	var s = d.getSeconds();

	 	if (h<=9) h = '0'+h;
	 	if (m<=9) m = '0'+m;
		if (s<=9) s = '0'+s;

	 	color = '#'+h+m+s;
	}
	document.getElementById("background").style["background-color"] = color;
	document.getElementById("clock").textContent = color;

    setTimeout(refreshData, seconds_until_repeat*1000);
}

window.onload = refreshData;
