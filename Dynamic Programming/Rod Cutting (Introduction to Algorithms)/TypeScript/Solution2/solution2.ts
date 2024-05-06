function bottomUpCutRod(p: number[], n: number): number {
    let r: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        let q = -1;
        for (let j = 1; j <= i; j++) {
            q = Math.max(q, p[j - 1] + r[i - j]);
        }
        r[i] = q;
    }
    return r[n];
}

function main() {
    const p: number[] = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    console.log(bottomUpCutRod(p, 5));
}

main();
