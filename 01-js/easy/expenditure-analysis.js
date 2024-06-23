/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    const mp = new Map()
    for(let tx of transactions) {
        mp.set(tx.category, (mp.get(tx.category) ?? 0) + tx.price)
    }
    const ans = []
    for(let x of mp.keys()){
        ans.push({
            category: x,
            totalSpent: mp.get(x)
        })
    }
    return ans
}

module.exports = calculateTotalSpentByCategory;
