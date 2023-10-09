import { createRoot } from "react-dom";
import Pet from "./Pet";


const App = () => {
 <div>
  <h1>Adopt Me!</h1>
  <Pet name ="Luna" animal="dog" breed="Havanese" />
  <Pet name ="Missile" animal="dog" breed="Corgi" />
  <Pet name ="Meowy" animal="cat" breed="Magpie" />
 </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
