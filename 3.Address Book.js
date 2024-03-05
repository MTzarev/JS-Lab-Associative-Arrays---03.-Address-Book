function addressBook(input) {

    let adressList = {};
    for (let list of input) {
        let separator = list.indexOf(`:`);
        let name = list.substring(0, separator);
        let adress = list.substring(separator + 1, list.length)
        adressList[name] = adress;
        //console.log(adress);
    }
    let toSort = [];
    for (let name in adressList) {
        toSort.push(`${name} -> ${adressList[name]}`);
    }
    console.log(toSort.sort().join(`\n`));
}
// addressBook(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);