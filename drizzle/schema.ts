import { sqliteTable, AnySQLiteColumn, text, integer, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const testTable = sqliteTable("test_table", {
	id: text().primaryKey().notNull(),
	someText: text(),
	timestamp: integer().default(sql`(unixepoch())`),
});

export const verification = sqliteTable("verification", {
	id: text().primaryKey().notNull(),
	identifier: text().notNull(),
	value: text().notNull(),
	expiresAt: integer().notNull(),
	createdAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

export const account = sqliteTable("account", {
	id: text().primaryKey().notNull(),
	userId: text().notNull().references(() => user.id),
	accountId: text().notNull(),
	providerId: text().notNull(),
	accessToken: text(),
	refreshToken: text(),
	accessTokenExpiresAt: integer(),
	refreshTokenExpiresAt: integer(),
	scope: text(),
	idToken: text(),
	password: text(),
	createdAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

export const session = sqliteTable("session", {
	id: text().primaryKey().notNull(),
	userId: text().notNull().references(() => user.id),
	token: text().notNull(),
	expiresAt: integer().notNull(),
	ipAddress: text(),
	userAgent: text(),
	createdAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

export const user = sqliteTable("user", {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	email: text().notNull(),
	emailVerified: integer().notNull(),
	image: text(),
	createdAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});

