import "../Burger.css";
import imgChifla1 from "../assets/chifla-1.svg";
import imgChifla2 from "../assets/chifla-2.svg";
import imgVita from "../assets/pirjoala-vita.svg";

const BurgerPage: React.FC = () => {
  return (
    <div className="craft">
      <div className="container">
        <div className="content">
          <div className="left-side">
            {/* <!-- CHIFLA --> */}
            <div className="burger-item clone-div">
              <div className="label">1. Chifla</div>
              <div className="field-row burger-options" data-option="3">
                <div className="field-wrap">
                  <select name="choose-chifla" className="craft-select chifla">
                    <option
                      value="38"
                      data-price="8"
                      data-grams="60"
                      data-img={imgChifla1}
                    >
                      CHIFLA BRIOCHE (8 lei){" "}
                    </option>
                  </select>
                </div>
                {/* <!-- <div className="delete-btn">
                              <img src="img/delete.png" alt="delete">
                          </div> --> */}
              </div>
            </div>
            {/* <!-- CARNE --> */}
            <div className="burger-item clone-div">
              <div className="label">2. Carne</div>
              <div className="field-row burger-options" data-option="4">
                <div className="field-wrap">
                  <select name="choose-carne[]" className="craft-select carne">
                    <option
                      value="40"
                      data-price="35"
                      data-grams="150"
                      data-img="img/pirjoala-vita.svg"
                    >
                      P&Acirc;RJOALĂ VITĂ (35 lei)
                    </option>
                    <option
                      value="41"
                      data-price="25"
                      data-grams="100"
                      data-img="img/pirjoala-pui.svg"
                    >
                      FILEU PUI PANE (25 lei)
                    </option>
                    <option
                      value="79"
                      data-price="25"
                      data-grams="100"
                      data-img="img/pirjoala-pui.svg"
                    >
                      FILEU PUI GRILL (25 lei)
                    </option>
                  </select>
                </div>
              </div>
              <div className="add-item clone-item">
                <span className="plus-icon"> + </span>
                <span className="text">Adaugă item</span>
              </div>
            </div>
            {/* <!-- SOS TOP --> */}
            <div className="burger-item clone-div">
              <div className="label">3. SOS CHIFLA TOP</div>
              <div className="field-row burger-options" data-option="2">
                <div className="field-wrap">
                  <select
                    name="choose-sos-chifla-top[]"
                    className="craft-select sos-chifla-top"
                  >
                    <option value="" data-price="0" data-grams="0">
                      {" "}
                      -{" "}
                    </option>
                    <option
                      value="28"
                      data-price="4"
                      data-grams="20"
                      data-img="img/usturoi.svg"
                    >
                      SOS USTUROI (4 lei)
                    </option>
                    <option
                      value="29"
                      data-price="4"
                      data-grams="30"
                      data-img="img/tartar.svg"
                    >
                      SOS TARTAR (4 lei)
                    </option>
                    <option
                      value="27"
                      data-price="4"
                      data-grams="20"
                      data-img="img/ketchup.svg"
                    >
                      SOS KETCHUP (4 lei)
                    </option>
                    <option
                      value="30"
                      data-price="4"
                      data-grams="20"
                      data-img="img/maioneza.svg"
                    >
                      SOS MAIONEZĂ (4 lei)
                    </option>
                    <option
                      value="34"
                      data-price="4"
                      data-grams="20"
                      data-img="img/usturoi.svg"
                    >
                      SOS USTUROI&amp;BBQ (4 lei)
                    </option>
                    <option
                      value="35"
                      data-price="6"
                      data-grams="20"
                      data-img="img/sriracha.svg"
                    >
                      SOS SRIRACHA (iute) (6 lei)
                    </option>
                    <option
                      value="48"
                      data-price="4"
                      data-grams="20"
                      data-img="img/usturoi.svg"
                    >
                      SOS classNameY (4 lei)
                    </option>
                  </select>
                </div>
              </div>
              <div className="add-item clone-item">
                <span className="plus-icon"> + </span>
                <span className="text">Adaugă item</span>
              </div>
            </div>
            {/* <!-- SOS JOS --> */}
            <div className="burger-item clone-div">
              <div className="label">4. SOS CHIFLA JOS</div>
              <div className="field-row burger-options" data-option="8">
                <div className="field-wrap">
                  <select
                    name="choose-sos-chifla-jos[]"
                    className="craft-select sos-chifla-jos"
                  >
                    <option value="" data-price="0" data-grams="0">
                      {" "}
                      -{" "}
                    </option>
                    <option
                      value="27"
                      data-price="4"
                      data-grams="20"
                      data-img="img/ketchup.svg"
                    >
                      SOS KETCHUP (4 lei)
                    </option>
                    <option
                      value="29"
                      data-price="4"
                      data-grams="30"
                      data-img="img/tartar.svg"
                    >
                      SOS TARTAR (4 lei)
                    </option>
                    <option
                      value="30"
                      data-price="4"
                      data-grams="20"
                      data-img="img/maioneza.svg"
                    >
                      SOS MAIONEZĂ (4 lei)
                    </option>
                    <option
                      value="34"
                      data-price="4"
                      data-grams="20"
                      data-img="img/usturoi.svg"
                    >
                      SOS USTUROI&amp;BBQ (4 lei)
                    </option>
                    <option
                      value="35"
                      data-price="6"
                      data-grams="20"
                      data-img="img/sriracha.svg"
                    >
                      SOS SRIRACHA (iute) (6 lei)
                    </option>
                    <option
                      value="48"
                      data-price="4"
                      data-grams="20"
                      data-img="img/sos-classNamey.svg"
                    >
                      SOS classNameY (4 lei)
                    </option>
                    <option
                      value="28"
                      data-price="4"
                      data-grams="20"
                      data-img="img/usturoi.svg"
                    >
                      SOS USTUROI (4 lei)
                    </option>
                  </select>
                </div>
              </div>
              <div className="add-item clone-item">
                <span className="plus-icon"> + </span>
                <span className="text">Adaugă item</span>
              </div>
            </div>
            {/* <!-- CASCAVAL --> */}
            <div className="burger-item clone-div">
              <div className="label">5. Cascaval</div>
              <div className="field-row burger-options" data-option="5">
                <div className="field-wrap">
                  <select
                    name="choose-cascaval[]"
                    className="craft-select cascaval"
                  >
                    <option value="" data-price="0" data-grams="0">
                      {" "}
                      -{" "}
                    </option>
                    <option
                      value="24"
                      data-price="12"
                      data-grams="20"
                      data-img="img/cheddar.svg"
                    >
                      CAȘCAVAL&quot;CHEDDAR&quot; (12 lei)
                    </option>
                    <option
                      value="33"
                      data-price="15"
                      data-grams="25"
                      data-img="img/dorblu.svg"
                    >
                      CAȘCAVAL DORBLU (15 lei)
                    </option>
                  </select>
                </div>
              </div>
              <div className="add-item clone-item">
                <span className="plus-icon"> + </span>
                <span className="text">Adaugă item</span>
              </div>
            </div>
            {/* <!-- TOPPING --> */}
            <div className="burger-item clone-div">
              <div className="label">6. Topping</div>
              <div className="field-row burger-options" data-option="6">
                <div className="field-wrap">
                  <select
                    name="choose-topping[]"
                    className="craft-select topping"
                  >
                    <option
                      value=""
                      data-option="0"
                      data-price="0"
                      data-grams="0"
                    >
                      {" "}
                      -{" "}
                    </option>
                    <option
                      value="22"
                      data-option="22"
                      data-price="12"
                      data-grams="10"
                      data-img="img/bacon.svg"
                    >
                      BACON CROCANT (12 lei)
                    </option>
                    <option
                      value="23"
                      data-option="23"
                      data-price="10"
                      data-grams="40"
                      data-img="img/ou-prajit.svg"
                    >
                      OU PRĂJIT (10 lei)
                    </option>
                    <option
                      value="25"
                      data-option="25"
                      data-price="2"
                      data-grams="10"
                      data-img="img/ceapa-marinata.svg"
                    >
                      CEAPĂ MARIN (2 lei)
                    </option>
                    <option
                      value="42"
                      data-option="42"
                      data-price="4"
                      data-grams="20"
                      data-img="img/ceapa-caramelizata.svg"
                    >
                      CEAPĂ CARAMEL (4 lei)
                    </option>
                    <option
                      value="43"
                      data-option="43"
                      data-price="4"
                      data-grams="30"
                      data-img="img/castraveti-murati.svg"
                    >
                      CASTRAVETI MURATI (4 lei)
                    </option>
                    <option
                      value="51"
                      data-option="51"
                      data-price="4"
                      data-grams="20"
                      data-img="img/castraveti-proaspeti.svg"
                    >
                      CASTRAVEȚI PROASPEȚI (4 lei)
                    </option>
                    <option
                      value="50"
                      data-option="50"
                      data-price="5"
                      data-grams="40"
                      data-img="img/rosii.svg"
                    >
                      ROȘII (5 lei)
                    </option>
                    <option
                      value="52"
                      data-option="52"
                      data-price="5"
                      data-grams="15"
                      data-img="img/salata-iceberg.svg"
                    >
                      ICEBERG (5 lei)
                    </option>
                  </select>
                </div>
              </div>
              <div className="add-item clone-item">
                <span className="plus-icon"> + </span>
                <span className="text">Adaugă item</span>
              </div>
            </div>
            {/* <!-- BURGER NAME --> */}
            <div className="personal-name-block field-wrap">
              <input
                type="text"
                name="personal-name"
                placeholder="Numește-ți burgerul 🍔"
                id="personal-name"
              />
            </div>
            {/* <!-- TOTAL --> */}
            <hr className="totals-del" />
            <div className="craft-totals burger-craft-results">
              <div className="result-row chifla" data-option="3">
                <span className="label">CHIFLA BRIOCHE: </span>
                <span className="value">8 lei</span>
                <span className="mass"> (60 gr)</span>
              </div>
              <div className="result-row carne" data-option="4">
                <span className="label">P&Acirc;RJOALĂ VITĂ: </span>
                <span className="value">35 lei</span>
                <span className="mass"> (150 gr)</span>
              </div>
              <div className="total-price-row">
                <span className="label">Total : </span>
                <span className="value">
                  <span className="total-price">43</span> lei
                </span>
                <span className="mass">
                  <span className="total-mass-sign"> (</span>
                  <span className="total-mass">210</span>
                  <span className="total-mass-sign">gr)</span>
                </span>
              </div>
            </div>

            <div className="craft-btns">
              <button className="add-to-cart add-to-cart-craft btn">
                <span className="add-to-cart-icon"></span>
                <span className="add-to-cart-span">Adaugă &icirc;n Coș</span>
                <span className="add-to-cart-msg"></span>
              </button>
              <button className="reset btn-2">Incepe de la zero</button>
            </div>
          </div>

          <div className="right-side">
            <div className="burger-images">
              <div
                className="burger-image burger-top-image burger-header"
                data-option={3}
              >
                <span className="image-text-left">CHIFLA BRIOCHE</span>
                <img
                  src={imgChifla1}
                  alt="CHIFLA BRIOCHE"
                  title="CHIFLA BRIOCHE"
                />
              </div>
              <div className="burger-image carne burger-center" data-option="4">
                <span className="image-text-right">P&Acirc;RJOALĂ VITĂ</span>
                <img
                  src={imgVita}
                  alt="P&Acirc;RJOALĂ VITĂ"
                  title="P&Acirc;RJOALĂ VITĂ"
                />
              </div>
              <div
                className="burger-image burger-bottom-image burger-footer"
                data-option={3}
              >
                <span className="image-text-left">CHIFLA BRIOCHE</span>
                <img
                  src={imgChifla2}
                  alt="CHIFLA BRIOCHE"
                  title="CHIFLA BRIOCHE"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerPage;
