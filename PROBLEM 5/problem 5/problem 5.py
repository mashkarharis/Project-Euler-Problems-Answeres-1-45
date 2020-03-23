#Smallest multiple
#Problem 5
#2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
#What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
k=0
x=0
while k==0:
    x+=(19*17*13*11*7*5*3*2*1) #the smallest positive number that is evenly divisible by all of the numbers from 1 to 20(Q) = multiplication of prime factors
                               #in range(1,21) *P(integer)
                               #therefore the value should change with (19*17*13*11*7*5*3*2*1)
                                
    z=0               
    for y in (16,9):           # if the above mentioned P can divided by 8 and 3, the x should be able to divide by any integers in range(1,21)
                               # if the x after adding (19*17*13*11*7*5*3*2*1) should be able to divide by 16 and 9, the above P can be divided by 8 and 3
                               #hence if the x after adding (19*17*13*11*7*5*3*2*1)should be able to divide by 16 and 9,the x should be able to divide by any integers in range(1,21)
        if (x%y==0):
            z+=1
        if z==2:
            print 'the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 is',x
            k=1
