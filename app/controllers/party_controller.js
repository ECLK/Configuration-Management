const db = require('../models');
const itteration = db.itteration;
const election =db.election;
const { QueryTypes } = require('sequelize');
const sequelize = db.sequelize;

exports.find = (req, res) => {

    itteration.findAll(
        {
            where: {
                ITERATION_STATUS: true,
            }
        }
    )
        .then(data => {
            let iterid;
            data.map((x) => {
                eid = x.ELECTIONELECTIONID;
                iterid = x.ITERATION_ID;
            })
            if (iterid > 0) {
                election.findByPk(eid, {
                    attributes: ['ELECTION_TYPE']
                })
                    .then(data => {
                        let etype = data.ELECTION_TYPE;
                        if (etype == 'PRO') {
                            let q = `SELECT admin_district.ADMIN_DIS_NAME_EN, part_gen.PARTY_NAME_EN, part_gen.PARTY_ABBR_EN, part_gen.PARTY_SYMBOL_IN_TEXT_EN, part_gen.PARTY_COLOR_EN FROM provincial_council_party INNER JOIN part_gen ON provincial_council_party.PARTGENPARTYID = part_gen.PARTY_ID INNER JOIN admin_district ON provincial_council_party.ADMINDISTRICTADMINDISID=admin_district.ADMIN_DIS_ID WHERE provincial_council_party.ITTERATION_ID=` + iterid + ` UNION SELECT admin_district.ADMIN_DIS_NAME_EN, provincial_council_indi_group.PARTY_NAME_EN, provincial_council_indi_group.PARTY_ABBR_EN, provincial_council_indi_group.PARTY_SYMBOL_IN_TEXT_EN, provincial_council_indi_group.PARTY_COLOR_EN FROM provincial_council_indi_group INNER JOIN admin_district ON provincial_council_indi_group.ADMINDISTRICTADMINDISID=admin_district.ADMIN_DIS_ID WHERE provincial_council_indi_group.ITTERATION_ID=` + iterid;
                            sequelize.query(q.trim(), { type: QueryTypes.SELECT })
                                .then(data => {
                                    //console.log(data)
                                    res.send(data);
                                })
                                .catch(err => {
                                    res.status(500).send({
                                        message: err.message || 'Active itteration not found'
                                    })
                                })
                        }

                    }).catch()
            } else {
                res.status(500).send(
                    {
                        message: err.message || 'Active itteration not found'
                    }
                );
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Active itteration not found'
            })
        });
};

