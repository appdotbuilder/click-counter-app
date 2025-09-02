import { type Counter } from '../schema';
import { getCurrentCount } from './counter_state';

export async function getCounter(): Promise<Counter> {
    // This is a placeholder implementation with in-memory storage.
    // The goal of this handler is to return the current click count.
    // The counter resets to 0 when the server restarts.
    return {
        count: getCurrentCount()
    };
}