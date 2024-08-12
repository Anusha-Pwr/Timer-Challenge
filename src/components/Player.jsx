import { useRef, useState } from 'react';
export default function Player() {

  const [player, setPlayer] = useState("");
  // const [inputVal, setInputVal] = useState("");
  // const[submitted, setSubmitted] = useState(false);
  const playerName = useRef();

  // function handleChange(event) {
  //   setInputVal(event.target.value);
  // }

  function handleClick() {
    // setSubmitted(true);
    setPlayer(playerName.current.value);
    playerName.current.value = "";
    // setInputVal("");
  }

  return (
    <section id="player">
      <h2>Welcome {player ? player : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
