# -*- coding: utf-8 -*-
#Sum square difference
#Problem 6
#The sum of the squares of the first ten natural numbers is,
#1**2 + 2**2 + ... + 10**2 = 385
#The square of the sum of the first ten natural numbers is,
#(1 + 2 + ... + 10)2 = 552 = 3025
#Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
#Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

#sum of the squares of first one hundred natural numbers
z=0
for x in range(1,101):
    z+=x*x
print "sum of the squares of first one hundred natural numbers is\n",z

#The square of the sum of the first one hundred natural numbers

k=0
for y in range(1,101):
    k+=y
l=k**2
print "The square of the sum of the first one hundred natural numbers is\n",l

#difference>0 so....
if (z>l):
    print "the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is\n",(z-l)
if (l>z):
    print "the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum is\n",(l-z)


