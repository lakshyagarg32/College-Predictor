import { useRef } from "react";
import ProgressBar from "./progressBar";
import "./main.css";

function Main() {
  const slidePage = useRef(null);
  const progressText = useRef([]);
  const progressCheck = useRef([]);
  const bullet = useRef([]);
  let current = 1;

  return (
    <div className="container">
      <header>College Predictor</header>
      <ProgressBar
        progressCheck={progressCheck}
        progressText={progressText}
        bullet={bullet}
      />
      <div className="form-outer">
        <form>
          <div ref={slidePage} className="page slide-page">
            <div className="title">Enter JEE Main Rank</div>
            <div className="field">
              <input type="text" placeholder="Rank"></input>
            </div>
            <div className="field">
              <button
                type="button"
                className="firstNext next"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-25%";
                  progressText.current[current - 1].classList.add("active");
                  bullet.current[current - 1].classList.add("active");
                  progressCheck.current[current - 1].classList.add("active");
                  current += 1;
                }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="page">
            <div className="title">Gender</div>

            <div className="field">
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field btns">
              <button
                type="button"
                className="prev-1 prev"
                onClick={() => {
                  slidePage.current.style.marginLeft = "0%";
                  bullet.current[current - 2].classList.remove("active");
                  progressCheck.current[current - 2].classList.remove("active");
                  progressText.current[current - 2].classList.remove("active");
                  current -= 1;
                }}
              >
                Previous
              </button>
              <button
                type="button"
                className="next-1 next"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-50%";
                  bullet.current[current - 1].classList.add("active");
                  progressCheck.current[current - 1].classList.add("active");
                  progressText.current[current - 1].classList.add("active");
                  current += 1;
                }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="page">
            <div className="title">Category</div>
            <div className="field">
              <select>
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
                <option>PWD</option>
                <option>EWS</option>
              </select>
            </div>
            <div className="field btns">
              <button
                type="button"
                className="prev-2 prev"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-25%";
                  bullet.current[current - 2].classList.remove("active");
                  progressCheck.current[current - 2].classList.remove("active");
                  progressText.current[current - 2].classList.remove("active");
                  current -= 1;
                }}
              >
                Previous
              </button>
              <button
                type="button"
                className="next-2 next"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-75%";
                  bullet.current[current - 1].classList.add("active");
                  progressCheck.current[current - 1].classList.add("active");
                  progressText.current[current - 1].classList.add("active");
                  current += 1;
                }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="page">
            <div className="title">Domicile</div>
            <div className="field">
              <select>
                <option value="">Choose Domicile State</option>
                <option value="129">Andaman Nicobar Islands</option>
                <option value="100">Andhra Pradesh</option>
                <option value="101">Arunachal Pradesh</option>
                <option value="102">Assam</option>
                <option value="103">Bihar</option>
                <option value="134">Chandigarh</option>
                <option value="104">Chhattisgarh</option>
                <option value="136">Dadra And Nagar Haveli</option>
                <option value="135">Daman &amp; Diu</option>
                <option value="128">Delhi</option>
                <option value="108">Goa</option>
                <option value="109">Gujarat</option>
                <option value="105">Haryana</option>
                <option value="110">Himachal Pradesh</option>
                <option value="111">Jammu and Kashmir</option>
                <option value="112">Jharkhand</option>
                <option value="106">Karnataka</option>
                <option value="107">Kerala</option>
                <option value="130">Lakshadweep</option>
                <option value="113">Madhya Pradesh</option>
                <option value="114">Maharashtra</option>
                <option value="115">Manipur</option>
                <option value="116">Meghalaya</option>
                <option value="117">Mizoram</option>
                <option value="118">Nagaland</option>
                <option value="119">Orissa</option>
                <option value="131">Pondicherry</option>
                <option value="120">Punjab</option>
                <option value="121">Rajasthan</option>
                <option value="122">Sikkim</option>
                <option value="123">Tamil Nadu</option>
                <option value="413">Telangana</option>
                <option value="124">Tripura</option>
                <option value="126">Uttar Pradesh</option>
                <option value="133">Uttarakhand</option>
                <option value="127">West Bengal</option>
              </select>
            </div>
            <div className="field btns">
              <button
                type="button"
                className="prev-3 prev"
                onClick={() => {
                  slidePage.current.style.marginLeft = "-50%";
                  bullet.current[current - 2].classList.remove("active");
                  progressCheck.current[current - 2].classList.remove("active");
                  progressText.current[current - 2].classList.remove("active");
                  current -= 1;
                }}
              >
                Previous
              </button>
              <button className="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
