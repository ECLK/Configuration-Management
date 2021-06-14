const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

db.election = require("./election_model")(sequelize, Sequelize);
db.itteration = require("./itteration_model")(sequelize, Sequelize);
db.province = require("./province_model")(sequelize, Sequelize);
db.admin_district = require("./admin_district_model")(sequelize, Sequelize);
db.poling_division = require("./poling_division_model")(sequelize, Sequelize);
db.district_center = require("./district_center_model")(sequelize, Sequelize);
db.electoral_district = require("./electoral_district_model")(sequelize, Sequelize);
db.counting_center = require("./counting_center_model")(sequelize, Sequelize);
db.polling_station_gen = require("./polling_station_gen_model")(sequelize, Sequelize);
db.polling_station = require("./polling_station_model")(sequelize, Sequelize);
db.local_authority = require("./local_authority_model")(sequelize, Sequelize);
db.ward = require("./ward_model")(sequelize, Sequelize);
db.polling_district = require("./polling_district_model")(sequelize, Sequelize);
db.provincial_council_seats = require("./provincial_council_seats_model")(sequelize, Sequelize);
db.provincial_council_party = require("./provincial_council_party_model")(sequelize, Sequelize);
db.party_gen = require("./party_gen_model")(sequelize, Sequelize);
db.provincial_council_indi_groups = require("./provincial_council_indi_groups_model")(sequelize, Sequelize);


//relationships 1
db.election.hasMany(db.itteration);
db.itteration.belongsTo(db.election);

db.province.hasMany(db.electoral_district);
db.electoral_district.belongsTo(db.province);

//relationships 4
db.electoral_district.hasMany(db.admin_district);
db.admin_district.belongsTo(db.electoral_district);

//relationships 6
db.admin_district.hasMany(db.poling_division);
db.poling_division.belongsTo(db.admin_district);

//relationships 6
//db.district_center.hasMany(db.poling_division);
//db.poling_division.belongsTo(db.district_center);

db.district_center.hasMany(db.counting_center);
db.counting_center.belongsTo(db.district_center);

db.poling_division.hasMany(db.counting_center);
db.counting_center.belongsTo(db.poling_division);

db.counting_center.hasMany(db.polling_district);
db.polling_district.belongsTo(db.counting_center);

db.polling_district.hasMany(db.polling_station);
db.polling_station.belongsTo(db.polling_district);

db.counting_center.hasMany(db.polling_station);
db.polling_station.belongsTo(db.counting_center);

db.polling_station_gen.hasMany(db.polling_station);
db.polling_station.belongsTo(db.polling_station_gen);

db.admin_district.hasMany(db.provincial_council_seats);
db.provincial_council_seats.belongsTo(db.admin_district);

//---------------------
db.local_authority.hasMany(db.ward);
db.ward.belongsTo(db.local_authority);

db.ward.hasMany(db.polling_district);
db.polling_district.belongsTo(db.ward);

db.party_gen.hasMany(db.provincial_council_party);
db.provincial_council_party.belongsTo(db.party_gen);

db.admin_district.hasMany(db.provincial_council_party);
db.provincial_council_party.belongsTo(db.admin_district);

db.admin_district.hasMany(db.provincial_council_indi_groups);
db.provincial_council_indi_groups.belongsTo(db.admin_district);

module.exports = db;
