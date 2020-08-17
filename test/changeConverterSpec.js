var changeConverter = require('../src/changeConverter')

describe('change converter', function() {

    it('will return an array', function() {
        expect(changeConverter() instanceof Array).toBeTruthy()
    })

})