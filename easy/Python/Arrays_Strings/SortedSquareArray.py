def sortedSquaredArray(array):
    sqArr = [0 for _ in array]
    for i in range(len(array)):
        sqArr[i] = array[i]*array[i]
    sqArr.sort()
    return sqArr


def sortedSquaredArrayPointer(array):
    sqArr = [0 for _ in array]
    smIdx = 0
    lgIdx = len(array) - 1

    for i in reversed(range(len(array))):
        sm = array[smIdx]
        lg = array[lgIdx]

        if abs(sm) > abs(lg):
            sqArr[i] = sm * sm
            smIdx += 1
        else:
            sqArr[i] = lg*lg
            lgIdx -= 1
    return sqArr

array = [1, 2, 3, 5, 6, 8, 9]

print(sortedSquaredArray(array))
print(sortedSquaredArrayPointer(array))
