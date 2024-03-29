function isValid(s: string): boolean {
    const stringMap = {
        ')':'(',
        '}':'{',
        ']':'[',
    };
    const stack : string[] = [];
    const chars = s.split('');
    for(let i = 0;  i< chars.length; i++)
    {
        const element = chars[i];
        if(element in stringMap){
            const item = stack.pop();
            if(stringMap[element] === item) continue;
            else return false;
        }
        else{
            stack.push(element);
        }
    }
    if(stack.length > 0) return false;
    return true;
};