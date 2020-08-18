var ChangeGenerator = require('../src/change_generator')

describe('change_generator', function() {
    var changeConverter = function(array) { return "called" }
    let changeTotaller = function() {}
    let changeGenerator 

    beforeEach(function() {
        changeGenerator = new ChangeGenerator(changeConverter, changeTotaller)
    })

    it('calls on changeConverter', function() {
        expect(changeGenerator.convert(['£10'])).toEqual("called")
    })

})