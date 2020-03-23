#QUESTION 3
#Largest prime factor
#Problem 3
#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?

#If 600851475143 is a prime factor, it is the largest prime factor of it self.Therefore we have to consider it too.so when we take range it
#should be included to considering range.Hence we write while (x<following number of 600851475143)
#1 is not the largest prime factor
#2 is not a factor
#therefore we can start like below

import time
s=time.time()
x=1
l=1
while (x<600851475144):
    z=0
    for k in range(0,x):
        if k==1:
            continue
        elif k==0:
            continue
        elif x%k!=0:
            z+=1 #for prime factors this values should (value-2).Because 1 and value is a factor of value
        else:
            continue
    if z==(x-2):
        if (600851475143%x==0):
            t=x
            l=l*t
            if l==600851475143:
                break
    x+=1        
       
print "answer is :",t #This takes a lot of time ...   Answere is 6857   
print "my computer spent only",(time.time()-s),"seconds"    
   
