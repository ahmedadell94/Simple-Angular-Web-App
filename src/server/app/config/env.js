const envv = {
  database: 'postgres',
  username: 'jacob',
  password: '12435',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = envv;
