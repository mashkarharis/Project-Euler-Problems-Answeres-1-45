# Counting Sundays
# Problem 19 
# You are given the following information, but you may prefer to do some research for yourself.

# 1 Jan 1900 was a Monday.
# Thirty days has September,
# April, June and November.
# All the rest have thirty-one,
# Saving February alone,
# Which has twenty-eight, rain or shine.
# And on leap years, twenty-nine.
# A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
# How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?


day=1 #(MON 1-SUN 7)
sundays=0
#1900 is not a leap year hence it has 365 days
a1901startingday=day+(365%7)
#hence 1901.01.01 is a tuesday
total_day=0
nonleap=(31,28,31,30,31,30,31,31,30,31,30,31)
leap=(31,29,31,30,31,30,31,31,30,31,30,31)

for year in range(1901,2001):
    if year%4==0 and year%100 !=0:
        
        
        for x in leap:
            
            monthstartday=a1901startingday+(total_day%7)
            total_day+=x
            if monthstartday==7:
                sundays+=1
                

    elif year%400==0:
        
        for x in leap:
            
            monthstartday=a1901startingday+(total_day%7)
            total_day+=x
            if monthstartday==7:
                sundays+=1


    else:
        
        for x in nonleap:
            
            monthstartday=a1901startingday+(total_day%7)
            total_day+=x
            if monthstartday==7:
                sundays+=1
print sundays

