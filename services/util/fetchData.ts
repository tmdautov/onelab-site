import { db } from "../firebaseConfig";

export const fetchData = async (setUsers: (any) => void, setLoading: (boolean) => void) => {
    db.collection("users")
      .get()
      .then(snapshot => {
        setLoading(true);
        const usersList = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          usersList.push(data);
        })
        setUsers(usersList);
        setLoading(false);
      })
      .catch(error => alert(error));
}