import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", { mode: 'boolean' }).notNull(),
  image: text("image"),
  createdAt: integer("createdAt", { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updatedAt", { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const accounts = sqliteTable("account", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull().references(() => users.id),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  accessTokenExpiresAt: integer("accessTokenExpiresAt", { mode: 'timestamp' }),
  refreshTokenExpiresAt: integer("refreshTokenExpiresAt", { mode: 'timestamp' }),
  scope: text("scope"),
  idToken: text("idToken"),
  password: text("password"),
  createdAt: integer("createdAt", { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updatedAt", { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const sessions = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull().references(() => users.id),
  token: text("token").notNull(),
  expiresAt: integer("expiresAt", { mode: 'timestamp' }).notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  createdAt: integer("createdAt", { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updatedAt", { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const verifications = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expiresAt", { mode: 'timestamp' }).notNull(),
  createdAt: integer("createdAt", { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updatedAt", { mode: 'timestamp' }).notNull().default(sql`CURRENT_TIMESTAMP`),
});
