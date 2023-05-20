function setup() {
	createCanvas(768, 768);
	fill(228)
	rect(225,255,90,90)
	background(0)
}
	let x =	Math.random() * 399
	let y = Math.random() * 399	
	let target = Math.floor(Math.random() * 3)


function draw() {
	frameRate(120)
	point(0,10)
	point(768,10)
	point(384,758)
	stroke('white')
	strokeWeight(2);
	if(target == 1){
		x = (x+0)/2
		y = (y+10)/2
		point(x,y)
	}
	else if(target == 2){
		x = (x+768)/2
		y = (y+10)/2
		point(x,y)
	}
	else if(target == 0){
		x = (x+384)/2
		y = (y+758)/2
		point(x,y)
	}
	target = Math.floor(random(0,3))		
}



function mousePressed() {
  redraw();
}


