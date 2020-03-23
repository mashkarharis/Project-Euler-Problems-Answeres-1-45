
#PROBLEM 18
#By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

#   3
#  7 4
# 2 4 6
#8 5 9 3

#That is, 3 + 7 + 4 + 9 = 23.

#Find the maximum total from top to bottom of the triangle below:

#                75
#              95 64
#             17 47 82
#            18 35 87 10
#           20 04 82 47 65
#          19 01 23 75 03 34
#         88 02 77 73 07 63 67
#        99 65 04 28 06 16 70 92
#       41 41 26 56 83 40 80 70 33
#      41 48 72 33 47 32 37 16 94 29
#     53 71 44 65 25 43 91 52 97 51 14
#    70 11 33 28 77 73 17 78 39 68 17 57
#   91 71 52 38 17 14 91 43 58 50 27 29 48
#  63 66 04 68 89 53 67 30 73 16 69 87 40 31
# 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

#NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)


r1=[75]
r2=[95,64]
r3=[17,47,82]
r4=[18,35,87,10]
r5=[20,04,82,47,65]
r6=[19,01,23,75,03,34]
r7=[88,02,77,73,07,63,67]
r8=[99,65,04,28,06,16,70,92]
r9=[41,41,26,56,83,40,80,70,33]
r10=[41,48,72,33,47,32,37,16,94,29]
r11=[53,71,44,65,25,43,91,52,97,51,14]
r12=[70,11,33,28,77,73,17,78,39,68,17,57]
r13=[91,71,52,38,17,14,91,43,58,50,27,29,48]
r14=[63,66,04,68,89,53,67,30,73,16,69,87,40,31]
r15=[04,62,98,27,23,9,70,98,73,93,38,53,60,04,23]
kmax=0
for i1 in [0]:
    for i2 in [i1,i1+1]:
        for i3 in [i2,i2+1]:
            for i4 in [i3,i3+1]:
                for i5 in [i4,i4+1]:
                    for i6 in [i5,i5+1]:
                        for i7 in [i6,i6+1]:
                            for i8 in [i7,i7+1]:
                                for i9 in [i8,i8+1]:
                                    for i10 in [i9,i9+1]:
                                        for i11 in [i10,i10+1]:
                                            for i12 in [i11,i11+1]:
                                                for i13 in [i12,i12+1]:
                                                    for i14 in [i13,i13+1]:
                                                        for i15 in [i14,i14+1]:
                                                            k=r1[i1]+r2[i2]+r3[i3]+r4[i4]+r5[i5]+r6[i6]+r7[i7]+r8[i8]+r9[i9]+r10[i10]+r11[i11]+r12[i12]+r13[i13]+r14[i14]+r15[i15]
                                                            if k>kmax:
                                                                kmax=k
                                                            
                                                    
  
                                        
                
print 'The maximum total from top to bottom of the triangle is',kmax
                                                      
    
  
            
