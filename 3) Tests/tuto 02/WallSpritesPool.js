function WallSpritesPool() {
	
	this.storeWallSection("windows", 6);

}



WallSpritesPool.prototype.shuffle = function(array) {
	var len = array.length;
	var shuffles = len * 3;
	for (var i = 0; i < shuffles; i++) {
		var wallSlice = array.pop();
		var pos = Math.floor(Math.random() * (len-1));
		array.splice(pos, 0, wallSlice);
	}
};





WallSpritesPool.prototype.storeWallSection = (name, nbr) {
	this[name] = [];
	
	this.addWallSection(name, "window_01", nbr);
	this.addWallSection(name, "window_02", nbr);	
	
	this.shuffle(this[name]);
}


WallSpritesPool.prototype.addWallSection = function(pool, frame, nbr) {
	for (var i = 0; i < nbr; i++) {
		this.windows.push( PIXI.Sprite.fromFrame(frame) );
	}
}