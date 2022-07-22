const {
    LinkedList
} = require("./linkedList.js")

const li = new LinkedList();

function removeDup(n) {
    let set = {}
    let previousNode = null
    console.log(n.data)
    while (n != null) {
        if (n.data in set) {
            previousNode.next = n.next
        } else {
            set[n.data] = true
            previousNode = n
        }
        n = n.next
    }
    return set
}
li.multiAppend([9, 1, 2, 5, 9, 1, 3])
console.log(removeDup(li))