
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * Boot.
 */
function Boot() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Boot_proto = Object.create(Phaser.State.prototype);
Boot.prototype = Boot_proto;
Boot.prototype.constructor = Boot;

Boot.prototype.init = function () {
	
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
};

Boot.prototype.preload = function () {
	
	
	this.add.sprite(-86.0, -258.0, 'ball2');
	
	
	
};

Boot.prototype.create = function () {
	
};

/* --- end generated code --- */
// -- user code here --
