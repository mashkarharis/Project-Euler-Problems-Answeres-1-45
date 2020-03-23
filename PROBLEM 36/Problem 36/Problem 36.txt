# Double-base palindromes
# Problem 36

# The decimal number, 585 = 1001001001(2) (binary), is palindromic in both bases.

# Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

# (Please note that the palindromic number, in either base, may not include leading zeros.)

def dec_to_binarylist(x):
    
    remainder=int(x)
    list=[]
    while remainder>=1:
        quotient=remainder%2
        list.insert(0,str(quotient))
        remainder=remainder/2
    return list

def dec_to_declist(x):
    k=[]
    for a in str(x):
        k.insert(0,a)
    return k
def list_balance_check(a):
    a1=a
    a2=[]
    for k in a:
        a2.insert(0,k)
    if a1==a2:
        return True
    else:
        return False
tot=0
for x in range(1,1000000):
    if list_balance_check(dec_to_binarylist(x)) and list_balance_check(dec_to_declist(x)):
        print x,"----",''.join(dec_to_binarylist(x)),dec_to_declist(x)
        tot+=x
print "ANSWERE IS :",tot
    
        
        
