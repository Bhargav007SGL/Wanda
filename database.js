const express = require('express')
const app = express()
const port = 3069

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'igis',
  host: 'localhost',
  database: 'Bhargav',
  password: 'igis',
  port: 5432,
})

app.get('/', (req, res) => {
    pool.query('select version()', (error, results) => {
        if (error) {
          throw error
        }
        res.send(results.rows)
      })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})