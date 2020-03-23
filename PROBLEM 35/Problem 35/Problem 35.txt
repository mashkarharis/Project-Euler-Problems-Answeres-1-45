#Circular primes
#Problem 35

#The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

#There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

#How many circular primes are there below one million?

import math


def isprime(x):
    if x==2 :
            return True
    elif x<=1 or x%2==0:
        return False
    
    else:
         for t in range(2,int((math.sqrt(x))+1)):
             if x%t==0:
                 return False
         return True
################################################################
cir=0
for tt in range(1,1000000):
    if isprime(tt):
        
        k=[]
        for x in str(tt):
            k.insert(-1,x)
        t=0
        n=0
        while t!=len(k):
            if isprime(int(''.join(k))):
                n+=1
                
            a=k[-1]
            del(k[-1])
            k.insert(0,a)
            t+=1
        if n==len(k):
            cir+=1
            print tt
        
        
            


################################################################
print "ANSWERE IS : ",cir
            

        
        
    
