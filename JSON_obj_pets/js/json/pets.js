const pets = [
  {
    "id": 1,
    "name": "Siamese",
    "price": 100,
    "quantity": 5,
    "age": 3,
    "weight": 10,
    "color": "multicolored",
    "lifetime": 10,
    "rapacity": true,
    "type": "cat",
    "gender": "male",
    "fur": "middle",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": false,
    "lopiness": false
  },
  {
    "id": 2,
    "name": "Siamese",
    "price": 150,
    "quantity": 2,
    "age": 3,
    "weight": 10,
    "color": "multicolored",
    "lifetime": 10,
    "rapacity": true,
    "type": "cat",
    "gender": "female",
    "fur": "middle",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": false,
    "lopiness": false
  },
  {
    "id": 3,
    "name": "Scottish",
    "price": 200,
    "quantity": 2,
    "age": 1,
    "weight": 15,
    "color": "blue",
    "lifetime": 10,
    "rapacity": true,
    "type": "cat",
    "gender": "female",
    "fur": "short",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": false,
    "lopiness": true
  },
  {
    "id": 4,
    "name": "Persian",
    "price": 300,
    "quantity": 1,
    "age": 2,
    "weight": 15,
    "color": "ginger",
    "lifetime": 15,
    "rapacity": true,
    "type": "cat",
    "gender": "male",
    "fur": "long",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": false,
    "lopiness": false
  },
  {
    "id": 5,
    "name": "Sphinx",
    "price": 400,
    "quantity": 3,
    "age": 1,
    "weight": 7,
    "color": "body",
    "lifetime": 20,
    "rapacity": true,
    "type": "cat",
    "gender": "male",
    "fur": "bald",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": false,
    "lopiness": false
  },
  {
    "id": 6,
    "name": "Sphinx",
    "price": 500,
    "quantity": 3,
    "age": 1,
    "weight": 7,
    "color": "body",
    "lifetime": 20,
    "rapacity": true,
    "type": "cat",
    "gender": "female",
    "fur": "bald",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": false,
    "lopiness": false
  },
  {
    "id": 7,
    "name": "Munchkin",
    "price": 500,
    "quantity": 3,
    "age": 1,
    "weight": 7,
    "color": "multicolored",
    "lifetime": 17,
    "rapacity": true,
    "type": "cat",
    "gender": "female",
    "fur": "long",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": true,
    "lopiness": false
  },
  {
    "id": 8,
    "name": "Shepherd",
    "price": 250,
    "quantity": 1,
    "age": 2,
    "weight": 35,
    "color": "black",
    "lifetime": 15,
    "rapacity": true,
    "type": "dog",
    "gender": "female",
    "fur": "long",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": false,
    "specialization": "security"
  },
  {
    "id": 9,
    "name": "Shepherd",
    "price": 250,
    "quantity": 1,
    "age": 2,
    "weight": 35,
    "color": "black",
    "lifetime": 15,
    "rapacity": true,
    "type": "dog",
    "gender": "male",
    "fur": "long",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": false,
    "specialization": "security"
  },
  {
    "id": 10,
    "name": "Alabai",
    "price": 500,
    "quantity": 1,
    "age": 2,
    "weight": 80,
    "color": "white",
    "lifetime": 15,
    "rapacity": true,
    "type": "dog",
    "gender": "male",
    "fur": "short",
    "pedigree": true,
    "dockedTail": true,
    "shortPaws": false,
    "specialization": "security"
  },
  {
    "id": 11,
    "name": "Dachshund",
    "price": 200,
    "quantity": 3,
    "age": 1,
    "weight": 20,
    "color": "ginger",
    "lifetime": 20,
    "rapacity": true,
    "type": "dog",
    "gender": "male",
    "fur": "short",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": true,
    "specialization": "hunting"
  },
  {
    "id": 12,
    "name": "Dachshund",
    "price": 300,
    "quantity": 5,
    "age": 1,
    "weight": 20,
    "color": "ginger",
    "lifetime": 20,
    "rapacity": true,
    "type": "dog",
    "gender": "female",
    "fur": "short",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": true,
    "specialization": "hunting"
  },
  {
    "id": 13,
    "name": "Сhihuahua",
    "price": 300,
    "quantity": 1,
    "age": 2,
    "weight": 3,
    "color": "body",
    "lifetime": 10,
    "rapacity": true,
    "type": "dog",
    "gender": "female",
    "fur": "bald",
    "pedigree": true,
    "dockedTail": false,
    "shortPaws": false,
    "specialization": "decorative"
  },
  {
    "id": 14,
    "name": "Bulldog",
    "price": 400,
    "quantity": 1,
    "age": 1,
    "weight": 50,
    "color": "multicolored",
    "lifetime": 10,
    "rapacity": true,
    "type": "dog",
    "gender": "male",
    "fur": "short",
    "pedigree": true,
    "dockedTail": true,
    "shortPaws": false,
    "specialization": "fighting"
  },
  {
    "id": 15,
    "name": "Swordfish",
    "price": 20,
    "quantity": 10,
    "age": 1,
    "weight": 1,
    "color": "red",
    "lifetime": 5,
    "rapacity": false,
    "type": "fish",
    "gender": "male",
    "freshwater": true,
    "zone": "top"
  },
  {
    "id": 16,
    "name": "Swordfish",
    "price": 30,
    "quantity": 15,
    "age": 1,
    "weight": 1,
    "color": "red",
    "lifetime": 5,
    "rapacity": false,
    "type": "fish",
    "gender": "female",
    "freshwater": true,
    "zone": "top"
  },
  {
    "id": 17,
    "name": "catfish",
    "price": 50,
    "quantity": 1,
    "age": 3,
    "weight": 1,
    "color": "black",
    "lifetime": 15,
    "rapacity": false,
    "type": "fish",
    "gender": "female",
    "freshwater": true,
    "zone": "bottom"
  },
  {
    "id": 18,
    "name": "gourami",
    "price": 100,
    "quantity": 3,
    "age": 2,
    "weight": 1,
    "color": "blue",
    "lifetime": 15,
    "rapacity": false,
    "type": "fish",
    "gender": "female",
    "freshwater": true,
    "zone": "middle"
  },
  {
    "id": 19,
    "name": "gourami",
    "price": 100,
    "quantity": 3,
    "age": 2,
    "weight": 1,
    "color": "silver",
    "lifetime": 15,
    "rapacity": false,
    "type": "fish",
    "gender": "female",
    "freshwater": true,
    "zone": "middle"
  },
  {
    "id": 20,
    "name": "Imperial angel",
    "price": 500,
    "quantity": 1,
    "age": 1,
    "weight": 1,
    "color": "multicolor",
    "lifetime": 10,
    "rapacity": true,
    "type": "fish",
    "gender": "female",
    "freshwater": false,
    "zone": "middle"
  },
  {
    "id": 21,
    "name": "Zebrasoma",
    "price": 500,
    "quantity": 1,
    "age": 1,
    "weight": 1,
    "color": "yellow",
    "lifetime": 10,
    "rapacity": true,
    "type": "fish",
    "gender": "female",
    "freshwater": false,
    "zone": "middle"
  },
  {
    "id": 22,
    "name": "parrot Agapornis",
    "price": 50,
    "quantity": 7,
    "age": 1,
    "weight": 100,
    "color": "yellow",
    "lifetime": 10,
    "rapacity": false,
    "type": "bird",
    "gender": "female",
    "canfly": true,
    "canSpeak": false,
    "canSing": false
  },
  {
    "id": 23,
    "name": "parrot Agapornis",
    "price": 100,
    "quantity": 3,
    "age": 1,
    "weight": 100,
    "color": "green",
    "lifetime": 10,
    "rapacity": false,
    "type": "bird",
    "gender": "female",
    "canfly": true,
    "canSpeak": false,
    "canSing": false
  },
  {
    "id": 24,
    "name": "parrot cockatoo",
    "price": 500,
    "quantity": 1,
    "age": 1,
    "weight": 500,
    "color": "white",
    "lifetime": 25,
    "rapacity": false,
    "type": "bird",
    "gender": "male",
    "canfly": true,
    "canSpeak": false,
    "canSing": true
  },
  {
    "id": 25,
    "name": "parrot cockatoo",
    "price": 500,
    "quantity": 1,
    "age": 1,
    "weight": 700,
    "color": "white",
    "lifetime": 25,
    "rapacity": false,
    "type": "bird",
    "gender": "female",
    "canfly": true,
    "canSpeak": false,
    "canSing": true
  }
];

export { pets };