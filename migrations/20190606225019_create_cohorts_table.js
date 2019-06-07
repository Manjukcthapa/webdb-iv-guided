
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohorts', function(tbl) {

        tbl.increments()
        tbl
        .string('name', 128)
        .notNullable()
        .unique();

        tbl
        .integer('track_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tracks')
        .onDelete('RESTRICT') // explain how cascading works
        .onUpdate('CASCADE');


       
    })

}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts')
  
};
