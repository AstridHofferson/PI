module.exports = {
  async seed(knex) {
    await knex('covers').insert([
      { title: 'A Abadia de Northanger', image: 'a-abadia-de-northanger.jpg' },
      { title: 'As Crônicas de Nárnia', image: 'as-cronicas-de-narnia.jpg' },
      { title: 'Circo Mecânico Tresaulti', image: 'circo-mecanico-tresaulti.jpg' },
      { title: 'Como Treinar o Seu Dragão', image: 'como-treinar-o-seu-dragao.jpg' },
      { title: 'Duna', image: 'duna.jpg' },
      { title: 'Jane Eyre', image: 'jane-eyre.jpg' },
      { title: 'Jogos Vorazes', image: 'jogos-vorazes.jpg' },
      { title: 'O Hobbit', image: 'o-hobbit.jpg' },
      { title: 'Orgulho e Preconceito', image: 'orgulho-e-preconceito.jpg' },
      { title: 'Rangers - Ruínas de Gorlan', image: 'rangers-ruinas-de-gorlan.jpg' },
      { title: 'A Rainha Vermelha', image: 'rainha-vermelha.jpg' },
    ]);
  } 
}