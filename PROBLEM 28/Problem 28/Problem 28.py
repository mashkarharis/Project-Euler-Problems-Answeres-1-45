#Number spiral diagonals
#Problem 28

#Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

# 21 22 23 24 25
# 20  7  8  9 10
# 19  6  1  2 11
# 18  5  4  3 12
# 17 16 15 14 13

#It can be verified that the sum of the numbers on the diagonals is 101.

#What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?


total=-3
ru=0
rd=0
lu=0
ld=0
k=1
p=0



for t in range(1,(((1001)+1)/2)+1):
	ru+=k*k
	lu+=k*k-2*p
	ld+=k*k-4*p
	rd+=k*k-6*p
	p+=1
	k+=2
total+=ru+rd+lu+ld	
print "TOTAL   :",total
