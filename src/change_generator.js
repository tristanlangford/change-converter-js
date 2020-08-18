var changeConverter = require('./changeConverter')
var changeTotaller = require('./changeTotaller')

class ChangeGenerator {
    constructor(convert = changeConverter, total = changeTotaller) {
        this._convert = convert
        this._total = total
    }

    convert(change) {
        return this._convert(change)
    }

    total(change) {
        return this._total(change)
    }

}

module.exports = ChangeGenerator