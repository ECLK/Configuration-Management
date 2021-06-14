const db = require('../models');
const itteration = db.itteration;
const provincialCouncilSeats = db.provincial_council_seats;
const election = db.election;
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
            let eid = 0;
            let iterid;
            data.map((x) => {
                eid = x.ELECTIONELECTIONID;
                iterid = x.ITERATION_ID;
            })
            if (eid > 0) {
                election.findByPk(eid, {
                    attributes: ['ELECTION_TYPE']
                })
                    .then(data => {
                        let etype = data.ELECTION_TYPE;
                        let q=`SELECT province.PROVINCE_NAME_EN, admin_district.ADMIN_DIS_NAME_EN, provincial_council_seats.ADS_SEATS FROM provincial_council_seats INNER JOIN admin_district ON provincial_council_seats.ADMINDISTRICTADMINDISID=admin_district.ADMIN_DIS_ID INNER JOIN electoral_district ON admin_district.ELECTORALDISTRICTEDID=electoral_district.ED_ID INNER JOIN province ON electoral_district.PROVINCEPROVINCEID = province.PROVINCE_ID WHERE provincial_council_seats.ITTERATION_ID=`+iterid;
                       if (etype == 'PRO') {
                            sequelize.query(q.trim(), { type: QueryTypes.SELECT })
                                .then(data=>{
                                    console.log(data)
                                    res.send(data);
                                }
                                    
                            )
                    .catch()

            } else {
                res.status(500).send(
                    {
                        message: err.message || "Election type not found"
                    }
                );
            }
        })
        .catch(err => {
            res.status(500).send(
                {
                    message: err.message || "Error retreiving Election with id= " + ittr
                }
            );
        });
} else {
    res.status(500).send(
        {
            message: err.message || 'Active itteration not found'
        }
    );
}
        })
        .catch (err => {
    res.status(500).send({
        message: err.message || 'Active itteration not found'
    })
});
};

exports.create = (req, res) => {

    if (!req.body.ELECTION_NAME_EN && !req.body.ELECTION_TEMPLATE_NAME_EN) {
        res.status(404).send({
            message: "Election Name English and Election Template Name English can not be empty"
        });
        return;
    }

    const elec = {
        ELECTION_NAME_EN: req.body.ELECTION_NAME_EN,
        ELECTION_NAME_SI: req.body.ELECTION_NAME_SI,
        ELECTION_NAME_TA: req.body.ELECTION_NAME_TA,
        ELECTION_TEMPLATE_NAME_EN: req.body.ELECTION_TEMPLATE_NAME_EN,
        ELECTION_TEMPLATE_NAME_SI: req.body.ELECTION_TEMPLATE_NAME_SI,
        ELECTION_TEMPLATE_NAME_TA: req.body.ELECTION_TEMPLATE_NAME_TA,
    };

    election.create(elec)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurs creating the Election"
            });
        });



};
