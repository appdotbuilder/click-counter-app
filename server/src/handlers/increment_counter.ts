import { type IncrementCounterInput, type Counter } from '../schema';
import { incrementCurrentCount } from './counter_state';

export async function incrementCounter(input: IncrementCounterInput): Promise<Counter> {
    // This is a placeholder implementation with in-memory storage.
    // The goal of this handler is to increment the click counter by the specified amount.
    // Each click should increment the counter and return the new count.
    const incrementBy = input.increment ?? 1;
    const newCount = incrementCurrentCount(incrementBy);
    
    return {
        count: newCount
    };
}