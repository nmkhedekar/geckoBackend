const axios = require("axios");

const getBankAccounts = async (req, res) => {          
    // console.log("query", req.query);
    console.log("body", req.body);    
    try {
        const { data } = await axios.get(`${process.env.RAILZ_BASE_URL}/bankAccounts?businessName=${req.body.businessName}&serviceName=${req.body.serviceName}`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.RAILZ_ACCESS_TOKEN}`
            }
        });
        res.status(200).json({ msg: "success", data });
    } catch (error) {
        res.json({ msg: "failed", Error: error });
    }
}

module.exports = {
    getBankAccounts
}