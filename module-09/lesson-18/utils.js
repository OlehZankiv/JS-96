// named export
const defaultInitials = "00";

export const getInitials = (name, surname) => {
    return (name[0] + surname[0]).toUpperCase();
}

// default export

export default getInitials;