import {describe, expect, test} from "@jest/globals";
import {displayDoubleDigits} from "./displayDoubleDigit";

describe("displayDoubleDigit", () => {
    const testCases: {given: number; want: string}[] = [
        {given: 0, want: "00"},
        {given: 2, want: "02"},
        {given: 10, want: "10"},
        {given: 12, want: "12"}
    ];

    testCases.forEach(({given, want}) => {
        test(`given: ${given}, expect: ${want}`, () => {
            expect(displayDoubleDigits(given)).toBe(want);
        });
    });

    test(`given: 102, expect: error`, () => {
        const given = () => displayDoubleDigits(102);
        expect(given).toThrowError();
    });
});
