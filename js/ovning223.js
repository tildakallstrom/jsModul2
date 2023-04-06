const movingDiv = document.getElementById("moving-div");

		let position = 0; 
		let direction = 1; 

		const intervalId = setInterval(() => {
			position += direction;
			movingDiv.style.left = position + "px";

			if (position >= 200) {
				direction = -1;
			}

			if (position <= 0) {
				direction = 1;
			}
		}, 10); 

		movingDiv.addEventListener("mouseover", () => {
			position = 0;
			direction = 1;
		});

		window.addEventListener("beforeunload", () => {
			clearInterval(intervalId);
		});