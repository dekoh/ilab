function Main() {
	this.stage = new PIXI.Stage(0x66FF99);
	this.renderer = new PIXI.autoDetectRenderer(
		512,
		384,
		document.getElementById("game-canvas")
	);
	
	this.loadSpriteSheet();
	
	this.update = function() {
		this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
		this.renderer.render(this.stage);
		requestAnimFrame(this.update.bind(this));
	}

	
	

	
	
}

Main.SCROLL_SPEED = 1;

Main.prototype.loadSpriteSheet = function() {
	var assetsToLoad = ["ressources/wall.json", "ressources/bg-mid.png", "ressources/bg-far.png", "ressources/wall.png"];
	loader = new PIXI.AssetLoader(assetsToLoad);
	loader.onComplete = this.spriteSheetLoaded.bind(this);
	loader.load();
}; 

Main.prototype.spriteSheetLoaded = function() {
	this.scroller = new Scroller(this.stage);
	requestAnimFrame(this.update.bind(this));
};