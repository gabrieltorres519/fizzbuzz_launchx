const fs = require("fs");

class Reader{
    static readJsonFile(path_file_to_read){
        const rawdata = fs.readFileSync(path_file_to_read);
        const explorers = JSON.parse(rawdata);

        return explorers
    }
}

module.exports = Reader