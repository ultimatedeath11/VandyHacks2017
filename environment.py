## Environment Class:
##     Requires:
##          Method update()
##          Method animate()
##          array of objects within environment
##
class Environment():
    def __init__(self):
        ##initialize environmental variables:
        self.objects = []
        self.ground = Plane(0,0,0,100,100)
        self.objects.append(self.ground)
    def update(self):
        ##print("Update Environment...")
        self.animate()
    def animate(self):
        for obj in self.objects:
            print("Animate: "+str(obj))
            print(obj.draw())
class Plane():
    def __init__(self,x,y,z,length,width):
        self.x = x
        self.y = y
        self.z = z
        self.length = length
        self.width = width
    def draw(self):
        return [self.x,self.y,self.z],self.length,self.width
