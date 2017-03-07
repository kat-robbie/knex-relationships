exports.seed = function (knex, Promise) {
  return knex('profile').del()
    .then(function () {
      return Promise.all([
        knex('profile').insert({users_id: 99901, interests: 'acrobatics', location: 'Auckland', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99902, interests: 'badminton', location: 'Brisbane', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99903, interests: 'cricket', location: 'Christchurch', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99904, interests: 'diving', location: 'Dunedin', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99905, interests: 'equestrian', location: 'Edmonton', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99906, interests: 'figure skating', location: 'Finland', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99907, interests: 'go karting', location: 'Gisbourne', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99908, interests: 'hand gliding', location: 'Helisinki', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99909, interests: 'igloo building', location: 'Invercargill', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99910, interests: 'jousting', location: 'Johanesburg', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99911, interests: 'kite surfing', location: 'Kenya', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99912, interests: 'lego', location: 'London', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99913, interests: 'mountain biking', location: 'Mount Maunganui', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99914, interests: 'nudie dash', location: 'Nelson', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99915, interests: 'open source programming', location: 'Opotiki', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99916, interests: 'pole vault', location: 'Paris', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99917, interests: 'questing', location: 'Queenstown', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99918, interests: 'rugby', location: 'Rotorua', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99919, interests: 'soccer', location: 'Scotland', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99920, interests: 'trampolining', location: 'Tokyo', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99921, interests: 'underwater hockey', location: 'Ubekistan', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99922, interests: 'video gaming', location: 'Venice', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99923, interests: 'waterpolo', location: 'Wellington', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99924, interests: 'xylophoning', location: 'Xiamen', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99925, interests: 'yachting', location: 'York', phone_number: 0800111222}),
        knex('profile').insert({users_id: 99926, interests: 'zebra racing', location: 'Zambia', phone_number: 0800111222})
      ]);
    });
};
