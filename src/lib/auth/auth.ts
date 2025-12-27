import 'dotenv/config';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import type { DrizzleClient } from '$lib/db';

import { users, accounts, sessions, verifications } from '$lib/db/schemas/auth';

export const createAuth = (db: DrizzleClient) => {
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: 'sqlite',
      schema: {
        user: users,
        account: accounts,
        session: sessions,
        verification: verifications
      }
    }),
    emailAndPassword: {
      enabled: false
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      }
    }
  });
};

export type BetterAuth = ReturnType<typeof createAuth>;
