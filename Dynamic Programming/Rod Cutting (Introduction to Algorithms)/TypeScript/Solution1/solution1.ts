function cutRod(p: number[], n: number, r: number[]): number {
    if(r[n]>=0)
    {
        return r[n];
    }
    if (n === 0)
    {
        return 0;
    }
    let q = -1;
    for (let i = 0; i < n; i++) {
        q = Math.max(q, p[i] + cutRod(p, n - i - 1, r));
    }
    r[n] = q;
    return q;
}

function main() {
    const p: number[] = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    let r: number[] = new Array(p.length + 1).fill(-1); 
    console.log(cutRod(p, 5, r));
}
main();