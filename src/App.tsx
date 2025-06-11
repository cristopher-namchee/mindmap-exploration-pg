import { ReactflowMindmap } from "./reactflow/Normal";

function App() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
      <div className="border-r border-b border-gray-200">
        <ReactflowMindmap />
      </div>

      <div>a</div>

      <div>b</div>

      <div>c</div>
    </div>
  );
}

export default App;
