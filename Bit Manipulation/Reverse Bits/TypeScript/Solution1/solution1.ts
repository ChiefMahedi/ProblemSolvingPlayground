function reverseBits(number: number): number {
    let reversedNumber = 0;

    for (let i = 0; i < 32; i++) {
        const leastSignificantBit = number & 1;
        reversedNumber <<= 1;
        reversedNumber |= leastSignificantBit;
        number >>= 1;
    }
    return reversedNumber >>> 0;
}
