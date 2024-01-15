import { Link } from "react-router-dom";
import { useUserSelector } from "../store/slice";
import "../css/user.css";

export const User = () => {
  const user = useUserSelector();
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <button className="buttonHome">
            <Link to="/home">Home</Link>
          </button>
        </header>
        <hr />
        {user.data && (
          <section className="userCard">
            <div className="photo">
              <img
                className="image"
                src={user.data.image}
                alt={user.data.image}
              />
            </div>
            <div className="userInfo">
              <h1>
                {user.data.firstName} {user.data.lastName}
              </h1>
              <ul>
                <li> Id: {user.data.id} </li>
                <li> Age: {user.data.age} </li>
                <li> Birth Date : {user.data.birthDate} </li>
                <li> Blood Group: {user.data.bloodGroup} </li>
                <li> Email: {user.data.email} </li>
                <li> Gender: {user.data.gender} </li>
                <li> Phone : {user.data.phone} </li>
                <li>University: {user.data.university}.</li>
                <li>
                  Address: {user.data.address.address}, {user.data.address.city}.
                </li>
                <li>
                  Company: <strong>{user.data.company.name}</strong>{" "}
                </li>
                <li> Department: {user.data.company.department}</li>
              </ul>
            </div>
          </section>
        )}
      </div>
    </>
  );
};
