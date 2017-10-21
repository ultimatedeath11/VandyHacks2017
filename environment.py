## Environment Class:
##     Requires:
##          Method update()
##          Method animate()
##          array of objects within environment
##
class Environment():
    def __init__(self):
        print("Environment Init Function: {")
        ##initialize environmental variables:
        self.objects = []
        self.objects.append({})
        print("}")
    def update(self):
        ##print("Update Environment...")
        self.animate()
    def animate(self):
        for obj in self.objects:
            print("Animate: "+str(obj))
