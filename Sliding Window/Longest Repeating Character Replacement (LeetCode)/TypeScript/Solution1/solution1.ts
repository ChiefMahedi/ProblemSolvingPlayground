function characterReplacement(s: string, k: number): number {
    let maxLength = 0;
    let maxCount = 0; 
    let charMap = new Map<string, number>(); 
    let start = 0; 

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        let count = charMap.get(char) || 0;
        charMap.set(char, count + 1);
        maxCount = Math.max(maxCount, count + 1);
        if (end - start + 1 - maxCount > k) {
            const startChar = s[start];
            charMap.set(startChar, charMap.get(startChar)! - 1);
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
