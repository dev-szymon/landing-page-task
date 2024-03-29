/**
 * @param {nubmer} value number which will be converted into double digit string.
 * @returns {string} string representation of input number always displayed as double digit.
 *
 * @example displayDoubleDigits(1) // `01`
 * @example displayDoubleDigits(12) // `12`
 */
export const displayDoubleDigits = (value: number): string => {
    if (value > 99) throw new Error("expected at most double digit number");

    const roundedValue = Math.floor(value);

    return roundedValue >= 10 ? `${roundedValue}` : `0${roundedValue}`;
};
