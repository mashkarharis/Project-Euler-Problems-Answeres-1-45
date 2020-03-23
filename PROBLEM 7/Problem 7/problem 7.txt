#10001st prime
#Problem 7
#By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
#What is the 10 001st prime number?

x=1
y=2 #start from first prime number

while (x<10002):
    z=0
    for t in range(2,(y)):
        if y%t==0:
            z+=1
    if z==0:
        x+=1
        print y # The last number is the answer.answer is 104743
    y+=1
