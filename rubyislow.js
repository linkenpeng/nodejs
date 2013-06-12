// 计算回文

// 强制类型转换： parseInt(), parseFloat(),String(), Number(), Boolean(), o.toString()

// 数学函数： Math.ceil(), Math.floor(),Math.round(), Math.cos(), Math.sin(), Math.tan(), Math.acos(), Math.asin(), Math.atan(), Math.random(), Math.min(), Math.max(),Math.pow(base, expont);


function isPlalindrome(s) {
	for (var i = 0; i <= s.length / 2; i++) {
		if (s.charAt(i) != s.charAt(s.length - 1 - i)) {
			return false;
		}
	}
	return true;
}

function method(min, max) {
	min = Math.sqrt(min);
	max = Math.sqrt(max);
	var y = 0;
	for (var x = Math.ceil(min); x < max; x++) {
		if (x % 10 > 0) {
			y = x * x;
			if (y % 10 > 0) {
				//console.log(typeof(x));
				var xStr = x.toString();
				//console.log(xStr.constructor);
				if (isPlalindrome(xStr)) {
					var yStr = String(y);
					if (isPlalindrome(yStr)) {
						console.log(yStr + '(' + xStr + ')');
					}
				}
			}
		}
	}
}

var t1 = new Date().getTime();
method(1, Math.pow(10,14));
var t2 = new Date().getTime();
console.log(t2 - t1);


// 新算法
function reverse_number(n) {
	var a = 0;
	while (n > 0) {
		a = a * 10 + n % 10;
	}
	return a;
}

function check(n) {
	var r = n;
	n /= 10;
	while (n > 0) {
		r *= 10;
		r += n % 10;
		n /= 10;
	}
	
	r *= r;
	
	if (r == reverse_number(r)) {
		console.log(r);
	}
}


var t1 = new Date().getTime();
for (var i = 1; i < 10000; i++) {
	check(i);
}
var t2 = new Date().getTime();
console.log(t2 - t1);