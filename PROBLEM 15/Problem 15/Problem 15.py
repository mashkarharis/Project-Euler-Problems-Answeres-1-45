#Lattice paths
#Problem 15

#Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

#How many such routes are there through a 20×20 grid?


#In two grid we can take rows as 
path=0
b=8
for x in (1,3):
    for y in (2,4,6):
        if (y==x+1 or y==x+3):
            for a in (5,7):
                if (a==y+1 or a==y+3) and (b==a+1 or b==a+3):
                    path+=1
    
print 'number of paths in 2x2 grids :-',path
k=int(input('kxk then enter k--'))
x=[]
n=2*k
ncr_ontheline=1
for t in range(1,(n+1)):
    ncr_ontheline*=t





for r in range(n+1):
    ncr_nr=1
    
    for tt in range(1,(n-r+1)):
                    ncr_nr*=tt
    
    rr=1

    for ttt in range(1,r+1):
                    rr*=ttt
    x.insert(r,(ncr_ontheline)/((ncr_nr)*rr))

print "number of paths in '%d'x'%d' grids :-"%(k,k),x[n/2]
    
