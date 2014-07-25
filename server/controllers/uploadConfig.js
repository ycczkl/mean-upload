
exports.multerConfig = exports = {
    dest: "./packages/photos",

    // Or, use original return
    rename: function (fieldname, filename) {
        // default name is a md5 string
        return fieldname + filename + Date.now();
    },
    limits: {
        fieldSize: 3,  // 3M limit
        files: 10
    },

    onFileSizeLimit: function (file) {
        require('fs').unlink('./' + file.path) // delete partially written file
        res.send('File should not excels size limits (3M) ');
    }

    // Other configuration goes here ...
};