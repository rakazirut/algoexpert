# o(n^2) time o(n) space
def twoNumberSum(array, targetSum):
    for i in range(len(array)):
        first = array[i]
        for j in range(i+1, len(array)):
            second = array[j]
            if first+second == targetSum:
                return [first, second]
    return []

# 0(n) time o(n) space
def twoNumberSumHash(array, targetSum):
    set = {}
    for num in array:
        if targetSum - num in set:
            return [targetSum - num, num]
        else:
            set[num] = True
    return []

# o(nlogn) time o(1) space
def twoNumberSumPointers(array, targetSum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        sum = array[left] + array[right]
        if sum == targetSum:
            return[array[left], array[right]]
        elif sum < targetSum:
            left += 1
        else:
            right -= 1
    return []

array = [3, 5, -4, 8, 11, 1, -1, 6]
target = 10

print(twoNumberSum(array, target))
print(twoNumberSumHash(array, target))
print(twoNumberSumPointers(array, target))
