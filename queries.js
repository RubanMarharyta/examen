const Pool = require('pg').Pool;
const pool = new Pool({
 host: 'ec2-52-48-65-240.eu-west-1.compute.amazonaws.com',
  database: 'd4ro2kj79vm8rk',
  user:'eollozxdxwtwvs',
  password: '45824197c97e81bcd9955a2fb0ff028d51bb238d10a296a12f3cee345692cec7',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})

const getData = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  pool.query('SELECT * FROM "public".table', (err, data) => {
      res.header("Access-Control-Allow-Origin", "*");
    if (err) {throw err}
    res.status(200).json(data.rows)
  })
}

const getDataById = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = parseInt(req.params.id)
  pool.query('SELECT * FROM "public".table WHERE id = $1', [id], (err, data) => {
    if (err) {throw err}
    res.status(200).json(data.rows)

  })
}

module.exports = {
  getData,
  getDataById
}