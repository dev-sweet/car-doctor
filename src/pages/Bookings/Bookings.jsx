import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:9000/orders?email=${user?.email}`;

  const handleDelete = (id) => {
    const proceed = confirm("Do you sure you want to delete this booking!");
    if (proceed) {
      fetch(`http://localhost:9000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount > 0) {
            alert("Deleted success!");
            const deletedBookings = bookings.filter(
              (booking) => booking._id !== id
            );
            setBookings(deletedBookings);
          }
        });
    }
  };
  const handleConfirm = (id) => {
    fetch(`http://localhost:9000/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Updated Succeess");
        }
      });
  };
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
  return (
    <div>
      <h1 className="text-5xl">Bookings {bookings?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
                booking={booking}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
