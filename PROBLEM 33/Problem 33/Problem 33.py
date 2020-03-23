# Digit cancelling fractions
# Problem 33

# The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

# We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

# There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

# If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
p=1
for x in range(10,100):
    for t in range(10,x):
        if (x%10!=0):
            a=t/10
            b=x-((x/10)*10)
            c=x/10
            d=t-((t/10)*10)
            if (c==d) and (float(t)/x)==(float(a)/b):
                print str(t)+"/"+str(x),"             ",str(a)+"/"+str(b)
                p*=b

