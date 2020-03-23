#   Longest Collatz sequence
#   Problem 14

#   The following iterative sequence is defined for the set of positive integers:

#   n → n/2 (n is even)
#   n → 3n + 1 (n is odd)

#   Using the rule above and starting with 13, we generate the following sequence:
#   13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

#   It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

#   Which starting number, under one million, produces the longest chain?

#   NOTE: Once the chain starts the terms are allowed to go above one million.
value=0
for x in range(1,1000000):
    a=x
    values=1 #when considered 1 is also a value
    while x!=1:
        if x%2==0:
            x=x/2
            values+=1
        else:
            x=(3*x)+1
            values+=1
    if values>value:
        value=values
        b=a
print b,'gives largest sequence'
print '------END OF RESULTS------------'        

            
            
