#very basic main python program that will be the core of the program, will run all other python files and return the output to the website. 
import time
class Main():
    def __init__(self,runtime):
        self.running = True
        self.time = runtime
        self.current_time = 0
    def mainloop(self):
        while self.running:
            if self.current_time == self.time:
                self.running = False
            print("Time: "+str(self.current_time))
            self.current_time +=1
            time.sleep(1)
class Environment():
    def __init__(self):
        print("Environment Init Function: {")
        ##initialize environmental variables:
        print("}")
new_environment = Environment()
main = Main(10)
main.mainloop()
