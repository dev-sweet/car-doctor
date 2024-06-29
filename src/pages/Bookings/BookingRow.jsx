const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, title, img, price } = booking;
  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={img} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        <h4 className="text-2xl text-gray-600 font-bold">${price}</h4>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleConfirm(_id)}
          className="btn btn-ghost text-white py-3 px-6 bg-[#FF3811]"
        >
          Confirm
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
