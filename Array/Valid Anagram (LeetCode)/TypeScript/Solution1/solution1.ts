function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    else
    {
        if (orderString(s)===orderString(t)) return true;
        else return false;
    }
};
function orderString(s: string): string
{
    const orderedString = 
    s
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')
    return orderedString;
}