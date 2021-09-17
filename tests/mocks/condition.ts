import {Condition} from "../../src/condition"

// eq
const mockEqStringCondition: Condition = {
    key: "string",
    value: "one",
    logic: "eq",
}

const mockEqNumberCondition: Condition = {
    key: "number",
    value: 1,
    logic: "eq",
}

const mockEqBooleanCondition: Condition = {
    key: "boolean",
    value: true,
    logic: "eq",
}

// neq
const mockNeqStringCondition: Condition = {
    key: "string",
    value: "one",
    logic: "neq",
}

const mockNeqNumberCondition: Condition = {
    key: "number",
    value: 1,
    logic: "neq",
}

const mockNeqBooleanCondition: Condition = {
    key: "boolean",
    value: true,
    logic: "neq",
}

// gt
const mockGtStringCondition: Condition = {
    key: "string",
    value: "one",
    logic: "gt",
}

const mockGtNumberCondition: Condition = {
    key: "number",
    value: 1,
    logic: "gt",
}

const mockGtBooleanCondition: Condition = {
    key: "boolean",
    value: true,
    logic: "gt",
}

// lt
const mockLtStringCondition: Condition = {
    key: "string",
    value: "one",
    logic: "lt",
}

const mockLtNumberCondition: Condition = {
    key: "number",
    value: 1,
    logic: "lt",
}

const mockLtBooleanCondition: Condition = {
    key: "boolean",
    value: true,
    logic: "lt",
}

// gte
const mockGteStringCondition: Condition = {
    key: "string",
    value: "one",
    logic: "gte",
}

const mockGteNumberCondition: Condition = {
    key: "number",
    value: 1,
    logic: "gte",
}

const mockGteBooleanCondition: Condition = {
    key: "boolean",
    value: true,
    logic: "gte",
}

// lte
const mockLteStringCondition: Condition = {
    key: "string",
    value: "one",
    logic: "lte",
}

const mockLteNumberCondition: Condition = {
    key: "number",
    value: 1,
    logic: "lte",
}

const mockLteBooleanCondition: Condition = {
    key: "boolean",
    value: true,
    logic: "lte",
}

// inc
const mockIncStringCondition: Condition = {
    key: "strings",
    value: "one",
    logic: "inc",
}

const mockIncNumberCondition: Condition = {
    key: "numbers",
    value: 1,
    logic: "inc",
}

const mockIncBooleanCondition: Condition = {
    key: "booleans",
    value: true,
    logic: "inc",
}

// ninc
const mockNincStringCondition: Condition = {
    key: "strings",
    value: "one",
    logic: "ninc",
}

const mockNincNumberCondition: Condition = {
    key: "numbers",
    value: 1,
    logic: "ninc",
}

const mockNincBooleanCondition: Condition = {
    key: "booleans",
    value: true,
    logic: "ninc",
}

export {
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
    mockNeqBooleanCondition,
    mockNeqNumberCondition,
    mockNeqStringCondition,
    mockNincBooleanCondition,
    mockNincNumberCondition,
    mockNincStringCondition,
}
