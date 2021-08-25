const db = require('../models');
const election = db.election;
const itteration = db.itteration;

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
            data.map((x) => {
                eid = x.ELECTIONELECTIONID
            })
            if (eid > 0) {
                election.findByPk(eid, {
                    attributes: ['ELECTION_NAME_EN', 'ELECTION_TEMPLATE_NAME_EN']
                })
                    .then(data => {
                        res.send(data);
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
        .catch(err => {
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
