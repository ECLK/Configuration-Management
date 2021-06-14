const db = require('../models');
const itteration = db.itteration;
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
                iterid = x.ITERATION_ID;
            })
            if (iterid > 0) {
                let q = `SELECT province.PROVINCE_NAME_EN, admin_district.ADMIN_DIS_NAME_EN, district_center.DC_EN, counting_centre.CC_NAME_EN, counting_centre.CC_TYPE FROM counting_centre INNER JOIN district_center ON counting_centre.DISTRICTCENTERDCID = district_center.DC_ID INNER JOIN polling_division ON counting_centre.POLLINGDIVISIONPDIVID=polling_division.PDIV_ID INNER JOIN admin_district ON polling_division.ADMINDISTRICTADMINDISID=admin_district.ADMIN_DIS_ID INNER JOIN electoral_district ON admin_district.ELECTORALDISTRICTEDID=electoral_district.ED_ID INNER JOIN province ON electoral_district.PROVINCEPROVINCEID = province.PROVINCE_ID WHERE counting_centre.CC_TYPE='POSTAL' AND counting_centre.ITTERATION_ID=` + iterid;
                sequelize.query(q.trim(), { type: QueryTypes.SELECT })
                    .then(data => {
                        console.log(data)
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || 'Active itteration not found'
                        })
                    })
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

