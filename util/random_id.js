exports.generateIdId = count => {

    let _sym = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let str = ''

    for(var i = 0; i < count; i++) {
        str += _sym[parseInt(Math.random() * (_sym.length))]
    }

    return str

}