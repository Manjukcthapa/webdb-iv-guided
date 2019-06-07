module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/tracks.db3', // the folder will be created when we run the migrations
    },

    useNullAsDefault:true,
  },
  migrations: {
    // we can change the location of the migrations
    directory: './migrations',
  },
  seeds: {
    // we can change the location of the seeds
    directory: './seeds',
  },

};
