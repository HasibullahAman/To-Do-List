function getdat() {
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    var day = today.toLocaleString('en-US', options);
    return day;
}