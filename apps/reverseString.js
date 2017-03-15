module.exports={
	reverseString: function(str) {
		var lengthOfString = str.length;
		var reverse = "";
		if (lengthOfString === 0) {
			return null; 
		}
		for (i = lengthOfString-1; i >= 0; i--) {
			reverse += str[i];
		}
		if (str === reverse) {
			return true;
		}
		else {
			return reverse;
		}
	}
}