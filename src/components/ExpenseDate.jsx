export function ExpenseDate(props) {
    return (
        <div className={"expense-date"}>
            <div>{props.month}</div>
            <div>{props.day}</div>
            <div>{props.year}</div>
        </div>
    )
}