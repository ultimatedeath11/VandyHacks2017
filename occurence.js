/**
*# arrys for python using dictionary.
#assuming in desert envionrment
day = {
    'animal_moves': .50,#animals should move frequently unless there is
                        # abundance of resources
    'animals_interact': .25,#spacifically two groups of animals interacting
    'rain_for_some_of_day':.1,#function needed to increase based on if it rained yesterday
    'Sandstorm': .002,#extremely low chance of it happening and usually short duration when it does
    'humans_found_small_village': .15,# larger at first but should shrink after words
    'pack_increase': .10, # general function for each living animal tribe to grow in size
    'vegitation_growth': .20
*/


function days (fun){
    if(fun != true && fun != false && fun != null){
        var boolArray = [fun.length]
        for(var i = 0; i < fun.length; i++){
            for(var j; j < fun[i].length; j++){
                if(fun[i][j] < math.random()){
                    boolArray[i] = true;
                }
            }
        }

        for(var i = 0; i < boolArray; i ++){
            if(boolArray[0] == true){
                animal_moves();
            }
            if(boolArray[1] == true){
                animals_interact();
            }
            if(boolArray[2] == true){
                rain(true);
            }
            if (boolArray[2] == false) {
                rain(false);
            }
            if(boolArray[3] == true){
                sandstorm();
            }
            if(boolArray[4] == true){
                village();
            }
            if(boolArray[5] == true){
                familyGrowth();
            }
            if(boolArray[6] == true){
                plantGrowth();
            }

        }
        function animal_moves(){
            /*TODO should have an array of animals that are in the world and they should each be looped through, each when looped should move in a random X,Y,Z coordinates
            TODO pass or call another funciton that has the animal's x,y,z coordinates as values and move them there.

            */
            if (!isRaining){
                animals_location(x){
                    if (alive_array[x]) { //rray of alive animals that need to exist as they come into being we add them to this array
                        this.x = math.random() * 5;
                        this.y = groundlevel;
                        this.z = math.random() * 5;
                        animalPositionUpdate(this.x,this.y,this.z);

                        alive_array[x].position.set(this.x,this.y,this.z);

                    }
                }
            }




        }
        function animals_interact(){
            /*
            TODO based on the coordinates of the animals form the animal_moves function, if they come together or close enough they interacting
            TODO each animal should be listed with a Boolean of preditor
            TODO if one is preditor & one prey prey dies, if both preditor they go away from each other if both prey they stick together
            */
            if (this.animal.getPosition == animal.getPosition) {
                interact(math.random * 10);
                interact(x){
                    if (x == 6) {
                        this.animal_moves();
                    }else if (x % 2){
                        this.animal.dies();
                    }
                    else if(x % 3){
                        this.animal_moves();
                    }
                }
            }

        }
        function rain(x){
            /*
            TODO rain comparison to if it was rainning again today if it is increase probobility of rain tomorrow.
            TODO animals would not be able to do work or get food, and if it is true then movement speeed can't happen
            */
            isRaining = x;
            wasRaining = false;

            if (x) {
                run[2][1] = .30;
                wasRaining = true;
            }else {
                run[2][1] = .1;
                wasRaining = !wasRaining;
            }

        }
        function flooding(){
            /*
            TODO define a range of areas that the storm will hit and if there are any living beings there, they should become dead, unles in shelter.
            */
        }
        function village(){
            /*
            TODO define the civilazation with number of humans, male and female, chance of people getting/ having children, and keeping a count.
            TODO give people the job of surviving like with food and water.
            */
        }
        function familyGrowth(){
            /*
            TODO increase in population of any group in amimals
            */
        }
        function plantGrowth(){
            /*
            TODO slowly expand the range of the palants as long as they are so far from water and animals don't pick them dry.
            */
        }

    }
}
