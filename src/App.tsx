import { Drawflow } from "./Drawflow";
import { JSMind } from "./JSMind";
import { Mindelixir } from "./MindElixir";
import { ReactflowMindmap } from "./Reactflow";

function App() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
      <div className="border-r border-b border-gray-200 relative">
        <p className="absolute top-2 right-2 z-20 text-xs text-indigo-500">
          <a
            href="https://reactflow.dev/"
            target="_blank"
            rel="noopener noreferer"
          >
            ReactFlow
          </a>
        </p>

        <ReactflowMindmap />
      </div>

      <div className="border-b border-gray-200 relative">
        <p className="absolute top-2 right-2 z-20 text-xs text-indigo-500">
          <a
            href="https://docs.mind-elixir.com/"
            target="_blank"
            rel="noopener noreferer"
          >
            MindElixir
          </a>
        </p>
        <Mindelixir />
      </div>

      <div className="border-b border-gray-200 relative">
        <p className="absolute top-2 right-2 z-20 text-xs text-indigo-500">
          <a
            href="https://github.com/jerosoler/Drawflow"
            target="_blank"
            rel="noopener noreferer"
          >
            DrawFlow
          </a>
        </p>
        <Drawflow />
      </div>

      <div className="relative">
        <p className="absolute top-2 right-2 z-20 text-xs text-indigo-500">
          <a
            href="https://github.com/hizzgdev/jsmind"
            target="_blank"
            rel="noopener noreferer"
          >
            JSMind
          </a>
        </p>
        <JSMind />
      </div>
    </div>
  );
}

export default App;
