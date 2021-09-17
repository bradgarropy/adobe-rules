import {evaluate} from "../src"
import {isStatement} from "../src/statement"
import {
    mockData,
    mockEqStringCondition,
    mockMultiAndStatement,
    mockMultiOrStatement,
    mockNestedStatement,
} from "./mocks"

test("detects statements", () => {
    expect(isStatement(mockEqStringCondition)).toBeFalsy()
    expect(isStatement(mockMultiAndStatement)).toBeTruthy()
})

test("evaluates multi statement", () => {
    expect(evaluate(mockMultiAndStatement, mockData)).toBeFalsy()
    expect(evaluate(mockMultiOrStatement, mockData)).toBeTruthy()
})

test("evaluates nested statement", () => {
    expect(evaluate(mockNestedStatement, mockData)).toBeTruthy()
})
