// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for 3 = 6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for 3 = 12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

function mango(quantity, price){
    const mangoesPaidFor = Math.ceil(quantity * (2/3))
    const total = mangoesPaidFor * price
    return total
}

console.log(mango(2, 3)) // total = 6
console.log(mango(3, 3)) // total = 6
console.log(mango(5, 3)) // total = 12
console.log(mango(9, 5)) // total = 30

// All tests passed!