/*
Create classes: Environment, Event and Event's Children, each blender object in the lib file

*/
function Environment(){
    //introduce environmental variables here:

    this.ground; //base plane for world
    this.objects = []; // array to hold objects for reference
    this.animateObjects = [] // array for all moving objects
}
//Generic Event Function:
function Event(){
    this.environmentalVariables = [];
    this.environmentalChanges = [];
}
//Generic Object Classes:
function Mountain(x,y,z){
    this.object = new THREE.Mesh();
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 15;
    this.path = '..//Blender .js files/Mountain.js';
}
function Lake(x,y,z){
    this.object = new THREE.Mesh();
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.path = '..//Blender .js files/Lake.js';
}
function Trees(x,y,z){
    this.object = new THREE.Mesh();
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.trees = [];
}
function Tree(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.path = '..//Blender .js files/finished_tree.js';
}