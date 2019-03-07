function isNum(value) {
    return (typeof value === 'number') && !isNaN(parseFloat(value)) && isFinite(value); 
}


function isFinite(value) {
    return (typeof value === 'number') && !isNaN(parseFloat(value)) && isFinite(value); 
}


module.exports = {
    isNum,
}