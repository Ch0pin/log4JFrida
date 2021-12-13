import sys 
import frida
import time

if len(sys.argv) != 3:
    print("Usage: {} package_name payload".format(sys.argv[0]))
    exit()
try:
    fileOut = open("agent_j.js","w")
    fileIn = open("log4jFrida.js","r")
except:
    exit()

for line in fileIn:
    str = line.replace('payload', sys.argv[2])
    if str is None:
        str = line
    fileOut.write(str)

fileIn.close()
fileOut.close()

device = frida.get_usb_device()
pid = device.spawn(sys.argv[1])
device.resume(pid)
time.sleep(1)
session = device.attach(pid)
script = session.create_script(open("agent_j.js").read())
script.load()
sys.stdin.read()
