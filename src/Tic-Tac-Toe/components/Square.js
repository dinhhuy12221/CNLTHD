
export default function Square({ value, onSquareClick }) {
    
    return (
        <button 
            className={`square square-${value}`}
            onClick={onSquareClick}>
                {value}
        </button>
    );
}
