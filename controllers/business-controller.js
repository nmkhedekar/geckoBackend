const axios = require("axios");

const getBusinesses = async (req, res) => {    
    try {
        const { data } = await axios.get(`${process.env.RAILZ_BASE_URL}/businesses?businessName=${req.body.businessName}`, {
            headers: {
                accept: 'application/json',
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtSWQiOjY5OSwiY3VzdG9tZXJTZWNyZXRJZGVudGlmaWVyIjoiSURfUFJPRF81QjMzM0QzQ0QzRDE0RkQ3QTZDMjlFNEYyRkE0MjVFQyIsInNhbmRib3giOmZhbHNlLCJuYW1lIjoiYWNjZXNzIiwiYmV0YSI6ZmFsc2UsImlhdCI6MTY3ODQ1MzUzMSwiZXhwIjoxNjc4NDU3MTMxLCJhdWQiOiJhcGkifQ.PEQnFBb8KkRXZF_CjallIUgw5MJysPjnvH9EqaOXOEo`
            }
        });
        res.status(200).json({ msg: "success", data });
    } catch (error) {
        res.json({ msg: "failed", Error: error });
    }
}
    

module.exports = {
    getBusinesses,
}