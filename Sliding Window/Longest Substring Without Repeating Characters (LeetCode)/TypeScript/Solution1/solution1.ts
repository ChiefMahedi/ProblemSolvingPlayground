function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let charSetMap = new Set<string>();
        charSetMap.add(s[i]);
        for (let j = i + 1; j < s.length; j++) {
            if (charSetMap.has(s[j])) {
                break;
            }
            else charSetMap.add(s[j]);
        }
        maxLength = Math.max(charSetMap.size, maxLength);
    }

    return maxLength;
};