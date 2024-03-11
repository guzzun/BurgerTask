import "../Burger.css";
import imgChifla2 from "../assets/chifla-2.svg";
// import imgDelete from "../assets/delete.png";
import jsonIngredients from "../ingredients.json";

interface OptionInfo {
  price: number;
  grams: number;
  url: string;
}

interface Option {
  name: string;
  value: string;
  info: OptionInfo;
}

interface IngredientType {
  category: string;
  dataOption: number;
  options: Option[];
}

interface JsonDataProps {
  jsonData: {
    [key: string]: IngredientType;
  };
}

const BurgerPage: React.FC = () => {
  const renderSelect = ({ jsonData }: JsonDataProps) => {
    return Object.values(jsonData).map(
      (type: IngredientType, index: number) => {
        const category = type.category.toLowerCase();
        return (
          <div className="burger-item clone-div" key={category}>
            <div className="label">{`${index + 1}. ${type.category}`}</div>
            <div
              className="field-row burger-options"
              data-option={type.dataOption}
            >
              <div className="field-wrap">
                <select
                  name={`choose-${category}`}
                  className={`craft-select ${category}`}
                >
                  {type.options.map((option: Option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      data-price={option.info.price}
                      data-grams={option.info.grams}
                      data-img={option.info.url}
                    >
                      {option.name} ({option.info.price} lei)
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="add-item clone-item">
              <span className="plus-icon"> + </span>
              <span className="text">Adaugă item</span>
            </div>
          </div>
        );
      }
    );
  };

  const renderResultRow = (category: string, type: IngredientType) => {
    const typeOptions: Option = type.options[0];
    return (
      <div className={`result-row ${category}`} data-option={type.dataOption}>
        <span className="label">{`${typeOptions.name}: `}</span>
        <span className="value">{`${typeOptions.info.price} lei`}</span>
        <span className="mass">{` (${typeOptions.info.grams} gr)`}</span>
      </div>
    );
  };

  const bun: IngredientType = jsonIngredients.bun;
  console.log(bun.options[0].info.url);

  const meat: IngredientType = jsonIngredients.meat;

  return (
    <div className="craft">
      <div className="container">
        <div className="content">
          <div className="left-side">
            {renderSelect({ jsonData: jsonIngredients })}

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
              {renderResultRow("chifla", bun)}
              {renderResultRow("carne", meat)}
              <div className="total-price-row">
                <span className="label">Total : </span>
                <span className="value">
                  <span className="total-price">
                    {bun.options[0].info.price + meat.options[0].info.price} lei
                  </span>
                </span>
                <span className="mass">
                  <span className="total-mass-sign"> (</span>
                  <span className="total-mass">
                    {bun.options[0].info.grams + meat.options[0].info.grams}
                  </span>
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

          {/* RIGHT SIDE */}
          <div className="right-side">
            <div className="burger-images">
              <div
                className="burger-image burger-top-image burger-header"
                data-option={bun.dataOption}
              >
                <span className="image-text-left">CHIFLA BRIOCHE</span>
                <img
                  src={bun.options[0].info.url}
                  alt={bun.options[0].name}
                  title={bun.options[0].name}
                />
              </div>
              <div
                className="burger-image carne burger-center"
                data-option={meat.dataOption}
              >
                <span className="image-text-right">PARJOALĂ VITĂ</span>
                <img
                  src={meat.options[0].info.url}
                  alt={meat.options[0].name}
                  title={meat.options[0].name}
                />
              </div>
              <div
                className="burger-image burger-bottom-image burger-footer"
                data-option={bun.dataOption}
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
