#Reciprocal cycles
#Problem 26

#A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

#    1/2	= 	0.5
#    1/3	= 	0.(3)
#    1/4	= 	0.25
#    1/5	= 	0.2
#    1/6	= 	0.1(6)
#    1/7	= 	0.(142857)
#    1/8	= 	0.125
#    1/9	= 	0.(1)
#    1/10	= 	0.1 

#Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

#Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.


def divide(x):
    v=[]
    balance=1
    for t in range(3000):
        v.insert(t,str((balance*10)/x))
        balance=(balance*10)%x
    return v



max1=0
for d in range(1,1000):
    x=divide(d)
    
    for i in range(1,1000):
        for k in range(1000):
            kk=0
            if ''.join(x[k:k+i])==''.join(x[k+i:k+(2*i)])  :
                kk=1
                if len(x[k:k+i])>max1:    
                    max1=len(x[k:k+i])
                    print max1,'===',''.join(x[k:k+i]),''.join(x[k+i:k+(2*i)])
                    print "ans",d
                    
                   
                    
        if kk==1:
                break
 #983
            
        
                    

