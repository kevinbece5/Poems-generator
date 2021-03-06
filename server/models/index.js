const mysql = require('../db').db

module.exports = {
    poems: {
        get: async () => {
            try {
                return await mysql.queryAsync('SELECT * FROM poems.poems');
            } catch (err) {
                throw err;
            }
        }
    },

    poem: {
        get: async (id) => {
            try {
                return await mysql.queryAsync(`SELECT * FROM poems.poems WHERE id = ${id}`)
            } catch (err) {
                throw err;
            }
        },

        post: async (poem, timeStamp) => {
            try {
                return await mysql.queryAsync(`INSERT INTO poems.poems (poem, timeStamp) VALUES ('${poem}', '${timeStamp}')`)
            } catch (err) {
                throw err;
            }
        },

        update: async (id, body) => {
            try {
                return await mysql.queryAsync(`UPDATE poems.poems SET poem = '${body.poem}', timeStamp = '${body.timeStamp}' WHERE id = ${id}`);
            } catch (err) {
                throw err;
            }
        },

        delete: async (id) => {
            try {
                return await mysql.queryAsync(`DELETE FROM poems.poems WHERE id = ${id}`);
            } catch (err) {
                throw err;
            }
        }
    }
}