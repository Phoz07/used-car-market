import type { BetterAuth } from '$lib/server/auth';
import type { DrizzleClient } from '$lib/server/db';

declare global {
  namespace App {
    interface Platform {
      env: {
        DB: D1Database;
      };
      cf: CfProperties;
      ctx: ExecutionContext;
    }
    
    interface Locals {
      db: DrizzleClient;
      auth: BetterAuth;
      user: any;
    }
  }
}

export {};