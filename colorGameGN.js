const Square = ({id, player, color, selectPlayer, state}) =>{
  //return <button key={id} onClick={e => e.target.style.background = "red"}></button>;
  return <button key={id} onClick={e => {
    e.target.textContent= player;
    e.target.style.background = color;
    state[id]= player;
    console.log(JSON.stringify(state));
    selectPlayer(e, 5);

  }}>.</button>;
}



const Board = () => {
  const [player, setPlayer] = React.useState("O");
  const [counter, setCounter] = React.useState(0);
  const [color, setColor] = React.useState("blue");
  const [mounted, setMounted] = React.useState(true);
  let [randomX, setRandomX] = React.useState(false);
  const [state, setState] = React.useState(Array(9).fill(null));
  const [winner, setWinner] = React.useState(false);
  let status = `Turn of player ${player}`;
  if (winner){ status = `Winner ${player}!!!`};

  for (let i = 0; i < win.length; i++) {
    if(state[win[i][0]] == state[win[i][1]] && state[win[i][1]] == state[win[i][2]] && state[win[i][0]]){
      let playerW=state[win[i][0]];
      console.log(playerW);
      if (winner == false) {
        setPlayer(playerW);
                setColor("blue");
        setWinner(true)};

    };
  }

  console.log(counter);
  console.log(counter%2);
  console.log(mounted);
  console.log(JSON.stringify(state));

  let selectPlayer = (e, xx) =>{
    if (!winner){
      if (counter%2) {
        e.target.style.color = "black";
        //e.target.style.background = "red";
        setPlayer("O");
        setColor("blue");
        setCounter(counter+1);
        console.log("parametro pasado" + xx)
      }else{
        //e.target.style.background = "blue";
        e.target.style.color = "white";
        setPlayer("X");
        setColor("red");
        setCounter(counter+1);
        console.log("parametro pasado" + xx)
      }
    }
  }

  function renderSquare(i) {
    return <Square player={player} id={i} color={color} selectPlayer={selectPlayer} state={state}></Square>
  }

  let toggle = () =>{ 
    setMounted(!mounted);
 
  };

  let reRenderX = () =>{
    let randomY=randomX++;
    setRandomX(randomY);
  }

  return (
    <div>
      <div className="container" id="info">
        <div className="status"><button onClick={()=> toggle()}>Show/Hide row</button></div>
        {/* <div className="status"><button onClick={()=> reRenderX()}>Re-render</button></div> */}
        <div className="status"><h1>{status}</h1></div>
      </div>
      <div className="game-board"      /*  onClick={(e) => {
        selectPlayer(e);
        
      }
      } */>
        <div className="grid-row">
          {mounted && renderSquare(0)}
          {mounted && renderSquare(1)}
          {mounted && <Square id={2} player={player} color={color} selectPlayer={selectPlayer} state={state}/>}
        </div>

        <div className="grid-row">
          {mounted && renderSquare(3)}
          {mounted && renderSquare(4)}
          {mounted && <Square id={5} player={player} color={color} selectPlayer={selectPlayer} state={state}/>}
        </div>

        <div className="grid-row">
          {mounted && renderSquare(6)}
          {mounted && renderSquare(7)}
          {mounted && <Square id={8} player={player} color={color} selectPlayer={selectPlayer} state={state}/>}
        </div>
        
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
