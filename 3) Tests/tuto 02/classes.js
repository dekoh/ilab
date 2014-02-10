function Far() {
	farTex = PIXI.Texture.fromImage("ressources/bg-far.png");
	PIXI.TilingSprite.call(this, farTex, 512, 256);
	
	this.position.x = 0;
	this.position.y = 0;
	this.tilePosition.x = 0;
	this.tilePosition.y = 0;
	
	this.viewportX = 0;
	this.setViewportX = function(newViewportX) {
		var travelled = newViewportX - this.viewportX;
		this.viewportX = newViewportX;
		this.tilePosition.x -= (travelled * Far.DELTA_X);
	}
}

Far.constructor = Far;
Far.prototype = Object.create(PIXI.TilingSprite.prototype);
Far.DELTA_X = 0.128;



function Mid() {
	midTex = PIXI.Texture.fromImage("ressources/bg-mid.png");
	PIXI.TilingSprite.call(this, midTex, 512, 256);
	
	this.position.x = 0;
	this.position.y = 128;
	this.tilePosition.x = 0;
	this.tilePosition.y = 0;
	
	this.update = function() {
		this.tilePosition.x -= 0.64;
	}
	
	this.viewportX = 0;
	this.setViewportX = function(newViewportX) {
		var travelled = newViewportX - this.viewportX;
		this.viewportX = newViewportX;
		this.tilePosition.x -= (travelled * Mid.DELTA_X);
	}
}

Mid.constructor = Mid;
Mid.prototype = Object.create(PIXI.TilingSprite.prototype);
Mid.DELTA_X = 0.64;



function Scroller(stage) {
	this.far = new Far();
	stage.addChild(this.far);
	
	this.mid = new Mid();
	stage.addChild(this.mid);
	
	this.viewportX = 0;
	
	this.setViewportX = function(viewportX) {
		this.far.setViewportX(viewportX);
		this.mid.setViewportX(viewportX);	
		this.viewportX = viewportX;
	}
	
	this.getViewportX = function() {
		return this.viewportX;
	}
	
	this.moveViewportXBy = function(distance) {
		this.setViewportX( this.viewportX + distance );
	}
}