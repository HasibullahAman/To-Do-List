// console.log(module);
module.exports = getdat;

function getdat() {
    let today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    var day = today.toLocaleString('en-US', options);
    return day;
}