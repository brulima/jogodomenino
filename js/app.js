var todasPerguntas = ["Q2l0ZSAzIGJsYSBibGEgYmxh", "Q2l0ZSAzIHRlZWVlZWVlc3Rl", "Q2l0ZSAzIGJsYWFh", "Q2l0ZSAzIGpvb2hubnkgZ2F5", "Q2l0ZSAzIGpvb2hubnkgdmlhZGEx", "Q2l0ZSAzIEpvb29vb29obm55IGhvbW9zZXh1YWw=", "Q2l0ZSAzIEpvb29vb29obm55IHRlbSB0ZW5kZW5jaWE="], 
	perguntas = todasPerguntas, 
	sortear = function () {
		var ret = atob(perguntas.splice(Math.random() * perguntas.length, 1));
		document.getElementById("pergunta").innerHTML = ret;
	}, 
	timer = function() {
		var time = document.getElementById('timer-img'),
			play = document.getElementById('vai'), 
			newp = document.getElementById('perguntar');
			play_inactive = document.getElementById('indo'), 
			newp_inactive = document.getElementById('perguntou');
		play.style.display = "none";
		newp.style.display = "none";
		play_inactive.style.display = "block";
		newp_inactive.style.display = "block";
		time.className = "animated";
		setTimeout(function(){
			play.style.display = "block";
			newp.style.display = "block";
			play_inactive.style.display = "none";
			newp_inactive.style.display = "none";
			time.className = "";
			addEvent();
		}, 10000);
	}, 
	addEvent =  function () {
		document.getElementById('vai').addEventListener('mousedown', timer);
		document.getElementById('perguntar').addEventListener('mousedown', sortear);
	};
sortear(perguntas);
addEvent();

