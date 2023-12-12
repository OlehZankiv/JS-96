const FEEDBACK_DATA_KEY = "feedback";
// const FEEDBACK_MESSAGE_KEY = "feedback-message"

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

// const initialMessage = localStorage.getItem(FEEDBACK_MESSAGE_KEY);

// if (initialMessage) {
//     textarea.value = initialMessage;
// }



try {
  throw {hello: "WDPWHD"}
} catch(e){
    console.log(e);
}


// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     localStorage.removeItem(FEEDBACK_MESSAGE_KEY);

//     form.reset();
// })

// textarea.addEventListener("input", debounce((event) => {
//     const message = event.target.value;
//     localStorage.setItem(FEEDBACK_MESSAGE_KEY, message);
// }, 250))

const myLocalStorage = {
    get: (key, json = false) => {
        const data = localStorage.getItem(key);

        if (!json) return data;

        try {
            return JSON.parse(data);
        } catch (e) {
            console.error(e);
        }
    },
    set: (key, data, json = false) => {
        localStorage.setItem(key, json ? JSON.stringify(data) : data);
    },
    remove: (key) => {
        localStorage.removeItem(key)
    }
}


const initialFormData = myLocalStorage.get(FEEDBACK_DATA_KEY, true);

Array.from(form.elements).forEach(element => {
    const storageValue = initialFormData[element.name];
    if (storageValue) {
        element.value = storageValue;
    }
})


form.addEventListener("input", debounce(() => {
    const formData = new FormData(form);

    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    })

    myLocalStorage.set(FEEDBACK_DATA_KEY, formObject, true)
}, 250));


form.addEventListener("submit", (event) => {
    event.preventDefault();
    myLocalStorage.remove(FEEDBACK_DATA_KEY);

    form.reset();
});





