function maxProfit(prices: number[]): number {
    let left = 0;
    let right = 1;
    let profit = 0;
    for(right; right<prices.length; right++)
    {
        const slide = prices[right] <= prices[left];
        if(slide) left = right;
        const window = prices[right] - prices[left];
        profit = Math.max(profit, window);
    }
    return profit;
};

//Or this one also works faster a little bit:
function maxProfit(prices: number[]): number {
    let left = 0;
    let right = 1;
    let profit = 0;
    for(right; right < prices.length; right++)
    {
        if(prices[right] > prices[left])
        {
            profit = Math.max(prices[right]-prices[left], profit);
        }
        else
        {
            left = right;
        } 
    }
    return profit;
};