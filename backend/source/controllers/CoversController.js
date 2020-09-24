const knex = require('../database/connection');


module.exports = {
  async index(request, response) {
    const covers = await knex('covers').select('*');
  
    const serializedItems = covers.map(cover => {
      return {
        id: cover.id,
        title: cover.title,
        image_url: `http://localhost:3333/uploads/${cover.image}`
      };
    });
    
    return response.json(serializedItems);
  }
}
