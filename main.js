
function refreshData()
{
    const seconds_until_repeat = 1;
 	var d = new Date()
 	var h = d.getHours();
 	var m = d.getMinutes();
 	var s = d.getSeconds();

 	if (h<=9) {h = '0'+h};
 	if (m<=9) {m = '0'+m};
	if (s<=9) {s = '0'+s};

 	var	color = '#'+h+m+s;
	document.getElementById("background").style["background-color"] = color;
	document.getElementById("clock").textContent = color;

    setTimeout(refreshData, seconds_until_repeat*1000);
}

window.onload = refreshData;
