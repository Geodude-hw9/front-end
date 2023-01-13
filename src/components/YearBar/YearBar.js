import "./YearBar.css";
import YearButton from "./YearButton";

const YearBar = () => {
  const years = [];
  for (let i = 2022; i > 2008; i--) {
    years.push(i);
  }

  return (
    <div className="yearBar">
      {years.map((year) => (
        <YearButton buttonLabel={year} />
      ))}
    </div>
  );
};

export default YearBar;
