const Service = require('egg').Service;

class ArticleService extends Service {
    async create(params) {
        const { app } = this;
        try {
            const result = await app.mysql.insert('article', params)
            return result;
        } catch (error) {
            console.log(error)
            return error
        }

    }

    async lists() {
        const { app } = this;
        try {
            const result = await app.mysql.select('article')
            return result;
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async detail(id) {
        if (!id) {
            console.log('id必须传递')
            return null;
        }
        const { app } = this;
        try {
            const result = await app.mysql.get('article', { id });
            return result;
        } catch (error) {
            console.log(error)
            return error
        }
    }
}

module.exports = ArticleService