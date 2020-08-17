var changeConverter = require('../src/changeConverter')

describe('change converter', function() {

    it('will return an array', function() {
        expect(changeConverter() instanceof Array).toBeTruthy()
    })

    it('will return £1 when £1 entered', function() {
        expect(changeConverter(1.00)).toEqual(['£1'])
    })

})