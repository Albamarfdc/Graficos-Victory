import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const sign = total < 0 ? "-" : "+";

  return (
    <div className="flex justify-between">
      <h3> Your Balance</h3>

      {sign === "-" ? (
        <h1 className="text-2xl font-bold text-red-500">${total}</h1>
      ) : (
        <h1 className="text-2xl font-bold text-indigo-500">${total}</h1>
      )}
    </div>
  );
}

export default Balance;
