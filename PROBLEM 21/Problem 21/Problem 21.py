#Amicable numbers
#Problem 21 
#Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
#If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

#For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

#Evaluate the sum of all the amicable numbers under 10000.

total=0

for x in range(1,10000):
    sum1=0
    for num in range(1,(x/2)+2):
        if x%num==0:
            sum1+=num
    
    
    esum=0
    for num2 in range(1,(sum1/2)+2):
        if sum1%num2==0:
            esum+=num2
    if esum==x and(sum1!=x) :
            print x,"-----",sum1
            total+=x
print "ANSWERE IS :",total

