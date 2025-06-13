import jsMind from "jsmind";
import "jsmind/style/jsmind.css";
import { useEffect, useRef } from "react";

// Not mature, no typescript types
// No Controls
// No Native Element

export function JSMind() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.innerHTML = "";
    }

    const data = {
      meta: {
        name: "GLChat Evaluator",
        author: "Namchee",
        version: "0.1",
      },
      format: "node_tree",
      data: {
        id: "root",
        topic: "GLChat Evaluator",
        children: [
          {
            id: "sdk",
            topic: "Evaluator SDK",
            expanded: false,
            direction: "left",
            children: [
              {
                id: "smart-quality-engine",
                topic: "Smart Quality Engine",
                children: [
                  {
                    id: "metrics",
                    topic:
                      "LLM-based Metrics (Hallucination, Completeness, Redundancy)",
                  },
                  {
                    id: "retrieval",
                    topic: " Retrieval Metrics (Recall, Precision)",
                  },
                ],
              },
              {
                id: "developer-access-kit",
                topic: "Developer Access Kit",
              },
              {
                id: "tracking-compliance",
                topic: "Seamless Tracking & Compliance Layer",
              },
            ],
          },
          {
            id: "deployment",
            topic: "Deployment Targets",
            direction: "left",
          },
          {
            id: "integration",
            topic: "Integration Endpoints",
            direction: "right",
          },
          {
            id: "quick-start",
            topic: "Quick-Start Resources",
            direction: "right",
          },
        ],
      },
    };

    const options = {
      container: "container",
      theme: "primary",
      editable: true,
      mode: "full", // not working?
      view: {
        engine: "svg", // Rendering engine for lines between nodes
        hmargin: 100, // Minimum horizontal distance from the container
        vmargin: 50, // Minimum vertical distance from the container
        line_width: 2, // Width of the lines
        line_color: "#555", // Color of the lines
        line_style: "curved", // Style of the lines, straight or curved
        custom_line_render: null, // Custom line rendering method
        draggable: false, // Whether dragging the canvas is allowed
        hide_scrollbars_when_draggable: false, // Whether to hide scrollbars when draggable is true
        node_overflow: "hidden", // Style when node text is too long
        enable_device_pixel_ratio: false, // Render high-definition mind maps according to device pixel ratio
        expander_style: "char", // Style of the child node expander
        zoom: {
          // Zoom configuration
          min: 0.5, // Minimum zoom ratio
          max: 2.1, // Maximum zoom ratio
          step: 0.1, // Zoom ratio step
        },
        custom_node_render: null, // Custom node rendering method
      },
    };

    const jm = new jsMind(options);

    jm.show(data);
  }, []);

  return <div id="container" className="w-full h-full" ref={ref} />;
}
