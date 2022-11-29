const func = require('./function')
const yargs = require('yargs');
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
    handler(argv){
        const contact = {
            name:argv.name,
            email:argv.email,
            mobile:argv.mobile,

        };
        func.savedata(argv.name,argv.email,argv.mobile)
        console.log(contact);
    },
})
yargs.parse()