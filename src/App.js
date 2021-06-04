
import './App.css';
import RecipeReviewCard from "./Components/Card"
import { useEffect, useState } from "react";
import DenseAppBar from './Components/Header'

function App() {
  const [users, setusers] = useState([])
    const getData = async() => {
        const response = await fetch("https://api.github.com/users  ")
           
      setusers(await response.json());
       


    }
    useEffect(() => {
        getData();
    }, [])
  return (
    <>
      <DenseAppBar/>
      <div className="container">
        {
          users.map((alam) => {
            
            return (
              <div className="card" key={alam.id}>
                <RecipeReviewCard  key={alam.id} name={alam.login} id={alam.id} img={alam.avatar_url}  
                  followers={alam.followers_url}
                  type={alam.type}
                  url={alam.url}
          />
          </div>
            )
          })
        }
       
         
        
      </div>
      </>
  );
}

export default App;
