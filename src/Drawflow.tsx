import DrawFlow from "drawflow";
import "drawflow/dist/drawflow.min.css";
import { useEffect, useRef } from "react";

export function Drawflow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const editor = new DrawFlow(ref.current);
    editor.reroute = true;

    editor.start();

    // Main idea node
    const root = editor.addNode(
      "root",
      1,
      1,
      0,
      100,
      "central",
      { title: "GLCHat Evaluator" },
      `<div><strong>GLChat Evaluator</strong></div>`,
      false
    );

    // Branches
    const evaluator = editor.addNode(
      "evaluator",
      1,
      1,
      -200,
      300,
      "idea",
      { title: "Evaluator SDK" },
      `<div>Evaluator SDK</div>`,
      false
    );

    const deployment = editor.addNode(
      "deployment",
      1,
      1,
      0,
      300,
      "idea",
      { title: "Deployment Targets" },
      `<div>Deployment Targets</div>`,
      false
    );

    const integration = editor.addNode(
      "integration",
      1,
      1,
      200,
      300,
      "idea",
      { title: "Integration" },
      `<div>Integration Endpoints</div>`,
      false
    );

    // Connect them to the central node
    editor.addConnection(evaluator, root, "output_1", "input_1");
    editor.addConnection(deployment, root, "output_1", "input_1");
    editor.addConnection(integration, root, "output_1", "input_1");

    // Bad API
    // Calculate position manually, good luck!
    // very very frustrating to use.
    return () => {
      editor.clear();
    };
  }, []);

  return <div id="drawflow" ref={ref} className="w-full h-full" />;
}
