
module.exports = (sequelize, Sequelize) => {
  const ProvincialCouncilSeats = sequelize.define("PROVINCIAL_COUNCIL_SEATS", {
    ADS_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    ADS_SEATS: {
      type: Sequelize.INTEGER
    },
    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
   
  });

  return ProvincialCouncilSeats;
};