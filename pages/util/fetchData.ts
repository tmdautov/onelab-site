import { db } from "../services/firebaseConfig";

export const fetchData = async (setUsers: (any) => void) => {
    db.collection("users")
      .get()
      .then(snapshot => {
        const usersList = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          usersList.push(data);
        })
        setUsers(usersList);
      })
      .catch(error => alert(error));
}