module.exports = {
    website: {
        assets: './assets',
        js: [
            'plugin.js'
        ],
        css: [
            'plugin.css'
        ]
    },
    blocks: {
        hema: {
            process: function (block) {
                return "Hello " + block.body + ", How are you?";
            }
        }
    }
};