//memanggil module readline untuk input
const readline = require('readline');
//mendeklarasikan input output 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//memanggil module validator
const validator = require('validator');

//memanggil module fs(fileSystem)
const fs = require('fs');
const { default: test } = require('node:test');

//membuat logika apabila folder belum ada, berati dibikin
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    //membuat folder
    fs.mkdirSync(dirPath);
}

//membuat logika apakah file constacts.json sudah dibuat atau belum
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
    //membuat file
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

//membuat fungsi qustion
const questionss = (questions) => {
    return new Promise((resolve, reject) => {
        //membuat pertanyaan
        rl.question(questions, (answer) => {
            //mengembalikan nilai answer
            resolve(answer)
        })
    })
}

//membuat fungsi menyimpan data ke json apabila data benar menggunakan validator
const savedata = (name,email,tlp) =>{
    if(!validator.isAlpha(name,'en-US',{ignore: ' '})== true){
        console.log('Your name is wrong format');
        rl.close()
        return(false)
    }
    if (!validator.isEmail(email) == true) {
        console.log('Your email is wrong format');
        rl.close()
        return(false)
    }
    if (!validator.isMobilePhone(tlp, 'id-ID') == true) {
        console.log('Your number phone is wrong format');
        rl.close()
        return(false)
    }
    //mendeklarasikan variable untuk menampung nilai
    const contact = { name, email, tlp };
        //membaca file JSON
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        //mengubah file txt menjadi format JSON
        const contacts = JSON.parse(file);
        //memasukan data kedalam format json
        contacts.push(contact);
        //menuliskan data kedalam file contacts.json
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        //menampilkan hasil ke layar
        console.log(`Your name         : ${name}`);
        console.log(`Your Email        : ${email}`);
        console.log(`Your phone number : ${tlp}`);

        //menutup program
        rl.close()
}

//mengekspor fungsi
module.exports = {questionss,savedata}