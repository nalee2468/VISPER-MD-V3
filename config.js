const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.VISPER-MD&2hB0HByI#ZIl-419y_BWB4--ug8zGZOlrE2fWxgiLoGmnRGBkpDQ === undefined ? 'PUT SESSION ID HERE' : process.env.VISPER-MD&2hB0HByI#ZIl-419y_BWB4--ug8zGZOlrE2fWxgiLoGmnRGBkpDQ, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,    
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'vispermd' : process.env.SESSION_NAME, 

};

