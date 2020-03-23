#Pandigital prime
#Problem 41 
#We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

#What is the largest n-digit pandigital prime that exists?

import math
def isprime(x):
    if (x<=1):
        return False
    elif (x==2):
        return True
    else:
        for t in range(2,int(math.sqrt(x)+1)):
            if (x%t==0):
                return False
        return True

seven=7*6*5*4*3*2*1
s=set()
t=['1','2','3','4','5','6','7']
print seven
import random
while (len(s)!=seven):
    random.shuffle(t)
    l=len(s)
    s.add(''.join(t))
   
        
print "OK"        
list=[]
for i in s:
    list.append(int(i))
print "OK" 
list1=[]
for ii in list:
    if isprime(ii):
        list1.append(ii)
print "OK" 
print max(list1)
    
        

    

