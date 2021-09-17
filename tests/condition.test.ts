import {evaluateCondition, isCondition} from "../src/condition"
import {
    mockData,
    mockEqBooleanCondition,
    mockEqNumberCondition,
    mockEqStringCondition,
    mockGtBooleanCondition,
    mockGteBooleanCondition,
    mockGteNumberCondition,
    mockGteStringCondition,
    mockGtNumberCondition,
    mockGtStringCondition,
    mockIncBooleanCondition,
    mockIncNumberCondition,
    mockIncStringCondition,
    mockLtBooleanCondition,
    mockLteBooleanCondition,
    mockLteNumberCondition,
    mockLteStringCondition,
    mockLtNumberCondition,
    mockLtStringCondition,
    mockMultiAndStatement,
    mockNeqBooleanCondition,
    mockNeqNumberCondition,
    mockNeqStringCondition,
    mockNincBooleanCondition,
    mockNincNumberCondition,
    mockNincStringCondition,
} from "./mocks"

test("detects conditions", () => {
    expect(isCondition(mockEqStringCondition)).toBeTruthy()
    expect(isCondition(mockMultiAndStatement)).toBeFalsy()
})

test("evaluates eq condition", () => {
    expect(evaluateCondition(mockEqStringCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockEqNumberCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockEqBooleanCondition, mockData)).toBeTruthy()
})

test("evaluates neq condition", () => {
    expect(evaluateCondition(mockNeqStringCondition, mockData)).toBeFalsy()
    expect(evaluateCondition(mockNeqNumberCondition, mockData)).toBeFalsy()
    expect(evaluateCondition(mockNeqBooleanCondition, mockData)).toBeFalsy()
})

test("evaluates gt condition", () => {
    expect(evaluateCondition(mockGtStringCondition, mockData)).toBeFalsy()
    expect(evaluateCondition(mockGtNumberCondition, mockData)).toBeFalsy()
    expect(evaluateCondition(mockGtBooleanCondition, mockData)).toBeFalsy()
})

test("evaluates lt condition", () => {
    expect(evaluateCondition(mockLtStringCondition, mockData)).toBeFalsy()
    expect(evaluateCondition(mockLtNumberCondition, mockData)).toBeFalsy()
    expect(evaluateCondition(mockLtBooleanCondition, mockData)).toBeFalsy()
})

test("evaluates gte condition", () => {
    expect(evaluateCondition(mockGteStringCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockGteNumberCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockGteBooleanCondition, mockData)).toBeTruthy()
})

test("evaluates lte condition", () => {
    expect(evaluateCondition(mockLteStringCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockLteNumberCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockLteBooleanCondition, mockData)).toBeTruthy()
})

test("evaluates lte condition", () => {
    expect(evaluateCondition(mockLteStringCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockLteNumberCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockLteBooleanCondition, mockData)).toBeTruthy()
})

test("evaluates inc condition", () => {
    expect(evaluateCondition(mockIncStringCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockIncNumberCondition, mockData)).toBeTruthy()
    expect(evaluateCondition(mockIncBooleanCondition, mockData)).toBeTruthy()
})

test("evaluates ninc condition", () => {
    expect(evaluateCondition(mockNincStringCondition, mockData)).toBeFalsy()
    expect(evaluateCondition(mockNincNumberCondition, mockData)).toBeFalsy()
    expect(evaluateCondition(mockNincBooleanCondition, mockData)).toBeFalsy()
})
