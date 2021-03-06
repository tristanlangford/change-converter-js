var changeTotaller = require('../src/changeTotaller')

describe('changeTotaller', function() {

    it('returns £100.00 when £100 is input', function() {
        expect(changeTotaller(['£100'])).toEqual('£100')
    })

    it('totals notes', function() {
        expect(changeTotaller(['£100', '£100'])).toEqual('£200')
    })

    it('totals coins', function() {
        expect(changeTotaller(['2p', '1p'])).toEqual('3p')
    })

    it('handles both notes & coins', function() {
        expect(changeTotaller(['£100', '£100', '2p', '20p'])).toEqual('£200.22')
    })

})