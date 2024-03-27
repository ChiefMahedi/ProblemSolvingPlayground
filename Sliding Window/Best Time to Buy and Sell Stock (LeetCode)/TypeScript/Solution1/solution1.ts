function maxProfit(prices: number[]): number {
    let profit = 0;
    for(let i = 0; i<prices.length; i++)
    {
        for (let j = i+1; j<prices.length; j++)
        {
            if(prices[j] - prices[i] > profit)
            {
                profit = prices[j] - prices[i] ; 
            }
            else continue;
        }
    }
    return profit
};