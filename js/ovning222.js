const randomDivs = document.querySelectorAll(".random-divs");

		function moveRandomDiv(div) {
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;
			const randomX = Math.floor(Math.random() * (windowWidth - 50)); 
			const randomY = Math.floor(Math.random() * (windowHeight - 50)); 
			div.style.left = randomX + "px";
			div.style.top = randomY + "px";
		}

		randomDivs.forEach(function(div) {
			moveRandomDiv(div);
		});

		randomDivs.forEach(function(div) {
			div.addEventListener("mouseover", function() {
				moveRandomDiv(div);
			});
		});