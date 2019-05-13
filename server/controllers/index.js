const models = require('../models');
const poemTemplate = require('../poems');

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
                const body = req.body;
                if (body) {
                    const template = poemTemplate.poem(body);
                    await models.poem.post(template, body.timeStamp);
                    res.sendStatus(200)
                } else {
                    res.sendStatus(422);
                }
            } catch (err) {
                res.sendStatus(400);
            }
        },

        delete: async (req, res) => {
            try {
                const poemId = req.params.id
                const query = await models.poem.delete(poemId);
                if (query.affectedRows === 0) {
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
                const body = req.body;
                const query = await models.poem.update(poemId, body);
                if (query.changedRows === 0) {
                    res.sendStatus(404);
                } else {
                    res.sendStatus(200);
                }
            } catch (err) {
                res.sendStatus(400);
            }
        }


    },

    poems: {
        get: async (req, res) => {
            try {
                const query = await models.poems.get();
                res.send(query.reverse());
            } catch (err) {
                res.sendStatus(400);
            }
        }
    }
}