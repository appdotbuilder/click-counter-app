import { type ResetCounterInput, type Counter } from '../schema';
import { setCurrentCount } from './counter_state';

export async function resetCounter(input: ResetCounterInput): Promise<Counter> {
    // This is a placeholder implementation with in-memory storage.
    // The goal of this handler is to reset the click counter to the specified value (default 0).
    // This provides functionality to manually reset the counter if needed.
    const resetValue = input.resetValue ?? 0;
    setCurrentCount(resetValue);
    
    return {
        count: resetValue
    };
}