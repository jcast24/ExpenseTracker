import "./ExpenseItem.css";
import {ExpenseDate} from "./ExpenseDate.jsx";

export const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: 'numeric'})
    const year = props.date.toLocaleString('en-US', {year: 'numeric'})

    return (
        <div className={"expense-item"}>
            <ExpenseDate
                month={month}
                day={day}
                year={year}
            />

            <div className={"expense-item__title"}></div>
            <div className={"expense-item__description"}>
                <h2>{props.title}</h2>
                <div className={"expense-item__price"}>{props.amount}</div>
            </div>

        </div>
    )
}