function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    let map = new Map();
    addCharCount(s, map);
    removeCharCount(t, map);``
    return checkTotalCharCount(map);
};
function addCharCount(str: string, map)
{
    for(const char of str)
    {
        const count = (map.get(char) || 0) + 1;
        map.set(char, count);
    }
}
function removeCharCount(str: string, map)
{
    for(const char of str)
    {
        if(!map.has(char)) continue;
        const count = map.get(char) - 1;
        map.set(char, count);
    }
}
function checkTotalCharCount(map): boolean{
    for(const [char, count] of map)
    {
        const isEmpty = count === 0;
        if(!isEmpty) return false;
    }
    return true;
}