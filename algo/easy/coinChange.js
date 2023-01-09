//
/*
Given an array of positive integers representing the values of coins in your
possession, write a function that returns the minimum amount of change (the
minimum sum of money) that you cannot create. The given coins can have
any positive integer value and aren't necessarily unique (i.e., you can have
multiple coins of the same value).

Sample Input:
coins  = [5, 7, 1, 1, 2, 3, 22]

Sample output:
20

Algo:
1. sort the coin array.(will take O(n log n))
2. Store the current change created and initialize it to zero
3. Loop through the sorted array. If the current coin is greater than the currentChangeCreated + 1
    then return it else add the coin to currentChangeCreated
*/

function nonConstructibleChange(coins) {

    coins.sort((a,b) => a - b);

    let currentChangrCreated = 0;

    for(const coin of coins){
        if(coin > currentChangrCreated + 1) {
            return currentChangrCreated + 1;
        }

        currentChangrCreated += coin;
    }

    return currentChangrCreated + 1;

}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
