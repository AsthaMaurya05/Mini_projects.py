import os
import cv2

ip = "images"
os.mkdir("output", exist_ok=True )
op = "output"
for i in os.listdir(ip):
    img = cv2.imread(os.path.join(ip, i))
    gry = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    cv2.imwrite(os.path.join(op, i), gry)
    