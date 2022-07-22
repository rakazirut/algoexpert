# o(n) time o(1) space
def validateSubSeqWhile(array, seq):
    arrId = 0
    seqId = 0
    while arrId < len(array) and seqId < len(seq):
        if array[arrId] == seq[seqId]:
            seqId += 1
        arrId += 1
    return seqId == len(seq)

# o(n) time o(1) space
def validateSubSeqFor(array, seq):
    seqId = 0
    for n in array:
        if seqId == len(seq):
            break
        if seq[seqId] == n:
            seqId += 1
    return seqId == len(seq)


array = [5, 1, 22, 25, 6, -1, 8, 10]
seq = [1, 6, -1, 10]

print(validateSubSeqWhile(array, seq))
print(validateSubSeqFor(array, seq))
