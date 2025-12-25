CREATE TABLE `test_table` (
	`id` text PRIMARY KEY NOT NULL,
	`someText` text,
	`timestamp` integer DEFAULT (unixepoch())
);
