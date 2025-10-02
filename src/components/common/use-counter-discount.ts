export function counterDiscount(price: number, fullPrice: number) {
    if (!price || !fullPrice) return 0
    return Math.round(((fullPrice - price) / fullPrice) * 100)
}
