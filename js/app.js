var todasPerguntas = ["Q2l0ZSAzIGJsYSBibGEgYmxh", "Q2l0ZSAzIHRlZWVlZWVlc3Rl", "Q2l0ZSAzIGJsYWFh", "Q2l0ZSAzIGpvb2hubnkgZ2F5", "Q2l0ZSAzIGpvb2hubnkgdmlhZGEx", "Q2l0ZSAzIEpvb29vb29obm55IGhvbW9zZXh1YWw=", "Q2l0ZSAzIEpvb29vb29obm55IHRlbSB0ZW5kZW5jaWE="], 
	perguntas = todasPerguntas, 
	sortear = function () {
		var ret = atob(perguntas.splice(Math.random() * perguntas.length, 1));
		document.getElementById("pergunta").innerHTML = ret;
	}, 
	timer = function() {
		var time = document.getElementById('timer'),
			play = document.getElementById('comecar'), 
			newp = document.getElementById('new');
		play.removeEventListener('mousedown', timer);
		newp.removeEventListener('mousedown', sortear);
		play.className = "comecar inactive";
		time.className = "timer animated";
		newp.className = "new inactive";
		setTimeout(function(){
			time.className = "timer";
			play.className = "comecar active";
			newp.className = "new active";
			addEvent();
		}, 10000);
	},
	addEvent = function() {
		document.getElementById('comecar').addEventListener('mousedown', timer);
		document.getElementById('new').addEventListener('mousedown', sortear);
	};
sortear(perguntas);
addEvent();

