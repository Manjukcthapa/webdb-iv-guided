
exports.seed = function(knex, Promise) {
  return knex('tracks').del()
    .then(() => {
      return knex('tracks').insert([
        {name: 'good'},
        {name: 'bad'},
        {name: 'resolve'}
      ]);
    })
};
