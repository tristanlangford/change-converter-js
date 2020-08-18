(function(exports) {

    let total

    function changeTotaller(change) {
        total = 0
        for (let i = 0; i < change.length; i++) {
            change[i].includes('p') ? total += converPenceToFloat(change[i]) : total += covertNoteToInteger(change[i])
        }
        return total >= 1 ? `£${total}` : `${total * 100}p`
    }

    function covertNoteToInteger(note) {
        var number = note.substring(1)
        return parseInt(number)
    }

    function converPenceToFloat(pence) {
        var float = pence.slice(0, -1)
        return parseFloat(float / 100)
    }


    module.exports = changeTotaller
})(this)