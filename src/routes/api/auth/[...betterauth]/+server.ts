import { createAuth } from '$lib/auth/auth';
import { createDb } from '$lib/db';

export const GET = async ({ platform, request }) => {
  const db = createDb(platform!.env.DB);
  const auth = createAuth(db);
  return auth.handler(request);
};

export const POST = async ({ platform, request }) => {
  const db = createDb(platform!.env.DB);
  const auth = createAuth(db);
  return auth.handler(request);
};