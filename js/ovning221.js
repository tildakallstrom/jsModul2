const randomDiv = document.getElementById("random-div");

		setInterval(function() {
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;
			const randomX = Math.floor(Math.random() * (windowWidth - 50)); 
			const randomY = Math.floor(Math.random() * (windowHeight - 50)); 
			randomDiv.style.left = randomX + "px";
			randomDiv.style.top = randomY + "px";
		}, 1000);