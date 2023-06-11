import { useGlobalState } from "../../context/GlobalState";
import { FaTrash } from "react-icons/fa";

export function TransactionItem({ transaction: { id, description} }) {
  const { deleteTransaction } = useGlobalState();


  return (
    <li
      key={id}
      className={`bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center`}
    >
      {description}

      <div>
        <button
          onClick={() => deleteTransaction(id)}
          className="font-bold text-white rounded-lg ml-2"
        >
          <div className="text-red-500 ">
            <FaTrash />
          </div>
        </button>
      </div>
    </li>
  );
}
