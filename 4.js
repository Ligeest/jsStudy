var a = true, b = 3, c;
c = b<4 && b>2;
a = !!a;
//alert(c);

{
	var d ,f;
	d = 1;
	f = '1';
	if(d && f === 1){
		//alert('zhen');
	}else{
		//alert('jia');
	}
}

	var age;
	age = prompt("请输入年龄");
	age = Number(age);
	if (age)

{

	if (age < 0 || age > 100){
		alert('违法');}
	else if(age > 0 && age < 18){
		alert("未成年");}
	else if(age > 18 && age < 70){
		alert("大人");
	}
	else {
		alert("老年人");
	}
}