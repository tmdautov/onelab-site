import { db } from "../firebaseConfig";


export const deleteData = (props: any) => {
    db.collection("users")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                if (doc.data().email === props.user.email) {
                    doc.ref.delete();
            }
        })
    })
}