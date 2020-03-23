#Digit factorials
#Problem 34

#145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

#Find the sum of all numbers which are equal to the sum of the factorial of their digits.

#Note: as 1! = 1 and 2! = 2 are not sums they are not included.


def factorial(x):
    k=1
    for t in range(1,x+1):
        k*=t
    return k

for p in range(3,10000000):
    tot=0
    for tt in str(p):
        tot+=factorial(int(tt))
    if tot==p:
        print p
        
