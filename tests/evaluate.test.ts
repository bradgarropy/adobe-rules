import {evaluate} from "../src"
import {mockData, mockEqStringCondition, mockMultiAndStatement} from "./mocks"

test("evaluates condition", () => {
    expect(evaluate(mockEqStringCondition, mockData)).toBeTruthy()
})

test("evaluates statement", () => {
    expect(evaluate(mockMultiAndStatement, mockData)).toBeFalsy()
})
