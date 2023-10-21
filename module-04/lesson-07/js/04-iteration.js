/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// const feedbackSum = feedback.good + feedback.neutral + feedback.bad;

// let sum = 0;

// for(const key in feedback) {
//   const value = feedback[key];
//   sum += value;
// }

// console.log(sum);

// const keys = Object.keys(feedback);

// for (const key of Object.values(feedback)) {
//   console.log(key);
// }

// const cars = [
// {model: "BMW"},
// {model: "AUDI"},
// {model: "VOLVO"},
// {model: "FERARI"}
// ]

// for (const car of cars) {
//   console.log(car.model);  
// }


// const nums = [2,4,41,1,100]

// nums.sort((a, b) => a - b);

// console.log(nums[0], nums[1]);

// let superMinValue = nums[0];
// let minValue = nums[1]; 

// if (superMinValue > minValue) {
//   minValue = nums[0];
//   superMinValue = nums[1];
// }

// for (let i = 2; i < nums.length; i++) {
//   if (superMinValue > nums[i]) {
//     minValue = superMinValue;
//     superMinValue = nums[i];
//   }
// }

// console.log(superMinValue, minValue);


// const entries = Object.entries(feedback);

// for (const entry of Object.entries(feedback)) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(key, value);
// }

// let totalFeedback = 0;

// console.log("totalFeedback: ", totalFeedback);

/**
 * ---------------------------------
 */
// const keys = feedback;
// console.log(keys);

// console.log("totalFeedback: ", totalFeedback);

// const values = feedback;
// console.log(values);

// console.log('totalFeedback: ', totalFeedback);
