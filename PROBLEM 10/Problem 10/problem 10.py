#Summation of primes
#Problem 10
#The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
#Find the sum of all the primes below two million.
import time
import math
s=time.time()
z=2
for x in range(3,2000000,2):
    k=0
    for i in range(3,((int(math.sqrt(x)))+1)):
        if x%i==0:
            k=2
            continue
    if k==0:
        z+=x
        
print z
print (time.time()-s)
	
