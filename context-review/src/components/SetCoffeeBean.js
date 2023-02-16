import { useCoffee } from "../context/CoffeeContext";

const SetCoffeeBean = ({coffeeBeans}) => {

  const { coffeeBean, setCoffeeBeanId } = useCoffee();

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        onChange={e => setCoffeeBeanId(e.target.value)}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            
            {/* {console.log(bean.id)} */}
            {bean.name}
          </option>
        ))} 
      </select>
    </div>
  );
}

export default SetCoffeeBean;