import {Condition, DataValue, evaluateCondition} from "./condition"
import {evaluateStatement, isStatement, Statement} from "./statement"

type Data = Record<string, DataValue | DataValue[]>

const evaluate = (rule: Statement | Condition, data: Data): boolean => {
    if (isStatement(rule)) {
        return evaluateStatement(rule as Statement, data)
    }

    return evaluateCondition(rule as Condition, data)
}

export {evaluate}
export type {Condition, Data, Statement}
