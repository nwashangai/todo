import { useTodo } from '../../providers/Todo';

const Filter: React.FC = () => {
  const { filterByCategory } = useTodo();

  return (
    <div className="relative w-full md:max-w-[200px]">
      <select
        onChange={(e) => filterByCategory(e.target.value)}
        defaultValue=""
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring focus:border-blue-500 appearance-none"
      >
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Filter;
