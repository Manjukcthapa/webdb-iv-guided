
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { name: 'web18', track_id:"3"},
        { name: 'web19', track_id:"4"},
        {name: 'web17', track_id:"6"}
      ]);
    });
};
