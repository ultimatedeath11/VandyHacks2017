/*
Create classes: Environment, Event and Event's Children, each blender object in the lib file

*/
var terrainScale = 3;
function Environment(){
    //introduce environmental variables here:
    this.ground; //base plane for world
    this.objects = []; // array to hold objects for reference
    this.animateObjects = []; // array for all moving objects
    this.terrainQuadrants = []; //array of quadrants
    this.objectsInQuadrant = [];
    for(x=0;x<16;x++){
        this.objectsInQuadrant.push([]);
    } // record objects position by quadrant
    //update function runs world
    this.update = function(){
        this.animateObjects.forEach(function(obj) {
            obj.animate();
        }, this);
    }
}
// ---Genaric Animate Methods---
function Prey(obj){
    /*
        Determine movement based on:
        1) Food 
        2) Safety/avoid predators
        3) Proximity of others of the same species
    */
}
function Predators(obj){
    /*
        Determine movement based on:
        1) Prey/Food 
        2) Shelter
        3) Proximity of others of the same species
    */
    //determine movement options:
    var options = [];
    var add;
    environment.terrainQuadrants.forEach(function(q){
        add = false;
        var iOfQ = environment.terrainQuadrants.indexOf(q);
        var iOfObj = environment.terrainQuadrants.indexOf(obj.quadrant);
        if(iOfQ-1 == iOfObj||iOfQ+1 == iOfObj ||iOfQ-4 == iOfObj ||iOfQ+4 == iOfObj){
            add = true;
        }
    });
    //narrow down option list based on food, shelter, others
    options.forEach(function(option){
        
    });
    console.log(options);
}
// ---Generic Object Classes---
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
//---Animate Objects---
function Cow(x,y,z){
    this.animate = function(){Prey(this)};
    this.class = "prey";
    this.quadrant;
    this.object = new THREE.Mesh();
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.path = '/Blender .js files/cow.js';
}
function Horse(x,y,z){
    this.animate = function(){Prey(this)};
    this.class = "prey";
    this.quadrant;
    this.object = new THREE.Mesh();
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.path = '/Blender .js files/horse.js';
}
function Goat(x,y,z){
    this.animate = function(){Prey(this)};
    this.class = "prey";
    this.quadrant;
    this.object = new THREE.Mesh();
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.path = '/Blender .js files/goat.js';
}
function Bear(x,y,z){
    this.animate = function(){Predators(this)};
    this.class = "prey";
    this.quadrant;
    this.object = new THREE.Mesh();
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.path = '/Blender .js files/bear.js';
}
function Wolf(x,y,z){
    this.animate = function(){Predators(this)};
    this.class = "prey";
    this.quadrant;
    this.object = new THREE.Mesh();
    this.x = x;
    this.y = y;
    this.z = z;
    this.scale = 10;
    this.path = '/Blender .js files/wolf.js';
}