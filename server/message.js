var message = 'hey';

function getTheMessage() {
    return message;
}

function getTheMessageAsync(callback) {
    setTimeout(function() {
        message = "Async - Hello Benjamin after 3 seconds";
        callback(null, message)
    }, 3000);
}

module.exports = {
    get: getTheMessage,
    getAsync: getTheMessageAsync
};
