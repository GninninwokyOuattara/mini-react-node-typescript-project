const isValidInput = (price: string) => {
    return !isNaN(parseInt(price));
};

export default isValidInput;
