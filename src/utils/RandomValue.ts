export function getRandomValue(max = 100, floatNum = 0): number {
    let v: number = -1;
    return (
        (v = Math.random() * max),
        floatNum > 0 ? parseFloat(String(v)) : parseInt(String(v))
    );
}
