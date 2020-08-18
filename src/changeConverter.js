(function(exports) {

    const changeOptions = [
        100.00,
        50.00,
        20.00,
        10.00,
        5.00,
        1.00,
        0.50,
        0.20,
        0.10,
        0.05,
        0.02,
        0.01
    ]

    let total
    
    let change 

    function changeConverter(amount = 0) {
        change = []
        convertAmountToChange(amount)
        return change
    }

    function convertAmountToChange(amount) {
        total = parseFloat(amount)
        var index = 0
        while (total > 0.009) {
            total >= changeOptions[index] ? addChange(index) : index ++
        }
    }

    function formatChange(float) {
        return float >= 1 ? `£${float}` : `${float * 100}p`
    }

    function addChange(index) {
        change.push(formatChange(changeOptions[index]))
                total -= changeOptions[index]
                total = total.toFixed(2)
    }


    module.exports = changeConverter
})(this)