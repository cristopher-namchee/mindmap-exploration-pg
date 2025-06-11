// n

import { ReactFlow } from "@xyflow/react";
import type { Node } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const nodes: Node[] = [{ id: "a", data: { label: "Foo" } }];

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={initialEdges} />
    </div>
  );
}

export default App;
