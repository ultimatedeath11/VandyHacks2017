#very basic main python program that will be the core of the program, will run all other python files and return the output to the website. 
import time
import environment
class Main():
    def __init__(self,runtime):
        self.running = True
        self.time = runtime
        self.current_time = 0
        self.environment = environment.Environment()
    def mainloop(self):
        while self.running:
            if self.current_time == self.time:
                self.running = False
            self.environment.update()
            print("Time: "+str(self.current_time))
            self.current_time +=1
            time.sleep(1)
main = Main(int(input("Enter # of days: "))-1) #ending number
main.mainloop()
