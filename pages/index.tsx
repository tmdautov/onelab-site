import Head from "next/head";
import { useState, useEffect } from "react";
import { db, auth } from "./services/firebaseConfig";
import { fetchData } from "./util/fetchData";
import Loader from 'react-loader-spinner';

export default function Home() {
  
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState(""); 
  const [rotation, setRotation] = useState("Frontend");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetchData(setUsers, setLoading)}, [users]);
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Project
        </h1>

        <div className="grid">
          <div className="card">
            <h3>Add User</h3>
              <div>
                name:<br />
                <input type='text' value={name} data-key='name' className='user-input' 
                onChange={(e) => {setName(e.target.value)}}/><br />
                city:<br />
                <input type='text' data-key='age' className='user-input'
                onChange={(e) => {setCity(e.target.value)}} /><br />
                email:<br />
                <input type='text' data-key='email' className='user-input' 
                onChange={(e) => {setEmail(e.target.value)}}/><br />
                rotation:<br />
                <select name="rotations" defaultValue="Frontend" onChange={(e) => {
                  setRotation(e.target.value);
                }}>
                  <option value="Frontend">Frontend Development</option>
                  <option value="Mobile">Mobile Development</option>
                  <option value="Backend">Backend Development</option>
                </select><br/>
                <button type='button' onClick={() => {
                  db.collection('users').get()
                  .then(snapshot => {
                    snapshot.forEach(doc => {
                      if (doc.data().email === email)
                      {
                        throw new Error("Already registered");
                      };
                    });
                    db.collection('users')
                    .add({
                      name: name,
                      rotation: rotation,
                      city: city,
                      email: email,
                      date: new Date().toLocaleString()
                    });
                  })
                  .catch(error => 
                    alert(error.message)
                  );
                }}>Add User</button>
            </div>
          </div>

          <div className="card">
            <h3>Already Registered</h3>
            <ul style={{listStyle: "none"}}>
            {loading ? <Loader type="ThreeDots" color="blue" /> :  
              users.length > 0 ? users.map(user => {
                return (
                  <li>
                    <label style={{marginRight: "10px"}}>{user.name}</label>
                    <button type="button" onClick={() => {
                      db.collection("users")
                      .get()
                      .then(snapshot => {
                        snapshot.forEach(doc => {
                          if (doc.data().email === user.email) 
                          { 
                            doc.ref.delete();
                          }
                        })
                      })
                    }}>x</button>
                  </li>
                )
              }) : "empty"
            }
            </ul>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
