import "./ExpenseItem.css";
import {ExpenseDate} from "./ExpenseDate.jsx";
import {Title} from "./Title.jsx";

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

            <Title title={props.title} amount={props.amount}/>

        </div>
    )
}