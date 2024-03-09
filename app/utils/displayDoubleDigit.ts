export const displayDoubleDigits = (value: number): string => {
    const roundedValue = Math.floor(value);

    return roundedValue >= 10 ? `${roundedValue}` : `0${roundedValue}`;
};
