const db = require('../models');
const election = db.election;
const itteration = db.itteration;
const province = db.province;
const electoralDistrict = db.electoral_district;
const adminDistrict = db.admin_district;
const districtCenter = db.district_center;
const pollingDivision = db.poling_division;
const countingCenter = db.counting_center;
const localAuthority = db.local_authority;
const ward = db.ward;
const pollindDistricts = db.polling_district;
const pollingStationGen = db.polling_station_gen;
const pollingStation = db.polling_station;
const partyGen = db.party_gen;
const provincialCouncilParty = db.provincial_council_party;
const provincialCouncilIndiGroups = db.provincial_council_indi_groups;

exports.create = (req, res) => {

    // Create election dummy data
    const elections = [
        {
            ELECTION_ID: 1,
            ELECTION_NAME_EN: 'PRESIDENTIAL ELECTION 2019',
            ELECTION_NAME_SI: 'PRESIDENTIAL ELECTION 2019',
            ELECTION_NAME_TA: 'PRESIDENTIAL ELECTION 2019',
            ELECTION_TEMPLATE_NAME_EN: 'PRESIDENTIAL_ELECTION_2019',
            ELECTION_TEMPLATE_NAME_SI: 'PRESIDENTIAL_ELECTION_2019',
            ELECTION_TEMPLATE_NAME_TA: 'PRESIDENTIAL_ELECTION_2019',
            ELECTION_TYPE: 'PRE'
        },
        {
            ELECTION_ID: 2,
            ELECTION_NAME_EN: 'PARLIAMENT ELECTION 2020',
            ELECTION_NAME_SI: 'PARLIAMENT ELECTION 2020',
            ELECTION_NAME_TA: 'PARLIAMENT ELECTION 2020',
            ELECTION_TEMPLATE_NAME_EN: 'PARLIAMENT_ELECTION_2020',
            ELECTION_TEMPLATE_NAME_SI: 'PARLIAMENT_ELECTION_2020',
            ELECTION_TEMPLATE_NAME_TA: 'PARLIAMENT_ELECTION_2020',
            ELECTION_TYPE: 'PAR'
        }
        ,
        {
            ELECTION_ID: 3,
            ELECTION_NAME_EN: 'PROVINCIAL COUNCIL ELECTION 2021',
            ELECTION_NAME_SI: 'PROVINCIAL COUNCIL ELECTION 2021',
            ELECTION_NAME_TA: 'PROVINCIAL COUNCIL ELECTION 2021',
            ELECTION_TEMPLATE_NAME_EN: 'PROVINCIAL_COUNCIL_ELECTION_2021',
            ELECTION_TEMPLATE_NAME_SI: 'PROVINCIAL_COUNCIL_ELECTION_2021',
            ELECTION_TEMPLATE_NAME_TA: 'PROVINCIAL_COUNCIL_ELECTION_2021',
            ELECTION_TYPE: 'PRO'
        }
    ]

    elections.map((elec, i) => {
        election.create(elec)
            .then(
            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Elections Dummy data"
                    }
                    )
                })
    });

    // Create iteration dummy data
    const itterations = [
        {
            ITERATION_NAME: 'Iteration 1',
            ITERATION_STATUS: false,
            ELECTIONELECTIONID: 1
        },
        {
            ITERATION_NAME: 'Iteration 2',
            ITERATION_STATUS: true,
            ELECTIONELECTIONID: 3
        }
    ]

    itterations.map((itte, i) => {
        itteration.create(itte)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create province dummy data
    // Create iteration dummy data
    const provinces = [
        {
            PROVINCE_ID: 1,
            PROVINCE_NAME_EN: 'Province EN 1',
            PROVINCE_NAME_SI: 'Province SI 1',
            PROVINCE_NAME_TA: 'Province TM 1'
        },
        {
            PROVINCE_ID: 2,
            PROVINCE_NAME_EN: 'Province EN 2',
            PROVINCE_NAME_SI: 'Province SI 2',
            PROVINCE_NAME_TA: 'Province TM 2'
        }
    ]

    provinces.map((pro, i) => {
        province.create(pro)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create electoral district dummy data
    const elecdistricts = [
        {
            ED_ID: 1,
            ED_NAME_EN: 'Electoral District EN 1',
            ED_NAME_SI: 'Electoral District SI 1',
            ED_NAME_TA: 'Electoral District TM 1',
            PROVINCEPROVINCEID: 1
        },
        {
            ED_ID: 2,
            ED_NAME_EN: 'Electoral District EN 2',
            ED_NAME_SI: 'Electoral District SI 2',
            ED_NAME_TA: 'Electoral District TM 2',
            PROVINCEPROVINCEID: 1
        },
        {
            ED_ID: 3,
            ED_NAME_EN: 'Electoral District EN 3',
            ED_NAME_SI: 'Electoral District SI 3',
            ED_NAME_TA: 'Electoral District TM 3',
            PROVINCEPROVINCEID: 2
        }
    ]

    elecdistricts.map((elcdis, i) => {
        electoralDistrict.create(elcdis)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create admin district dummy data
    const adminDistricts = [
        {
            ADMIN_DIS_ID: 1,
            ADMIN_DIS_NAME_EN: 'Admin District EN 1',
            ADMIN_DIS_NAME_SI: 'Admin District SI 1',
            ADMIN_DIS_NAME_TA: 'Admin District  TM 1',
            ELECTORALDISTRICTEDID: 1
        },
        {
            ADMIN_DIS_ID: 2,
            ADMIN_DIS_NAME_EN: 'Admin District EN 2',
            ADMIN_DIS_NAME_SI: 'Admin District SI 2',
            ADMIN_DIS_NAME_TA: 'Admin District  TM 2',
            ELECTORALDISTRICTEDID: 2
        }
    ]

    adminDistricts.map((admdis, i) => {
        adminDistrict.create(admdis)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create district center dummy data
    const districtCenters = [
        {
            DC_EN: 'District Center EN 1',
            DC_SI: 'District Center SI 1',
            DC_TA: 'District Center TM 1',
            ITTERATION_ID: 2
        }

    ]

    districtCenters.map((discen, i) => {
        districtCenter.create(discen)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create district center dummy data
    const polingdivisions = [
        {
            PDIV_ID: 1,
            PDIV_NAME_EN: 'Polling Division EN 1',
            PDIV_NAME_SI: 'Polling Division SI 1',
            PDIV_NAME_TA: 'Polling Division TM 1',
            ADMINDISTRICTADMINDISID: 1
        },
        {
            PDIV_ID: 2,
            PDIV_NAME_EN: 'Polling Division EN 1',
            PDIV_NAME_SI: 'Polling Division SI 1',
            PDIV_NAME_TA: 'Polling Division TM 1',
            ADMINDISTRICTADMINDISID: 1
        }
    ]

    polingdivisions.map((poldiv, i) => {
        pollingDivision.create(poldiv)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create district center dummy data
    const css = [
        {
            CC_NAME_EN: 'Counting Center EN 1',
            CC_NAME_SI: 'Counting Center SI 1',
            CC_NAME_TA: 'Counting Center TM 1',
            CC_TYPE: 'NORMAL',
            ITTERATION_ID: 2,
            DISTRICTCENTERDCID: 1,
            POLLINGDIVISIONPDIVID: 1
        },
        {
            CC_NAME_EN: 'Counting Center EN 1',
            CC_NAME_SI: 'Counting Center SI 1',
            CC_NAME_TA: 'Counting Center TM 1',
            CC_TYPE: 'POSTAL',
            ITTERATION_ID: 2,
            DISTRICTCENTERDCID: 1,
            POLLINGDIVISIONPDIVID: 1
        },
        {
            CC_NAME_EN: 'Counting Center EN 1',
            CC_NAME_SI: 'Counting Center SI 1',
            CC_NAME_TA: 'Counting Center TM 1',
            CC_TYPE: 'POSTAL',
            ITTERATION_ID: 2,
            DISTRICTCENTERDCID: 1,
            POLLINGDIVISIONPDIVID: 1
        }
    ]

    css.map((cs, i) => {
        countingCenter.create(cs)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create district center dummy data
    const las = [
        {
            LA_NAME_EN: 'Local Authority EN 1',
            LA_NAME_SI: 'Local Authority SI 1',
            LA_NAME_TA: 'Local Authority TM 1',
            ITTERATION_ID: 2
        }
    ]

    las.map((la, i) => {
        localAuthority.create(la)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create district center dummy data
    const wards = [
        {
            WD_NAME_EN: 'Ward EN 1',
            WD_NAME_SI: 'Ward SI 1',
            WD_NAME_TA: 'Ward TM 1',
            ITTERATION_ID: 2,
            LOCALAUTHORITYLAID: 1
        }
    ]

    wards.map((w, i) => {
        ward.create(w)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create district center dummy data
    const pds = [
        {
            PD_NUMBER: 'PD 1',
            ITTERATION_ID: 2,
            COUNTINGCENTRECCID: 1,
            WARDWDID: 1
        },
        {
            PD_NUMBER: 'PD 2',
            ITTERATION_ID: 2,
            COUNTINGCENTRECCID: 1,
            WARDWDID: 1
        }
    ]

    pds.map((p, i) => {
        pollindDistricts.create(p)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    // Create polling station gen dummy data
    const psg = [
        {
            PS_NAME_EN: 'Poling Station 1 En',
            PS_NAME_SI: 'Poling Station 1 En',
            PS_NAME_TA: 'Poling Station 1 En'
        },
        {
            PS_NAME_EN: 'Poling Station 2 En',
            PS_NAME_SI: 'Poling Station 2 En',
            PS_NAME_TA: 'Poling Station 2 En'
        },
        {
            PS_NAME_EN: 'Poling Station 3 En',
            PS_NAME_SI: 'Poling Station 3 En',
            PS_NAME_TA: 'Poling Station 3 En'
        }
    ]

    psg.map((p, i) => {
        pollingStationGen.create(p)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });


    // Create party dummy data
    const pgs = [
        {
            PARTY_NAME_EN: 'Party 1 En',
            PARTY_ABBR_EN: 'Party Abbre 1 En',
            PARTY_SYMBOL_IN_TEXT_EN: 'Party symbol 1 En',
            PARTY_COLOR_EN: 'Party symbol 1 En',
            PARTY_SYMBOL_IN_TEXT_EN: 'Party symbol 1 En'
        },
        {
            PARTY_NAME_EN: 'Party 2 En',
            PARTY_ABBR_EN: 'Party Abbre 2 En',
            PARTY_SYMBOL_IN_TEXT_EN: 'Party symbol 2 En',
            PARTY_COLOR_EN: 'Party symbol 2 En',
            PARTY_SYMBOL_IN_TEXT_EN: 'Party symbol 2 En'
        },
        {
            PARTY_NAME_EN: 'Party 3 En',
            PARTY_ABBR_EN: 'Party Abbre 3 En',
            PARTY_SYMBOL_IN_TEXT_EN: 'Party symbol 3 En',
            PARTY_COLOR_EN: 'Party symbol 3 En',
            PARTY_SYMBOL_IN_TEXT_EN: 'Party symbol 3 En'
        }
    ]

    pgs.map((p, i) => {
        partyGen.create(p)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

    
    // Create polling station dummy data
    const pss = [
        {
            PS_REGISTERED_NORMAL_VOTERS: 1000,
            PS_REGISTERED_POSTAL_VOTERS: 200,
            PS_REGISTERED_DISPLACED_VOTERS: 0,
            PS_REGISTERED_QUARANTINE_VOTERS: 0,
            ITTERATION_ID: 2,
            POLLINGDISTRICTPDID: 1,
            COUNTINGCENTRECCID: 1,
            POLLINGSTATIONGENPSID: 1
        },
        {
            PS_REGISTERED_NORMAL_VOTERS: 1000,
            PS_REGISTERED_POSTAL_VOTERS: 200,
            PS_REGISTERED_DISPLACED_VOTERS: 0,
            PS_REGISTERED_QUARANTINE_VOTERS: 0,
            ITTERATION_ID: 1,
            POLLINGDISTRICTPDID: 1,
            COUNTINGCENTRECCID: 1,
            POLLINGSTATIONGENPSID: 1
        },
        {
            PS_REGISTERED_NORMAL_VOTERS: 1000,
            PS_REGISTERED_POSTAL_VOTERS: 200,
            PS_REGISTERED_DISPLACED_VOTERS: 0,
            PS_REGISTERED_QUARANTINE_VOTERS: 0,
            ITTERATION_ID: 2,
            POLLINGDISTRICTPDID: 2,
            COUNTINGCENTRECCID: 1,
            POLLINGSTATIONGENPSID: 1
        }
    ]

    pss.map((p, i) => {
        pollingStation.create(p)
            .then(

            )
            .catch(
                err => {
                    res.status(500).send({
                        message: err.message || "Error occurs creating of the Itteration Dummy data"
                    }
                    )
                })
    });

// Create party dummy data
const pcps = [
    {
        ITTERATION_ID: 2,
        PARTGENPARTYID : 1,
        ADMINDISTRICTADMINDISID: 1
    },
    {
        ITTERATION_ID: 2,
        PARTGENPARTYID : 2,
        ADMINDISTRICTADMINDISID: 1
    }
]

pollingStation.create(p)
pcps.map((p, i) => {
    provincialCouncilParty.create(p)
        .then(

        )
        .catch(
            err => {
                res.status(500).send({
                    message: err.message || "Error occurs creating of the Itteration Dummy data"
                }
                )
            })
});

// Create party dummy data
const pcip = [
    {
        PARTY_NAME_EN: 'Índipendant Group 1',
        PARTY_ABBR_EN : 'Índipendant Group 1',
        PARTY_SYMBOL_IN_TEXT_EN: 'Índipendant Group 1 Symbol',
        PARTY_COLOR_EN: 'Índipendant Group 1 Color',
        ITTERATION_ID: 2,
        ADMINDISTRICTADMINDISID:1
    },
    {
        PARTY_NAME_EN: 'Índipendant Group 2',
        PARTY_ABBR_EN : 'Índipendant Group 2',
        PARTY_SYMBOL_IN_TEXT_EN: 'Índipendant Group 2 Symbol',
        PARTY_COLOR_EN: 'Índipendant Group 2 Color',
        ITTERATION_ID: 2,
        ADMINDISTRICTADMINDISID:1
    },
    {
        PARTY_NAME_EN: 'Índipendant Group 1',
        PARTY_ABBR_EN : 'Índipendant Group 1',
        PARTY_SYMBOL_IN_TEXT_EN: 'Índipendant Group 1 Symbol',
        PARTY_COLOR_EN: 'Índipendant Group 1 Color',
        ITTERATION_ID: 1,
        ADMINDISTRICTADMINDISID:1
    }

]

pollingStation.create(p)
pcip.map((p, i) => {
    provincialCouncilIndiGroups.create(p)
        .then(

        )
        .catch(
            err => {
                res.status(500).send({
                    message: err.message || "Error occurs creating of the Itteration Dummy data"
                }
                )
            })
});

};
