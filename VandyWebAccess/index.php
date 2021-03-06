<!doctype html>
<html>
<head>
<script src = "../resources/three.js"> </script>
<script src="../main.js">
</script>
<title>Render.php</title>
</head>
<body>
	Thank you!
	<?php
	$var1 = "[number]";
	$var2 = "[length]";
	 ?>
	<script>
		var usersInputNumber;
		var usersInputSize;

			usersInputNumber = "<?php echo $var1 ?>";
			usersInputSize = "<?php echo $var2 ?>";

		alert(usersInputSize);
		alert(usersInputNumber);

		//---------------------Scene---------------------------//
		var scene = new THREE.Scene();
		//---------------------Camera--------------------------//
		var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.set(0,250,250);
		camera.lookAt(scene.position);
		scene.add(camera);
		//--------------------Renderer-------------------------//
		var renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(new THREE.Color('skyblue'));
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.getElementById("output").appendChild(renderer.domElement);
		//---------------------Lights--------------------------//
		var spotLight = new THREE.SpotLight(0xffffff);
		spotLight.position.set(camera.position.x,300,camera.position.z);
		scene.add(spotLight);
		//---------------------Model---------------------------//
		var setup = true;
		var objIndex = scene.children.length;
		var numObjects = 0;
		//---JSON Loader---//
		var loader = new THREE.JSONLoader();
		var thisMesh;
		function onModelLoad(geom,mat){
			thisMesh = new THREE.Mesh(geom,mat[0]);
			scene.add(thisMesh);
			numObjects++; // count for line 90
		}
		//---Environment---//
		var environment = new Environment();
		/*
		var ground = new THREE.Mesh(new THREE.PlaneGeometry(250,250),new THREE.MeshLambertMaterial({shading: THREE.FlatShading, color:'green',side:THREE.DoubleSide}));
		ground.rotateX(Math.PI/2);
		ground.position.set(0,0,0);
		environment.ground = ground;
		scene.add(ground);
		*/
		//---Within Function---//
		function within(obj1,obj2){
			//takes two objects with x y coordinates and determines of obj2 is within obj1
			if(obj2.x < obj1.x-30 || obj2.x > obj1.x + 30 || obj2.z < obj1.z - 30 || obj2.z > obj1.z + 30){
				return false;
			}else{
				return true;
			}
		}
		//---Initialize Terrain By looping through [][]---//
		var this_terrain;
		var this_rand = 0;
		for(x=-90;x<=90;x+=60){
			for(z=-90;z<=90;z+=60){
				this_rand = Math.random();
				if(this_rand<.25){
					this_terrain = new Mountain(x,0,z);
				}else if(this_rand<.5){
					this_terrain = new Lake(x,0,z);
				}else if(this_rand<.75){
					this_terrain = new Forest(x,0,z);
				}else{
					this_terrain = new Plain(x,0,z);
				}
				loader.load(this_terrain.path,onModelLoad);
				environment.terrainQuadrants.push(this_terrain);
				environment.objects.push(this_terrain);
			}
		}
		//---Object Instantiations---//
		//instantiate animate objects

		var step = 0;
		renderScene();
		function init(){
			if(numObjects == environment.objects.length){
				environment.objects.forEach(function(obj) {
					obj.object = scene.children[environment.objects.indexOf(obj)+objIndex];
					//Rotate Terrain Tiles randomly:
					if(environment.terrainQuadrants.indexOf(obj) > -1){
						var rand = Math.random();
						if(rand < .25){
							obj.object.rotateY(Math.PI/2);
						}else if(rand < .50){
							obj.object.rotateY(-1*Math.PI/2);
						}else if(rand < .75){
							obj.object.rotateY(Math.PI);
						}else {
							obj.object.rotateY(Math.PI * 2);
						}
					}
					obj.object.scale.set(obj.scale,obj.scale,obj.scale);
					obj.object.position.set(obj.x,obj.y,obj.z);
				}, this);
				setup=false;
			}
		}
		function renderScene() {
			if(setup){
				init();
			}
			camera.position.x = 250 * Math.sin(step);
			camera.position.z = 250 * Math.cos(step);
			//spotLight.position.x = camera.position.x;
			//spotLight.position.y = camera.position.y;
			camera.lookAt(scene.position);
			step+=.02;
			environment.update();
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
