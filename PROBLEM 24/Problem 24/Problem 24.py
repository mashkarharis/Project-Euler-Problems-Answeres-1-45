# Lexicographic permutations
# Problem 24 
# A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
# If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

# 012   021   102   120   201   210

# What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
import random
x=['0','1','2','3','4','5','6','7','8','9']
y=set()
while len(y)!=10*9*8*7*6*5*4*3*2*1:
    random.shuffle(x)
    y.add(int(''.join(x)))
k=list(sorted(y))
print k[999999]

    
