exports = () => {
    let today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    var day = today.toLocaleString('en-US', options);
    return day;
}

exports.getday = () => {
    let today = new Date();
    var options = {
        weekday: 'long',
    }

    var day = today.toLocaleString('en-US', options);
    return day;
}