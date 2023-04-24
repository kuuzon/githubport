import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../common/Loader";

// SET OUR TYPE / INTERFACE OBJECTS & UNIONS

// 4. UPDATE: We no longer need this as we no longer use the general state system
// type LifeCyle = "IDLE" | "ERROR" | "LOADING" | "LOADED";

// 3. TYPE OBJECT: We can specify EXACTLY what data types we want flowing into our application - strict control
type User = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;

  // FURTHER: We arguably never use these, so we basically make it impossible for these to be called into our component = typescript will REJECT them:
  // node_id: string;
  // gravatar_id: string;
  // url: string;
  // followers_url: string;
  // following_url: string;
  // gists_url: string;
  // starred_url: string;
  // subscriptions_url: string;
  // organizations_url: string;
  // repos_url: string;
  // events_url: string;
  // received_events_url: string;
  // type: "User";
  // site_admin: boolean;
  // score: number;
};

// SECOND LEVEL OF ABSTRACTION
// (ii) Abstraction: ONLY focuses on the STRUCTURE OF THE COMPONENT and WHERE the data will be rendered INSIDE the component
const UserRow = ({ 
  login, 
  avatarUrl, 
  htmlUrl 
}: {
  login: string;
  avatarUrl: string;
  htmlUrl: string;
}) => {
  return (
    <div className="userbox">
      <p>{login}</p>
      <a target="_blank" rel='noreferrer' href={htmlUrl}>
        <img src={avatarUrl} alt='user' />
      </a>
    </div>
  );
};

// (i) STRUCTURE OF OUR LOOP: 
// Abstraction: ONLY focuses on how the API data is looped into the component, to be accessed.  
const UserList = (props: { users: User[] }) => (
  <>
    {props.users.map((user) => (
      <UserRow key={user.id} login={user.login} avatarUrl={user.avatar_url} htmlUrl={user.html_url}/>
    ))}
  </>
);

// FIRST LEVEL OF ABSTRACTION OF SUCCESS RENDER: 
// We strip out all the moving parts, so we can focus on the (i) STRUCTURE of the LOOP + (ii) STRUCTURE OF THE COMPONENT & its data 
// const UserList = ( props ) => (
//   <>
//     {props.users.map((user) => (
//       <div className="userbox">
//         <p>{user.login}</p>
//         <a target="_blank" rel='noreferrer' href={user.html_url}>
//           <img src={user.avatar_url} alt='user' />
//         </a>
//       </div>
//     ))}
//   </>
// );

// 6. Example of Structuring Props into Component
// We never use, but again, shows another way we can incorporate it into our React components!
type FoobarProps = {
  firstName: string
  lastName: string
  age?: number
  gender: "female" | "male" | "other"
}

const GitUsers = (props: FoobarProps) => {
  // States & Initial States
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect Hook Call on Load
  useEffect(() => {
    fetchUsers();
    setLoading(false);
  }, []);

  // Fetch API Data Function
  async function fetchUsers() {
    try {
      const response = await axios.get(
        'https://api.github.com/search/users?q=kitten&per_page=12'
      );
      console.log(response.data.items);
      setUsers(response.data.items);

    } catch (err) {
      setError("Fetch Error: Cannot Retrieve Github Data")
      console.log(err)
    }
  }

  // Conditional Renders
  // NOTE: We effectively set failsafes to pass in the proper order: loading -> error -> render
  if (loading) {
    console.log("Loading Component...");
    return (
      <div className='container text-center mt-5'>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className='container text-center mt-5'>
        <h4>{error}</h4>
      </div>
    )
  }

// NOW: Our return ONLY concerned with the success render condition AND all moving parts are abstracted out (SEE ABOVE)
  return (
    <div className="container">
      <div className="userlist">
        { users.length > 0 && <UserList users={users} /> }
      </div>
    </div>
  )
}

export default GitUsers