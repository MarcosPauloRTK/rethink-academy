import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("authors", function (table) {
    table.increments("id", { primaryKey: true });
    table.string("name").notNullable();
    table.string("bestSeller");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("authors");
}
