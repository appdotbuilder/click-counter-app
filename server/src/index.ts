import { initTRPC } from '@trpc/server';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import 'dotenv/config';
import cors from 'cors';
import superjson from 'superjson';

// Import schema types
import { incrementCounterInputSchema, resetCounterInputSchema } from './schema';

// Import handlers
import { getCounter } from './handlers/get_counter';
import { incrementCounter } from './handlers/increment_counter';
import { resetCounter } from './handlers/reset_counter';

const t = initTRPC.create({
  transformer: superjson,
});

const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }),
  
  // Get current counter value
  getCounter: publicProcedure
    .query(() => getCounter()),
  
  // Increment counter (for image clicks)
  incrementCounter: publicProcedure
    .input(incrementCounterInputSchema)
    .mutation(({ input }) => incrementCounter(input)),
  
  // Reset counter to zero or specified value
  resetCounter: publicProcedure
    .input(resetCounterInputSchema)
    .mutation(({ input }) => resetCounter(input)),
});

export type AppRouter = typeof appRouter;

async function start() {
  const port = process.env['SERVER_PORT'] || 2022;
  const server = createHTTPServer({
    middleware: (req, res, next) => {
      cors()(req, res, next);
    },
    router: appRouter,
    createContext() {
      return {};
    },
  });
  server.listen(port);
  console.log(`TRPC server listening at port: ${port}`);
}

start();