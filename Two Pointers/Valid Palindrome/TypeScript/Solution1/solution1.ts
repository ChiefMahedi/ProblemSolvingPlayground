function isPalindrome(s: string): boolean {
    if(!s.length) return false;
    const alphanumeric = convertToAlphaNumeric(s);
    const reversed = reversedString(alphanumeric);
    if(alphanumeric === reversed) return true
    else return false;
};
function convertToAlphaNumeric(s: string): string
{
   const filter = new RegExp('[^a-z0-9]','gi'); 
   const alphaNumeric = 
         s.toLowerCase()
          .replace(filter,''); 
   return alphaNumeric;
}
function reversedString(s:string): string
{
    const reversed = 
          s.split('')
           .reverse()
           .join('');
    return reversed;
}