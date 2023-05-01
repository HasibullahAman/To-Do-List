// console.log(module);
module.exports = "Hello World! ";

function getdat() {
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    var day = today.toLocaleString('en-US', options);
    return day;
}