const axios = require("axios");

const getInvoices = async (req, res) => {
    // console.log("query", req.query);
    console.log("body", req.body);    
    try {
        const { data } = await axios.get(`${process.env.RAILZ_BASE_URL}/reports/invoices?businessName=${req.body.businessName}&serviceName=${req.body.serviceName}&startDate=${req.body.startDate}&endDate=${req.body.endDate}`, {
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

const getBills = async (req, res) => {    
    // console.log("query", req.query);
    console.log("body", req.body);    
    try {
        const { data } = await axios.get(`${process.env.RAILZ_BASE_URL}/reports/bills?businessName=${req.body.businessName}&serviceName=${req.body.serviceName}&startDate=${req.body.startDate}&endDate=${req.body.endDate}`, {
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

const getExpenses = async (req, res) => {      
    // console.log("query", req.query);
    console.log("body", req.body);    
    try {
        const { data } = await axios.get(`${process.env.RAILZ_BASE_URL}/reports/expenses?businessName=${req.body.businessName}&serviceName=${req.body.serviceName}&startDate=${req.body.startDate}&endDate=${req.body.endDate}&reportFrequency=${req.body.reportFrequency}`, {
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

const getRevenue = async (req, res) => {      
    // console.log("query", req.query);
    console.log("body", req.body);    
    try {
        const { data } = await axios.get(`${process.env.RAILZ_BASE_URL}/reports/revenue?businessName=${req.body.businessName}&serviceName=${req.body.serviceName}&startDate=${req.body.startDate}&endDate=${req.body.endDate}&reportFrequency=${req.body.reportFrequency}`, {
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
    getInvoices,
    getBills,
    getExpenses,
    getRevenue
}