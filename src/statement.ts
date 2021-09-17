import {Data} from "."
import {Condition, evaluateCondition} from "./condition"

type Combinator = "and" | "or"

type Statement = {
    combinator: Combinator
    conditions: Array<Condition | Statement>
}

const isStatement = (rule: Statement | Condition): boolean => {
    const statement = rule as Statement

    if (statement.combinator) {
        return true
    }

    return false
}

const evaluateStatement = (statement: Statement, data: Data): boolean => {
    const result = statement.conditions.reduce((acc, rule) => {
        if (isStatement(rule)) {
            return evaluateStatement(rule as Statement, data)
        }

        const condition = rule as Condition

        switch (statement.combinator) {
            case "and":
                return evaluateCondition(condition, data) && acc

            case "or": {
                return evaluateCondition(condition, data) || acc
            }
        }
    }, true)

    return result
}

export {evaluateStatement, isStatement}
export type {Statement}
