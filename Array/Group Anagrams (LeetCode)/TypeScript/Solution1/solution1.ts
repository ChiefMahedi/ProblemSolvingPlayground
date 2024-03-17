function groupAnagrams(strs: string[]): string[] {
    const map = new Map();
    for(let str = 0; str<strs.length; str++) 
    {
        const sorted = sortString(strs[str]);
        const strings = map.get(sorted) || [];
        strings.push(strs[str]); 
        map.set(sorted, strings); 
    }
    return [...map.values()]

}
function sortString(str: string): string {
    const sorted = 
    str.split('') 
       .sort()
       .join('');
    return sorted;
}