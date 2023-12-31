import { ExpenseItem } from "./components/ExpenseItem.jsx";
import Card from "./components/Card.jsx";

function App() {

    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
        {
            id: 'e5',
            title: 'Nintendo Switch',
            amount: 299.99,
            date: new Date(2022, 5, 10),
        },
        {
            id: 'e6',
            title: 'Sony PSP',
            amount: 149.99,
            date: new Date(2022, 3, 10),
        }
    ];

    return (
        <main>
            <h1>Expenses</h1>
            <Card className={"expenses"}>
                {expenses.map((expense) => (
                    <div key={expense.id}>
                        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                    </div>
                ))}
            </Card>
        </main>
    )
}

export default App;
