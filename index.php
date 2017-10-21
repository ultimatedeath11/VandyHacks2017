<html>
    <title>Environment</title>
    <head>
    <style>
    body{
        margin:0;
        overflow:hidden;
    }
    </style>
    <script src="resources/three.js"></script>
    <script src="main.js"></script>
</head><body>
    
    <?php
    //PHP for length of time to exist and be passed into the code.
    ?>

    <div id="output"></div>
    <script>
    //---------------------Scene---------------------------//
    var scene = new THREE.Scene();
    //---------------------Camera--------------------------//
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0,100,100);
    camera.lookAt(scene.position);
    scene.add(camera);
    //--------------------Renderer-------------------------//
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color('skyblue'));
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("output").appendChild(renderer.domElement);
    //---------------------Lights--------------------------//
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(camera.position.x,camera.position.y,camera.position.z);
    scene.add(spotLight);
    //---------------------Model---------------------------//
    var environment = new Environment();
    var groundGeometry = new THREE.PlaneGeometry(100,100,100,100);
    var verticeRaised = false;
    groundGeometry.vertices.forEach(function(v) {
        //create elevations function
        if(Math.abs(v.x)<90){
            probability = 1/100;
            if(verticeRaised){
                probability = 1/50;
            }else{}
            if(Math.random()<=(probability)){
                verticeRaised = true;
                v.z*=1.6;
            }else{
                verticeRaised = false;
            }
        }
    }, this);
    var ground = new THREE.Mesh(groundGeometry,new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color:'green',side:THREE.DoubleSide}));
    ground.rotateX(Math.PI/2);
    ground.position.set(0,0,0);
    environment.ground = ground;
    scene.add(ground);
    var step = 0;
    renderScene();

    function renderScene() {
        camera.position.x = 100*Math.sin(step);
        camera.position.z = 100*Math.cos(step);
        spotLight.position.x = camera.position.x;
        spotLight.position.y = camera.position.y;
        camera.lookAt(scene.position);
        step+=.02;
        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    }

    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onResize, false);
    </script>
    </body>
</html>