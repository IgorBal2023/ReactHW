import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchUsers,
  useUsersSelector,
  userFetch,
  useUserSelector,
} from "../store/slice";
import { Link } from "react-router-dom";
import "../css/home.css";

export const Home = () => {
  const dispatch = useDispatch();
  const { data: users } = useUsersSelector();
  const user = useUserSelector();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <div className="allCards">
        {Array.isArray(users) &&
          users.map((user) => {
            const userId = user.id;
            return (
              <Link to={`/user/${userId}`} key={userId}>
                <div
                  className="usersCard"
                  onClick={() => {
                    dispatch(userFetch(userId));
                  }}
                >
                  <p>
                    User Id: <strong>{userId}</strong>
                  </p>
                  <p>
                    Name: <br />
                    <strong>
                      {" "}
                      {user.firstName} {user.lastName}
                    </strong>
                  </p>
                  <p>
                    University: <br /> <strong>{user.university}</strong>
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
