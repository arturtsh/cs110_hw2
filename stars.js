const space = function (a) {
		if (a === 0) {
			return "";
		}
		return " " + space (a-1); 
};
const stars = function (u) {
	if (u === 1){
		return "*" ;
	}
		return "*" + stars (u-1);
};

const regulator = function (g, starnum, spacenum) {
		if (g === 0) {
			return;
		}
		console.log(space(spacenum) + stars (starnum));
		regulator ((g-1), (starnum + 2), (spacenum-1));
};
const triangleStars = function (n) {
			regulator (n,1,n-1);
}
triangleStars(5);

