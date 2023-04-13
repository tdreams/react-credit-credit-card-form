import touch from "./images/touch.svg";
import chip from "./images/chip.svg";
import visaLogo from "./images/visa.png";
import master from "./images/master.png";


const CreditCard = ({ formData, side, flip }) => {
  
  const startState = [
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
    "X",
  ]

  const getCardType = () => {
    if (formData.number.slice(0, 1) === "") {
      return "hide";
    }
    if (formData.number.slice(0, 1) === "4") {
      return "visa";
    }
    return "mastercard";
  };

  console.log(getCardType());
  return (
    <div className={`credit-card ${flip&&side === "front" ? "flip" : null}`}>
      {side === "front" && (
        <div className={`front-side card ${flip ? "flip" : null}`}>
          <div className="rigth-circle"></div>
          <div className="left-circle"></div>
          <div className="card-detail-conatiner">
            <div className="detail-container">
              <div className="top-left-card">
                <p>Credit Card</p>
                <img className="chip-icon" src={chip} />
              </div>

              <div className="payment-icon">
                <img className={`method1-${getCardType()}`} src={visaLogo} />
                <img className={`method-${getCardType()}`} src={master} />
              </div>
            </div>
            <div className="number-display">
              {/* <h3>{formData.number}</h3> */}
              {startState.map((item, index) => (
                <h3 key={index}>{formData.number[index] || item}</h3>
              ))}
            </div>
            <div className="detail-container bottom-card">
              <div className="card-holder-name">
                <h2>{formData.name}</h2>
              </div>

              <div className="card-valid">
                <p>Valid thru</p>
                <h2>{formData.date}</h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {side === "back" && (
        <div className={`back-side card ${flip ? "flip" : null}`}>
          <img className="touch-logo" src={touch} />
          <div className="bar"></div>
          <div id="cvv-display">
            <p>{formData.cvv}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCard;
