# Integer right triangles
# Problem 39

# If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are
# exactly three solutions for p = 120.

# {20,48,52}, {24,45,51}, {30,40,50}

# For which value of p ≤ 1000, is the number of solutions maximised?
set={}
for p in range(3,1001):
	if p%1==0:
		print p
	solution=0
	for a in range(1,p-1):
		for b in range(1,p-1):
			c=p-a-b
			if a**2+b**2==c**2:
					
				solution+=1

	set[p]=solution
index=0
index1=0
maxp=0
for x in set.items():
	if x[1]>maxp:
		maxp=x[1]
		index1=x[0]
	index+=1
print maxp,index1

