import { sql } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const testTable = sqliteTable("test_table", {
    id: text().primaryKey(),
    someText: text(),
    timestamp: integer({ mode: 'timestamp' }).default(sql`(unixepoch())`),
})
