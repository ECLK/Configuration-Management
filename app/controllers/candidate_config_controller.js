const db = require('../models');
const election = db.election;
const itteration = db.itteration;
const { QueryTypes } = require('sequelize');
const sequelize = db.sequelize;

exports.findCandidateConfig = (req, res) => {
    //select election module 
    let q1 = `SELECT election_module.ID FROM itteration INNER JOIN election_module ON itteration.ELECTIONMODULEID= election_module.ID WHERE itteration.ITERATION_STATUS=1`
    sequelize.query(q1.trim(), { type: QueryTypes.SELECT })
        .then(data => {
            let emid = 0;
            data.map((x) => {
                emid = x.ID;
            })
            if (emid > 0) {
                let q = `SELECT candidate_config.KEY_NAME as candidateConfigName FROM candidate_config INNER JOIN candidate_config_data ON candidate_config.ID=candidate_config_data.CANDIDATECONFIGID WHERE candidate_config_data.ELECTIONMODULEID=`+emid;
                sequelize.query(q.trim(), { type: QueryTypes.SELECT })
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || 'Candidate config data not found'
                        })
                    })

            }

        })
        .catch(
            err => {
                res.status(500).send({
                    message: err.message || 'Active itteration not found'
                })
            }
        )
};

exports.findSupportDocument = (req, res) => {
    //select election module 
    let q1 = `SELECT election_module.ID FROM itteration INNER JOIN election_module ON itteration.ELECTIONMODULEID= election_module.ID WHERE itteration.ITERATION_STATUS=1`
    sequelize.query(q1.trim(), { type: QueryTypes.SELECT })
        .then(data => {
            let emid = 0;
            data.map((x) => {
                emid = x.ID;
            })
            if (emid > 0) {
                let q = `SELECT support_doc_config.KEY_NAME as supportDocConfigName FROM support_doc_config INNER JOIN support_doc_config_data ON support_doc_config.ID = support_doc_config_data.SUPPORTDOCCONFIGID WHERE support_doc_config_data.ELECTIONMODULEID=`+emid;
                sequelize.query(q.trim(), { type: QueryTypes.SELECT })
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || 'support_doc_config not found'
                        })
                    })

            }

        })
        .catch(
            err => {
                res.status(500).send({
                    message: err.message || 'Active itteration not found'
                })
            }
        )
};


