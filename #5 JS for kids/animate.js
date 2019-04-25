var leftOffset = 0;
moveHeading = () => {
	$(".greenBox").offset({ left: leftOffset });
	leftOffset ++;
	if (leftOffset > 50) {
		leftOffset = 0;	
	}
		
};

setInterval(moveHeading, 30);

