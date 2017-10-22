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
    var keep;
    environment.terrainQuadrants.forEach(function(q){
        add = false;
        var iOfQ = environment.terrainQuadrants.indexOf(q); // set var to index of Quadrant
        var iOfObj = environment.terrainQuadrants.indexOf(obj.quadrant);//set var to index of obj.quadrant in terrain quadrants
        if(iOfQ-1 == iOfObj||iOfQ+1 == iOfObj ||iOfQ-4 == iOfObj ||iOfQ+4 == iOfObj){
            add = true;
        }
        if(add){
            options.push(iOfQ);}
    });
    //narrow down option list based on food, shelter, others
    options.forEach(function(option){
        keep = false;
        //3) shelter
        if(environment.terrainQuadrants[options].__class__ == obj.home){
            keep = true;
        }else{
            options.remove(environment.terrainQuadrants.indexOf(environment.terrainQuadrants[options]));
        }
        environment.objectsInQuadrant[option].forEach(function(o){
            //3) Food
            if(o.class=='prey'){
                keep = true;
            }
            //2) others
            if(o.__class__==obj.__class__&&keep!=true){
                keep = true;
            }
            if(!keep){
                options.remove(environment.terrainQuadrants.indexOf(environment.terrainQuadrants[options]));
            }
        });
        //make random choice based on remaining options
        var choice = Math.random()*options;
        choice = options[choice];
        var coords = quadCoordinates(environment.terrainQuadrants[choice]);
        move(obj,coords);
    });
    console.log(options);
}
function quadCoordinates(quadrant){
    var x = (quadrant.x - 30) + (60*Math.random());
    var z = (quadrant.z - 30) + (60*Math.random());
    var y;
    quadrant.geometry.vertices.forEach(function(v){
        if(v.x-x<.01&&v.z-z<.01){
              y = v.y;
        }
    });
    return [x,y,z];
}
function move(obj,coords){
    obj.x = coords[0];
    obj.y = coords[1];
    obj.z = coords[2];
    obj.object.position.x = obj.x;
    obj.object.position.y = obj.y;
    obj.object.position.z = obj.z;
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
    this.home = new Plain();
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
    this.home = new Plain();
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
    this.home = new Mountain();
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
    this.home = new Forest();
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
    this.home = new Mountain();
    this.path = '/Blender .js files/wolf.js';
}
