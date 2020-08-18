var ChangeGenerator = require('../src/change_generator')

describe('ChangeGenerator', function() {
    var changeConverter = function(array) { return "called" }
    let changeTotaller = function(array) { return "called" }
    let changeGenerator 

    beforeEach(function() {
        changeGenerator = new ChangeGenerator(changeConverter, changeTotaller)
    })

    it('calls on changeConverter', function() {
        expect(changeGenerator.convert(['£10'])).toEqual("called")
    })

    it('calls on changeTotaller', function() {
        expect(changeGenerator.total(['£10'])).toEqual("called")
    })

})