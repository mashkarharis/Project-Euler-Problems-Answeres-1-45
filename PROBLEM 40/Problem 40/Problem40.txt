# Champernowne's constant
# Problem 40

# An irrational decimal fraction is created by concatenating the positive integers:

# 0.123456789101112131415161718192021...

# It can be seen that the 12th digit of the fractional part is 1.

# If dn represents the nth digit of the fractional part, find the value of the following expression.

# d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

n="0."
l=1
print "ok"
while len(n)<1000005:
	n+=str(l)
	l+=1
print "ok"
list=[]
for t in (n):
	list.append(t)
print "ok"
del(list[0])
del(list[0])
print "ok"
print list[1-1],list[10-1],list[100-1],list[1000-1],list[10000-1],list[100000-1],list[1000000-1]
print int(list[1-1])*int(list[10-1])*int(list[100-1])*int(list[1000-1])*int(list[10000-1])*int(list[100000-1])*int(list[1000000-1])
print "ok"
