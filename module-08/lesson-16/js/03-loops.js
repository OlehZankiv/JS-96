/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: "Kate",
  },
  {
    name: "Alex",
  },
  {
    name: "Mark",
  },
];

/**
 * Без деструктуризації
 */
const names = [];

for (const { name } of users) {
  names.push(name);
}

console.log(names);

/**
 * З деструктуризацією
 */




function createUser({name, age, position, discount, vip}) {
  if (age < 0) age = 0;
  else if (age > 100)  age = 100;

  if (name.length > 1000) name = "Noname"

  return {
    name,
    age,
    position,
    discount,
    vip
  }
};



const createdUser = createUser({
  age: 24,
  name: "Oleh",
  discount: 0.25,
  vip: true,
  position: "Teacher"
});


console.log(createdUser);