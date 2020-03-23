# Truncatable primes
# Problem 37

# The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97,
# and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

# Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

# NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.


import math
def isprime(x):
    x=int(x)
    if x==2:
        return True
    elif x<=1 or x%2==0:
        return False
    else:
        k=0
        for t in range(2,int(math.sqrt(x)+1)):
            if x%t==0:
                k+=1
        if k==0:
            return True
        else:
            return False

def sidechange((x)):    
    k=[]
    for t in (x):
        k.insert(0,t)
    return ''.join(k)

def dropfirstnum(x):
   k=[]
   for t in (x):
        k.append(t)
   del(k[0])
   return ''.join(k)
def A(x):
    kk=str(x)
    for l in range(1,len(str(x))):
        if (isprime(dropfirstnum(kk))==False):
            return False
            break
        kk=dropfirstnum(kk)
    return True
def B(x):
    kk=(sidechange(dropfirstnum(sidechange(str(x)))))
    for l in range(1,len(str(x))):
        if (isprime(kk)==False):
            return False
        kk=(sidechange(dropfirstnum(sidechange(kk))))
    return True
        
      
sum=0        
n=0
t=10
while n!=11:
    if (A(t) and B(t) and isprime(str(t)) ):
        print t ,"==============================="
        n+=1
        sum+=t
    
   
    t+=1
print "ANSWERE IS : ",sum
    
    
    

    




