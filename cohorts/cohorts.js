const router = require('express').Router();
const knexConfig = require('../knexfile')

const knex = require('knex');

const db = knex(knexConfig.development);

router.get("/", (req, res) => {

  db("cohorts")
    .then(cohort => {
      res.status(200).json(cohort);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
    db('cohorts')
        .insert(req.body)
        .then(result => {
            res.json(result[0])
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
        })
})
module.exports = router;
