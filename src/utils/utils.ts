import dayjs from "dayjs";

export function hasWindowScrolledHalf() {
    return window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight / 2;
}

export function formatCounts(num: number) {
    const result: number = num/1000;
    if (num > 999)
        return `${result.toString().split('.')[0]}k`;
    else return num;
}

export function formatDate(timestamp: string, format: string) {
    return dayjs(timestamp).format(format);
}