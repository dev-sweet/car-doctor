import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:9000/orders?email=${user?.email}`;

  // handle delete
  const handleDelete = (id) => {
    const proceed = confirm("Do you sure you want to delete this booking!");
    if (proceed) {
      fetch(`http://localhost:9000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted success!");
            const deletedBookings = bookings.filter(
              (booking) => booking._id !== id
            );

            setBookings(deletedBookings);
          }
        });
    }
  };

  // handle confirm
  const handleConfirm = (id) => {
    fetch(`http://localhost:9000/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated success!");
          const newBookings = bookings.filter((booking) => booking._id !== id);
          const remaining = bookings.find((booking) => booking._id === id);
          remaining.status = "confirm";
          setBookings([...newBookings, remaining]);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setBookings(res.data));
  }, [url]);
  return (
    <div>
      <h1 className="text-5xl">Bookings {bookings?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {bookings?.map((booking) => (
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
