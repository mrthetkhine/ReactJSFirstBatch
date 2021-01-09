const fs = require('fs');

fs.copyFile('number.txt','number2.txt',fs.constants.COPYFILE_EXCL,err=>{
    if(err)
    {
        console.log('Problem copy ',err);
    }
    else
    {
        console.log('Copy success');
        fs.unlinkSync("number.txt");
    }
});