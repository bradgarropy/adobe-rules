import {Data} from "."
import {Statement} from "./statement"

type DataValue = string | number | boolean
type Logic = "eq" | "neq" | "gt" | "lt" | "gte" | "lte" | "inc" | "ninc"

type Condition = {
    key: string
    value: DataValue
    logic: Logic
}

const isCondition = (rule: Statement | Condition): boolean => {
    const condition = rule as Condition

    if (condition.key) {
        return true
    }

    return false
}

const evaluateCondition = (condition: Condition, data: Data): boolean => {
    switch (condition.logic) {
        case "eq":
            return condition.value === data[condition.key]

        case "neq":
            return condition.value !== data[condition.key]

        case "gt":
            return condition.value > data[condition.key]

        case "lt":
            return condition.value < data[condition.key]

        case "gte":
            return condition.value >= data[condition.key]

        case "lte":
            return condition.value <= data[condition.key]

        case "inc": {
            const dataArray = data[condition.key] as DataValue[]
            return dataArray.includes(condition.value)
        }

        case "ninc": {
            const dataArray = data[condition.key] as DataValue[]
            return !dataArray.includes(condition.value)
        }
    }
}

export {evaluateCondition, isCondition}
export type {Condition, DataValue}
