const db = require('../models');
const election = db.election;
const itteration = db.itteration;
const { QueryTypes } = require('sequelize');
const sequelize = db.sequelize;

exports.findElectionTemplate = (req, res) => {
    const allElectionTemplateData = {
        name: '',
        divisionCommonName: '',
        candidateFormConfiguration: [],
        supportingDocuments: [],
        divisionConfig: [],
        electionConfig: [],
        eligibilityCheckList: []
    }

    let emid = 0;

    let q1 = `SELECT election_module.ID, election_module.NAME, election_module.DIVISION_COMMON_NAME FROM itteration INNER JOIN election_module ON itteration.ELECTIONMODULEID= election_module.ID WHERE itteration.ITERATION_STATUS=1`
    sequelize.query(q1.trim(), { type: QueryTypes.SELECT })
        .then(data => {
            data.map((x) => {
                emid = x.ID;
                allElectionTemplateData.name = x.NAME;
                allElectionTemplateData.divisionCommonName = x.DIVISION_COMMON_NAME;
            })
            if (emid > 0) {
                // select candidate config data
                let q2 = `SELECT candidate_config_data.CANDIDATE_CONFIG_NAME as candidateConfigName FROM election_module INNER JOIN candidate_config ON election_module.ID = candidate_config.ELECTIONMODULEID INNER JOIN candidate_config_data ON candidate_config.ID=candidate_config_data.CANDIDATECONFIGID WHERE election_module.ID=` + emid;
                sequelize.query(q2.trim(), { type: QueryTypes.SELECT })
                    .then(data => {
                        //res.send(data);
                        allElectionTemplateData.candidateFormConfiguration = data

                        // select supporting documents
                        let q3 = `SELECT support_doc_config.KEY_NAME as supportDocConfigName FROM election_module INNER JOIN support_doc_config ON election_module.ID = support_doc_config.ELECTIONMODULEID WHERE election_module.ID=` + emid;
                        sequelize.query(q3.trim(), { type: QueryTypes.SELECT })
                            .then(data => {
                                allElectionTemplateData.supportingDocuments = data
                                // select divisionConfig
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
                                                    let q4 = `SELECT admin_district.ADMIN_DIS_NAME_EN as divisionName, province.PROVINCE_NAME_EN as parentDivisionName, provincial_council_seats.ADS_SEATS as noOfCandidates, admin_district.ADMIN_DIS_ID as divisionCode FROM provincial_council_seats INNER JOIN admin_district ON provincial_council_seats.ADMINDISTRICTADMINDISID=admin_district.ADMIN_DIS_ID INNER JOIN electoral_district ON admin_district.ELECTORALDISTRICTEDID=electoral_district.ED_ID INNER JOIN province ON electoral_district.PROVINCEPROVINCEID = province.PROVINCE_ID WHERE provincial_council_seats.ITTERATION_ID=` + iterid;
                                                    if (etype == 'PRO') {
                                                        sequelize.query(q4.trim(), { type: QueryTypes.SELECT })
                                                            .then(data => {
                                                                allElectionTemplateData.divisionConfig = data

                                                                // electionConfig
                                                                let q5 = `SELECT election_module_config.KEY_NAME AS electionModuleConfigName, election_module_config_data.VALUE AS value FROM election_module INNER JOIN election_module_config ON election_module.ID = election_module_config.ELECTIONMODULEID INNER JOIN election_module_config_data ON election_module_config.ID=election_module_config_data.ELECTIONMODULECONFIGID WHERE election_module.ID=` + emid;
                                                                sequelize.query(q5.trim(), { type: QueryTypes.SELECT })
                                                                    .then(data => {
                                                                        allElectionTemplateData.electionConfig = data

                                                                        // eligibilityCheckList
                                                                        let q6 = `SELECT eligibility_config.DESCRIPTION AS eligibilityConfigName FROM election_module INNER JOIN eligibility_config ON election_module.ID = eligibility_config.ELECTIONMODULEID WHERE election_module.ID=` + emid;
                                                                        sequelize.query(q6.trim(), { type: QueryTypes.SELECT })
                                                                            .then(data => {
                                                                                allElectionTemplateData.eligibilityCheckList = data
                                                                                res.send(allElectionTemplateData)
                                                                            })
                                                                            .catch(
                                                                                err => {
                                                                                    res.status(500).send({
                                                                                        message: err.message || 'Active eligibility config not found'
                                                                                    })
                                                                                }
                                                                            );
                                                                    })
                                                                    .catch(
                                                                        err => {
                                                                            res.status(500).send({
                                                                                message: err.message || 'Active election config not found'
                                                                            })
                                                                        }
                                                                    );
                                                            }
                                                            )
                                                            .catch(
                                                                err => {
                                                                    res.status(500).send({
                                                                        message: err.message || 'Active division Config not found'
                                                                    })
                                                                }
                                                            )
                                                    } else {
                                                    }
                                                })
                                                .catch();
                                        } else {

                                        }
                                    })
                                    .catch(
                                        err => {
                                            res.status(500).send({
                                                message: err.message || 'Active itteration not found'
                                            })
                                        }
                                    );

                            })
                            .catch(
                                err => {
                                    res.status(500).send({
                                        message: err.message || 'Active Support doc config not found'
                                    })
                                }
                            );
                    })
                    .catch(
                        err => {
                            res.status(500).send({
                                message: err.message || 'Active Candidate Config not found'
                            })
                        }
                    );
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


