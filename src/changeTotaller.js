(function(exports) {

    let total

    function changeTotaller(change) {
        total = 0
        for (let i = 0; i < change.length; i++) {
            total += covertNoteToInteger(change[i])
        }
        return `£${total}`
    }

    function covertNoteToInteger(note) {
        var number = note.substring(1)
        return parseInt(number)
    }


    module.exports = changeTotaller
})(this)