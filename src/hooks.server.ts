import { createAuth } from './lib/auth/auth';
import { createDb } from './lib/db';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const db = createDb(event.platform!.env.DB);
  const auth = createAuth(db);
  
  event.locals.db = db;
  event.locals.auth = auth;
  
  // Get session
  const session = await auth.api.getSession({
    headers: event.request.headers
  });
  
  event.locals.user = session?.user;
  
  return resolve(event);
};