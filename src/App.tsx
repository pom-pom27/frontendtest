import "./app.scss";
import HomePage from "./pages/home-page/HomePage";
interface IApp {}

const App = ({}: IApp) => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
