(function(exports) {

    let total

    function changeTotaller(change) {
        total = 0
        getTotal(change)
        return formatTotal()
    }

    function getTotal(change) {
        for (let i = 0; i < change.length; i++) {
            change[i].includes('p') ? total += converPenceToFloat(change[i]) : total += covertNoteToInteger(change[i])
        }
    }

    function covertNoteToInteger(note) {
        var note = note.substring(1)
        return parseInt(note)
    }

    function converPenceToFloat(coin) {
        var coin = coin.slice(0, -1)
        return parseFloat(coin / 100)
    }

    function formatTotal() {
        return total >= 1 ? `£${total}` : `${total * 100}p`
    }


    module.exports = changeTotaller
})(this)