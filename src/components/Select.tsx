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

interface Props {
  jsonData: {
    [key: string]: IngredientType;
  };
}

const Select: React.FC<Props> = ({ jsonData }) => {
  const renderSelect = () => {
    return Object.values(jsonData).map(
      (type: IngredientType, index: number) => {
        const category = type.category.toLowerCase();
        return (
          <div className="burger-item clone-div" key={category}>
            <div className="label">{`${index + 1}. ${type.category}`}</div>
            <div
              className="field-row burger-options"
              data-option={type["dataOption"]}
            >
              <div className="field-wrap">
                <select
                  name={`choose-${category}`}
                  className={`craft-select ${category}`}
                >
                  {type.options.map((option: Option) => (
                    <option
                      key={option.name}
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

  return renderSelect();
};

export default Select;
