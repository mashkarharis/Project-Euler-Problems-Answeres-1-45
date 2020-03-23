#Pandigital products
#Problem 32

#We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

#The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

#Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
#HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
x1=set()
set=[1,2,3,4,5,6,7,8,9]
for x in range(1,10000):
    for y in range(1,10000):
        if (len(str(x*y))+len(str(x))+len(str(y))==9):
            sett=[]
            for t in str(x):
                sett.insert(0,int(t))
            for t in str(y):
                sett.insert(0,int(t))
            for t in str(x*y):
                sett.insert(0,int(t))
            
            if (set==sorted(sett)):
                 print x,y,(x*y)
                 x1.add((x*y))
                
print "sum = ",(sum(x1))                
                
            
