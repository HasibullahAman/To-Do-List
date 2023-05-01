module.exports.getdate = function() {
    let today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    return today.toLocaleString('en-US', options);
}

module.exports.getday = function() {
    let today = new Date();
    var options = {
        weekday: 'long',
    }

    return today.toLocaleString('en-US', options);
}