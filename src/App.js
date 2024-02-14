import Dashboard from "./Componaets/Dashboard";
import Side from "./Componaets/Side";

function App() {
  return <>
            <div id="wrapper">
              <Side/>
              <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Dashboard/>
            
        </div>
      </div>
      </div>


</>
}
export default App;
