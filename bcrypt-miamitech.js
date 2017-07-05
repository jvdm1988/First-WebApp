const bcrypt = require("bcrypt");


// sync means synchronous version of this encryption
// 10 means level of secureness in encrypting password 1- 31
// 1 is really fast and not so secure and 31 is really slow and very secure
const salt1 = bcrypt.genSaltSync(10);

const encryptedPass1 = bcrypt.hashSync("swordfish", salt1);




const salt2 = bcrypt.genSaltSync(10);

const encryptedPass2 = bcrypt.hashSync("blah", salt2);
