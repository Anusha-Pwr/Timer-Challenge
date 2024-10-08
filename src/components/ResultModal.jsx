import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({remainingTime, targetTime, onReset}, ref) {

    const userLost = remainingTime<=0;

    const timeLeft = (remainingTime/1000).toFixed(2);

    const score = Math.round((1-remainingTime/(targetTime*1000))*100);

    return (
        <dialog ref={ref} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost!</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong> seconds</p>
            <p>You stopped the timer with <strong>{timeLeft} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
});

export default ResultModal;