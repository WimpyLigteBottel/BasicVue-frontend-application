const path = require('path')

module.exports = {
    resolve: ['*', '.js', '.vue', '.json'],
    aslias: {
        /*Allows the the use of '@' in import statements that 
        will automaticly use the src directory as base import
        */
        '@': path.resolve(__dirname, 'src/')
    }
}