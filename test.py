from struct import *
#-------------PACK AND UNPACK---------

#Store as bytes data
packed_data = pack('iif', 6, 19, 4.73)
print(packed_data)

print(calcsize('i'))
print(calcsize('f'))
print(calcsize('iif'))

#To get byte data back to normal b'\x06\x00\x00\x00\x13\x00\x00\x00)\\\x97@'
original_data = unpack('iif', packed_data)
print(original_data)

income = [10, 30, 75]


#-----------MAP-----------------
def double_money(dollars):
    return dollars * 2

new_income = list(map(double_money, income))
print(new_income)

