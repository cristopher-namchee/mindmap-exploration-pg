import {
  addEdge,
  Controls,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import type { Node, Edge } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useCallback } from "react";

// 1 Dependency

const initialNodes: Node[] = [
  {
    id: "root",
    position: { x: 262.5, y: 150 },
    data: { label: "GLChat Evaluator" },
    draggable: true,
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "sdk",
    position: { x: 75, y: 120 },
    data: { label: "Evaluator SDK" },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "target",
    position: { x: 75, y: 180 },
    data: { label: "Deployment Targets" },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },

  {
    id: "endpoints",
    position: { x: 450, y: 120 },
    data: { label: "Integration Endpoints" },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "quick-start",
    position: { x: 450, y: 180 },
    data: { label: "Quick Start Resources" },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "smart-engine",
    position: { x: -100, y: 40 },
    data: { label: "Smart Quality Engine" },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "smart-engine",
    position: { x: -100, y: 40 },
    data: { label: "Smart Quality Engine" },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "developer-access-kit",
    position: { x: -100, y: 90 },
    data: { label: "Developer Access Kit" },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
  {
    id: "developer-access-kit",
    position: { x: -100, y: 90 },
    data: { label: "Developer Access Kit" },
    sourcePosition: Position.Left,
    targetPosition: Position.Right,
  },
];

const initialEdges: Edge[] = [
  { id: "e-1", source: "root", target: "sdk" },
  { id: "e-2", source: "root", target: "target" },
  { id: "e-3", source: "endpoints", target: "root" },
  { id: "e-4", source: "quick-start", target: "root" },
  { id: "e-5", source: "sdk", target: "smart-engine" },
  { id: "e-6", source: "sdk", target: "developer-access-kit" },
];

/**
 * Features
 *
 * Zoom
 * Pane
 *
 * Bad positioning controls
 * Bayar gan, recalc
 */

export function ReactflowMindmap() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlowProvider>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <ReactFlow
          fitView
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        />
        <Controls />
      </div>
    </ReactFlowProvider>
  );
}
