/**
 * Синтаксис async/await
 * try...catch
 */

const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });



const fetchTodos2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    return response.json();
  } catch (error) {
    console.log(error);
  }
}




const fetchTodos3 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

fetchTodos2()
  .then(todos => {
    console.log(todos);
  })
  