import { bigint, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const keepAlive = pgTable('keep-alive', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').default(''),
  random: uuid('random').defaultRandom(),
});
