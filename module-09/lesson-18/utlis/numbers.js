import { getInitials } from '../utils.js';

export const getRandomNumberFrom = (from = 0) => {
    const initials = getInitials("WDA", "WDWD")
    console.log(initials);

    return Math.random() + from;
}


