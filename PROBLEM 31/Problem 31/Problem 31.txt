#Coin sums
#Problem 31

#In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

#    1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

#It is possible to make £2 in the following way:

#    1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

#How many different ways can £2 be made using any number of coins?

x=0
for one in range(201):
    t1=1*one
    for two in range(101):
        t2=2*two
        for five in range(41):
            t3=5*five
            for ten in range(21):
                t4=10*ten
                for twenty in range(11):
                    t5=20*twenty
                    for fifty in range(5):
                        t6=50*fifty
                        for hundred in range(3):
                            t7=100*hundred
                            for twohundred in range(2):
                                t8=200*twohundred
                                if ((t1+t2+t3+t4+t5+t6+t7+t8)==200):
                                    x+=1
                                    

                                
print "ways=",x
