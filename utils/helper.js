const assert = function(condition, message) {
    if (!condition)
        throw Error('Assertion failed: ' + (message || ''));
};

module.exports = {
    assert
}