import { z } from 'zod';

// Counter schema for the current click count
export const counterSchema = z.object({
  count: z.number().int().nonnegative()
});

export type Counter = z.infer<typeof counterSchema>;

// Input schema for incrementing the counter
export const incrementCounterInputSchema = z.object({
  increment: z.number().int().positive().default(1).optional()
});

export type IncrementCounterInput = z.infer<typeof incrementCounterInputSchema>;

// Input schema for resetting the counter
export const resetCounterInputSchema = z.object({
  resetValue: z.number().int().nonnegative().default(0).optional()
});

export type ResetCounterInput = z.infer<typeof resetCounterInputSchema>;