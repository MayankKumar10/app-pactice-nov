
import useTicTacToe from "./useTicTacToe"


export const TicTacToe = () => {
  const { game, isXnext, getStatusDisplay, handleClick, resetGame  } = useTicTacToe()


  return (
      <div className="game">
        <div className="status">
          {getStatusDisplay()}
          <button type="reset-button" onClick={resetGame}>Reset Game</button>
        </div>

          <div className="board">
          {
            game?.map((cell,i)=> 
            <button 
            className="cell"
            key={i}
            onClick={()=>handleClick(i)}
            disabled={cell !== null}
            >
            {cell}
            </button> )
          }

          </div>
      </div>

   )
}
