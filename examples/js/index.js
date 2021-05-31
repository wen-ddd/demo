"use strict";
var windowFar = window.innerWidth / 1920;
var canvas = document.getElementById('ParticleCanvas'),
	ctx = canvas.getContext('2d'),
	canvasW = 1920,
	canvasH = 1080,
	hue = 217,
	stars = [],
	count = 0,
	maxStars = 1400;
canvas.width = canvasW;
canvas.height = canvasH;
var imgs = new Image();
imgs.src = "img/background.png";
imgs.width = canvasW;
imgs.height = canvasH;
imgs.backgroundSize = '100% 100%';

var canvas2 = document.createElement('canvas'),
	ctx2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
	gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, '#fff');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');

ctx2.fillStyle = gradient2;

ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

function random(min, max) {
	if (arguments.length < 2) {
		max = min;
		min = 0;
	}

	if (min > max) {
		var hold = max;
		max = min;
		min = hold;
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Star = function() {

	this.orbitRadius = random(canvasW - 50);
	this.radius = random(100, this.orbitRadius) / 10;
	this.orbitX = canvasW / 2;
	this.orbitY = canvasH / 2;
	this.timePassed = random(0, maxStars);
	this.speed = random(this.orbitRadius) / 5000000;
	this.alpha = random(2, 10) / 30;

	count++;
	stars[count] = this;
}

Star.prototype.draw = function() {
	var x = Math.sin(this.timePassed + 1) * this.orbitRadius + this.orbitX,
		y = Math.cos(this.timePassed) * this.orbitRadius / 2 + this.orbitY,
		twinkle = random(10);

	if (twinkle === 1 && this.alpha > 0) {
		this.alpha -= 0.01;
	} else if (twinkle === 2 && this.alpha < 1) {
		this.alpha += 0.01;
	}

	ctx.globalAlpha = this.alpha;
	ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
	this.timePassed += this.speed;
}

for (var i = 0; i < maxStars; i++) {
	new Star();
}

function animation() {

	ctx.globalCompositeOperation = 'source-over';
	ctx.globalAlpha = 0.8;
	//ctx.fillStyle = 'rgba(0,0,0,0)';
	//ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
	ctx.fillRect(0, 0, canvasW, canvasH)

	var pat = ctx.createPattern(imgs, "no-repeat");
	ctx.fillStyle = pat;

	ctx.globalCompositeOperation = 'lighter';
	for (var i = 1, l = stars.length; i < l; i++) {
		stars[i].draw();
	};

	window.requestAnimationFrame(animation);
}

animation();

var counttime = 0;
var nowtime = parseInt("1594817522");
var nowday = "2020年7月15日 星期三";

function setTimeNow() {
	//nowtime += 1;
	//counttime += 1;
	//$('#timeSpan').html(stampToTime(nowtime).split(" ")[1]);

	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hour = date.getHours();
	var minu = date.getMinutes();
	var sec = date.getSeconds();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	if (minu >= 0 && minu <= 9) {
		minu = "0" + minu;
	}
	if (sec >= 0 && sec <= 9) {
		sec = "0" + sec;
	}
	if (hour >= 0 && hour <= 9) {
		hour = "0" + hour;
	}
	$('#timeSpan').html(hour + seperator2 + minu + ':' + sec);
	$('#dateSpan').html(date.getFullYear() + "年" + month + "月" + strDate + '日');
}

$(document).ready(function() {
	$(".topbtn div").click(function() {
		var nav = this.id;
		$('.topbtn div').removeClass('selbtn');
		$(this).addClass("selbtn");
		$('.modelDiv').removeClass('modelDivsel');
		$('.' + nav).addClass('modelDivsel');
	});

});
