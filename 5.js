var n = 1;
while (false){
	n += 1;
	if (n===1000){
		break;
	}else{
		console.log(n);
	}

}

/* 水仙花数
var a = 0, b = 0, c = 0;
  for (var i = 100; i < 1000; i++)
  {
	a = i % 10;
	b = parseInt(((i / 10) % 10));
	c = parseInt(i / 100);
	if (i === a * a * a + b * b * b + c * c * c)
	{
	  document.write('水仙花数： ' + i + '<br/>');
	}
  }  */


for (var i = 1;i<100;i++){
	if (i%2 !== 0){
		//console.log(i);
	}
}
//球1-100偶数


for (var n = 1 ; n < 100 ;n++){
	if (n%7 === 0){
		console.log(n+"\n");
	}
}
//100以内7倍数