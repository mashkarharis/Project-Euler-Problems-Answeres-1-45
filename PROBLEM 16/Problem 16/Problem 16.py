#Power digit sum
#Problem 16

#215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

#What is the sum of the digits of the number 2**1000?

x=2**1000
k=0
for i in str(x):
    k+=int(i)
print k
    
