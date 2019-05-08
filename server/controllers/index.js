const models = require('../models');

module.exports = {
    poem: {
        get: async (req, res) => {
            try {
                const poemId = req.params.id
                const query = await models.poem.get(poemId);
                if (!query.length) {
                    res.sendStatus(404);
                } else {
                    res.send(query)
                }
            } catch (err) {
                res.sendStatus(400);
            }
        },

        post: async (req, res) => {
            try {
                const body = req.body.poem;
                if (body) {
                    await models.poem.post(body);
                    res.sendStatus(200)
                } else {
                    res.sendStatus(400);
                }
            } catch (err) {
                res.sendStatus(400);
            }
        },

        delete: async (req, res) => {
            try {
                const poemId = req.params.id
                const query = await models.poem.delete(poemId);
                if (query.changedRows === 0) {
                    res.sendStatus(404);
                } else {
                    res.sendStatus(200);
                }
            } catch (err) {
                res.sendStatus(400);
            }
        },

        update: async (req, res) => {
            try {
                const poemId = req.params.id;
                const body = req.body.poem;
                const query = await models.poem.update(poemId, body);
                if (query.changedRows === 0) {
                    res.sendStatus(404);
                } else {
                    res.sendStatus(200);
                }
            } catch (err) {
                res.sendStatus(404);
            }
        }


    },

    poems: {
        get: async (req, res) => {
            const query = await models.poems.get();
            res.send(query);
        }
    }
}