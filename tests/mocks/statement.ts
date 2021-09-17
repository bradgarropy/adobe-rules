import {Statement} from "../../src/statement"
import {mockEqStringCondition, mockNeqStringCondition} from "./condition"

const mockMultiAndStatement: Statement = {
    combinator: "and",
    conditions: [mockEqStringCondition, mockNeqStringCondition],
}

const mockMultiOrStatement: Statement = {
    combinator: "or",
    conditions: [mockEqStringCondition, mockNeqStringCondition],
}

const mockNestedStatement: Statement = {
    combinator: "and",
    conditions: [mockEqStringCondition, mockMultiOrStatement],
}

export {mockMultiAndStatement, mockMultiOrStatement, mockNestedStatement}
