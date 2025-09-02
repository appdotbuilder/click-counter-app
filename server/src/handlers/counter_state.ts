// Shared in-memory counter state
// This module maintains the counter state that resets on server restart
let currentCount = 0;

export function getCurrentCount(): number {
    return currentCount;
}

export function setCurrentCount(value: number): void {
    currentCount = value;
}

export function incrementCurrentCount(increment: number): number {
    currentCount += increment;
    return currentCount;
}