function setup() {
	createCanvas(875, 768);
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
	point(875,10)
	point(437,758)
	stroke('white')
	strokeWeight(2);
	if(target == 1){
		x = (x+0)/2
		y = (y+10)/2
		point(x,y)
	}
	else if(target == 2){
		x = (x+875)/2
		y = (y+10)/2
		point(x,y)
	}
	else if(target == 0){
		x = (x+437)/2
		y = (y+758)/2
		point(x,y)
	}
	target = Math.floor(random(0,3))		
}



function mousePressed() {
  redraw();
}


