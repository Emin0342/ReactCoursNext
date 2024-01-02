import styles from "./Profile.module.css";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';


function Profile() {
  const [visible, setVisible] = useState(true); 
  const [name, setName] = useState("ggez");
  const [tempName, setTempName] = useState(name);
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });



  return (
    <div>

<div style={{ padding: isMobile ? '10px' : '20px' }}>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className={styles.card}>
        <img src="https://media.licdn.com/dms/image/D4E03AQHsBSWysgighg/profile-displayphoto-shrink_400_400/0/1685466076489?e=1709769600&v=beta&t=yw3Q6S7Cu7muiZMWb1cSSzzR01_Vb8tAtYIVU-_mQmA" alt="John" style={{ width: "100%" }} />
        <h1>{name}</h1>
        <p className="title">CEO &amp; Founder, Example</p>
        <p> ISITECH </p>

        <button onClick={() => {
  setVisible(!visible);
  setTempName(name);
}}> Changer le nom</button>

{visible && 
  <div>
    <input type="text" value={tempName} onChange={(e) => setTempName(e.target.value)} />
    <button onClick={() => {
      setVisible(!visible);
      setName(tempName);
    }}> Mettre a jour  ! </button> 
  </div>
}
      </div>
    </div>
    </div>

  );
}

export default Profile;