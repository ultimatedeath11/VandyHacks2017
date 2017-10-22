/*
Create classes: Environment, Event and Event's Children, each blender object in the lib file

*/
var terrainScale = 3.5;
function Environment(){
    //introduce environmental variables here:
    this.ground; //base plane for world
    this.objects = []; // array to hold objects for reference
    this.animateObjects = []; // array for all moving objects
    this.terrainQuadrants = [];
}
//Generic Event Function:
function Event(){
    this.environmentalVariables = [];
    this.environmentalChanges = [];
}
//Generic Object Classes:
function Mountain(x,y,z){
    this.object = new THREE.Mesh();
    this.width = 60;
    this.height = 60;
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = terrainScale;
    this.path = '/Blender .js files/Mountain.js';
}
function Lake(x,y,z){
    this.object = new THREE.Mesh();
    this.width = 60;
    this.height = 60;
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = terrainScale;
    this.path = '/Blender .js files/Lake.js';
}
function Forest(x,y,z){
    this.object = new THREE.Mesh();
    this.width = 60;
    this.height = 60;
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = terrainScale;
    this.path = '/Blender .js files/Forest.js'
}
function Plain(x,y,z){
    this.object = new THREE.Mesh();
    this.width = 60;
    this.height = 60;
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = terrainScale;
    this.path = '/Blender .js files/Plane.js';
}
function Tree(x,y,z){
    this.object = new THREE.Mesh();
    this.width = 60;
    this.height = 60;
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.path = '..//Blender .js files/finished_tree.js';
}
function Animal(x,y,z){
    this.object = new THREE.Mesh();
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.path = '..//Blender .js files/cow-mini.js'
}