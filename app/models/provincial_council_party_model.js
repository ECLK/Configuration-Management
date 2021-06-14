
module.exports = (sequelize, Sequelize) => {
  const ProvincialCouncilParties = sequelize.define("PROVINCIAL_COUNCIL_PARTY", {
    PCP_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
   
  });

  return ProvincialCouncilParties;
};