const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SEON-MD=7V0lEJhb#twEzAvXph9B5SV87xEV8bJ3TLXhqHG8rBzK7ALh8jJw' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'prasannakumara': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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': process.env.GITHUB_AUTH_TOKEN
};
