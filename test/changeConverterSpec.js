var changeConverter = require('../src/changeConverter')

describe('change converter', function() {

    it('will return an array', function() {
        expect(changeConverter() instanceof Array).toBeTruthy()
    })

    it('will return £1 when £1 entered', function() {
        expect(changeConverter(1.00)).toEqual(['£1'])
    })

    it('will return £1 & £1 when £2 entered', function() {
        expect(changeConverter(2.00)).toEqual(['£1', '£1'])
    })

    it('will handle large values', function() {
        var change = ['£100', '£20', '£1', '£1', '£1', '50p', '5p', '1p']
        expect(changeConverter(123.56)).toEqual(change)
    })

})