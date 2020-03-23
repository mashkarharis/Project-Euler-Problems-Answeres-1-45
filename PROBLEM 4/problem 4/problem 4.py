# -*- coding: cp1252 -*-
#Largest palindrome product
#Problem 4
#A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
#Find the largest palindrome made from the product of two 3-digit numbers.
q=[]
for x in range(100,1000):
    for y in range(100,1000):
        z=0
        l=0
        x1=str(x*y)
        for t in x1:
            z+=1
        for k in range(z):
            if x1[k]==x1[-(k+1)]:
                l+=1
        if l==z:
            q.append(int(x1))
print "largest palindrome made from the product of two 3-digit numbers is",max(q)
            
            


            

        
            
                    
            
    
