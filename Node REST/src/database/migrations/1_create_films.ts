import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('items', table =>{
        table.increments('id').primary(),
        table.string('title').notNullable()
        table.string('description', 800).notNullable(),
        table.string('director').notNullable(),
        table.string('release_date', 10).notNullable(),
        table.string('rt_score').notNullable()
        table.string('image').notNullable()
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('items')
}