import { json, error } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { createDb } from "$lib/db"

import { testTable } from "$lib/db/schemas/test"

export const GET: RequestHandler = async ({ platform }) => {
    try {
        const db = createDb(platform?.env.DB as D1Database)
        const test = await db.select().from(testTable)
        return json({
            message: 'Hello, World!',
            status: 200,
            timestamp: new Date().toISOString(),
            test
        })
    } catch (error) {
        return json({
            message: 'Internal Server Error',
            status: 500,
            timestamp: new Date().toISOString(),
            error: (error as Error).message
        }, { status: 500 })
    }
}