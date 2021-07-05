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

// modules related tp nomination
db.election_gen = require("./election_gen_model")(sequelize, Sequelize);
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

//tabulation relationship
db.election.hasMany(db.itteration);
db.itteration.belongsTo(db.election);

//tabulation relationship
db.province.hasMany(db.electoral_district);
db.electoral_district.belongsTo(db.province);

//tabulation relationship
db.electoral_district.hasMany(db.admin_district);
db.admin_district.belongsTo(db.electoral_district);

//tabulation relationship
db.admin_district.hasMany(db.poling_division);
db.poling_division.belongsTo(db.admin_district);

//tabulation relationship
db.district_center.hasMany(db.counting_center);
db.counting_center.belongsTo(db.district_center);

//tabulation relationship
db.poling_division.hasMany(db.counting_center);
db.counting_center.belongsTo(db.poling_division);

//tabulation relationship
db.counting_center.hasMany(db.polling_district);
db.polling_district.belongsTo(db.counting_center);

//tabulation relationship
db.polling_district.hasMany(db.polling_station);
db.polling_station.belongsTo(db.polling_district);

//tabulation relationship
db.counting_center.hasMany(db.polling_station);
db.polling_station.belongsTo(db.counting_center);

//tabulation relationship
db.polling_station_gen.hasMany(db.polling_station);
db.polling_station.belongsTo(db.polling_station_gen);

//tabulation relationship
db.admin_district.hasMany(db.provincial_council_seats);
db.provincial_council_seats.belongsTo(db.admin_district);

//tabulation relationship
db.local_authority.hasMany(db.ward);
db.ward.belongsTo(db.local_authority);

//tabulation relationship
db.ward.hasMany(db.polling_district);
db.polling_district.belongsTo(db.ward);

//tabulation relationship
db.party_gen.hasMany(db.provincial_council_party);
db.provincial_council_party.belongsTo(db.party_gen);

//tabulation relationship
db.admin_district.hasMany(db.provincial_council_party);
db.provincial_council_party.belongsTo(db.admin_district);

//tabulation relationship
db.admin_district.hasMany(db.provincial_council_indi_groups);
db.provincial_council_indi_groups.belongsTo(db.admin_district);

// modules related tp nomination
db.election_module_approval = require("./election_module_approval_model")(sequelize, Sequelize);
db.election_module = require("./election_module_model")(sequelize, Sequelize);
db.eligibility_config = require("./eligibility_config_model")(sequelize, Sequelize);
db.eligibility_config_data = require("./eligibility_config_data_model")(sequelize, Sequelize);
db.division_config = require("./division_config_model")(sequelize, Sequelize);
db.candidate_config = require("./candidate_config_model")(sequelize, Sequelize);
db.candidate_config_data = require("./candidate_config_data_model")(sequelize, Sequelize);
db.support_doc_config = require("./support_doc_config_model")(sequelize, Sequelize);
db.support_doc_config_data = require("./support_doc_config_data_model")(sequelize, Sequelize);
db.election_module_config = require("./election_module_config_model")(sequelize, Sequelize);
db.election_module_config_data = require("./election_module_config_data_model")(sequelize, Sequelize);
db.symbol = require("./symbol_model")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);


//nomination relationship
db.election_module_approval.hasOne(db.election_module);
db.election_module.belongsTo(db.election_module_approval);

//nomination relationship
db.election_module.hasMany(db.eligibility_config, {as:'ELIGIBILITY_CONFIG'});
db.eligibility_config.belongsTo(db.election_module, {as:'ELECTION_MODULE'});

//nomination relationship
db.eligibility_config.hasMany(db.eligibility_config_data, {as:'ELIGIBILITY_CONFIG_DATA'});
db.eligibility_config_data.belongsTo(db.eligibility_config, {as:'ELIGIBILITY_CONFIG'});

//nomination relationship
db.election_module.hasMany(db.division_config, {as:'DIVISION_CONFIG'});
db.division_config.belongsTo(db.election_module, {as:'ELECTION_MODULE'});

//nomination relationship
db.election_module.hasMany(db.candidate_config, {as:'CANDIDATE_CONFIG'});
db.candidate_config.belongsTo(db.election_module, {as:'ELECTION_MODULE'});

//nomination relationship
db.candidate_config.hasMany(db.candidate_config_data, {as:'CANDIDATE_CONFIG_DATA'});
db.candidate_config_data.belongsTo(db.candidate_config, {as:'CANDIDATE_CONFIG'});

//nomination relationship
db.election_module.hasMany(db.support_doc_config, {as:'SUPPORT_DOC_CONFIG'});
db.support_doc_config.belongsTo(db.election_module, {as:'ELECTION_MODULE'});

//nomination relationship
db.support_doc_config.hasMany(db.support_doc_config_data, {as:'SUPPORT_DOC_CONFIG_DATA'});
db.support_doc_config_data.belongsTo(db.support_doc_config, {as:'SUPPORT_DOC_CONFIG'});

//nomination relationship
db.election_module.hasMany(db.election_module_config, {as:'ELECTION_MODULE_CONFIG'});
db.election_module_config.belongsTo(db.election_module, {as:'ELECTION_MODULE'});

//nomination relationship
db.election_module_config.hasMany(db.election_module_config_data, {as:'ELECTION_MODULE_CONFIG_DATA'});
db.election_module_config_data.belongsTo(db.election_module_config, {as:'ELECTION_MODULE_CONFIG'});

//nomination relationship
db.election_module.hasMany(db.eligibility_config_data, {as:'ELIGIBILITY_CONFIG_DATA'});
db.eligibility_config_data.belongsTo(db.election_module, {as:'ELECTION_MODULE'});

//nomination relationship
db.election_module.hasMany(db.election_module_config_data, {as:'ELECTION_MODULE_CONFIG_DATA'});
db.election_module_config_data.belongsTo(db.election_module, {as:'ELECTION_MODULE'});

db.election_module.hasMany(db.itteration, {as:'ELECTION_MODULE'});
db.itteration.belongsTo(db.election_module, {as:'ELECTION_MODULE'});

module.exports = db;
