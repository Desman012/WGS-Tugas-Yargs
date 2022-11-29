//memanggil local module yang bernama 'function.js'
const func = require('./function')
//memanggil module yargs 
const yargs = require('yargs');
//membuat perintah yargs
yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder:{
        name:{
        describe:'contact Name',
        demandOption: true,
        type:'string',
    },
    email: {
        describe:'contact Email',
        demandOption:false,
        type:'string',
    },
    mobile: {
        describe:'contact mobile phone number',
        demandOption:true,
        type:'string',
    },
},
    //apabila program berhasil, maka akan menjalankan perintah selanjutnya
    handler(argv){
        //membuat variable untuk menyimpan data nama, email, mobile
        const contact = {
            name:argv.name,
            email:argv.email,
            mobile:argv.mobile,

        };
        //memanggil function menyimpan data ke json
        func.savedata(argv.name,argv.email,argv.mobile)
        //menampilkan data ke terminal
        console.log(contact);
    },
})
yargs.parse()
