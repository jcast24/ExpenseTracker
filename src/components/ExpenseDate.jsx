// Expense
export function ExpenseDate(props) {
    return (
        <div className={"expense-item__date"}>
            <div>{props.month}</div>
            <div>{props.day}</div>
            <div>{props.year}</div>
        </div>
    )
}