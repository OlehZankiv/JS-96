/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector(".container");


container.addEventListener("click", (event) => {
    const userId = event.target.dataset.id;

    if (userId) {
        console.log("You've clickend on user: " + userId);
    } else {

        new Calendar({
            id: "#color-calendar",
            theme: "basic",
            primaryColor: "#1a237e",
            weekdayType: "short",
            border: "5px solid rgba(4, 64, 160, 0.1)",
            eventsData: [
              {
                id: 1,
                name: "French class",
                start: "2020-12-07T06:00:00",
                end: "2020-12-09T20:30:00"
              },
              {
                id: 2,
                name: "Blockchain 101",
                start: "2020-12-20T10:00:00",
                end: "2020-12-20T11:30:00"
              }
            ]
          });
          
    }
});






/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
