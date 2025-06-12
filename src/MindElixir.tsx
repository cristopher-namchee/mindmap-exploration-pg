import MindElixir, { type MindElixirInstance } from "mind-elixir";
import { useEffect, useRef, type RefObject } from "react";

const root = MindElixir.new("");
root.nodeData = {
  topic: "GLChat Evaluator",
  id: "root",
  children: [
    {
      topic: "Evaluator SDK",
      id: "evaluator",
      children: [
        {
          topic: "Smart Quality Engine",
          id: "smart-quality-engine",
        },
        {
          topic: "Developer Access Kit",
          id: "developer-access-kit",
        },
        {
          topic: "Seamless Tracking & Compliance Layer",
          id: "tracking-compliance",
        },
      ],
    },
    {
      topic: "Deployment Targets",
      id: "deployment",
    },
    {
      topic: "Integration Endpoints",
      id: "integration",
    },
    {
      topic: "Quick-Start Resources",
      id: "quick-start",
    },
  ],
};

const lightTheme = {
  name: "Light",
  palette: [
    // group colors
    "#309898",
    "#FF9F00",
    "#F4631E",
    "#CB0404",
  ],
  cssVar: {
    "--main-bgcolor": "#FFFFFA",
    "--bgcolor": "#FAFAFA",
  },
};

const darkTheme = {
  name: "Dark",
  palette: [
    // group colors
    "#309898",
    "#FF9F00",
    "#F4631E",
    "#CB0404",
  ],
  cssVar: {
    "--main-bgcolor": "#121212",
    "--bgcolor": "#040404",
  },
};

// Zero to no documentation, but can be found by digging the code a bit

export function Mindelixir() {
  const ref = useRef<MindElixirInstance | null>(null);

  function addNewNode() {
    if (ref.current === null) {
      return;
    }

    ref.current.addChild(MindElixir.E("root"));
  }

  function switchTheme() {
    if (ref.current === null) {
      return;
    }

    ref.current.changeTheme(
      ref.current.theme.name === "Light" ? darkTheme : lightTheme
    );
  }

  // No native element
  useEffect(() => {
    const instance = new MindElixir({
      el: "#mm",
      direction: MindElixir.SIDE,
      draggable: true,
      theme: lightTheme,
    });

    instance.init(root);
    ref.current = instance;
  });

  // Need to typecase a lot
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-4 z-10 left-[50%] -translate-x-[50%] space-x-2">
        <button
          className="text-sm bg-blue-600 text-white p-2 px-4 rounded-lg"
          onClick={addNewNode}
        >
          Add New Node
        </button>

        <button
          className="text-sm bg-blue-600 text-white p-2 px-4 rounded-lg"
          onClick={switchTheme}
        >
          Switch Theme
        </button>
      </div>

      <div
        id="mm"
        ref={ref as unknown as RefObject<HTMLDivElement>}
        className="w-full h-full"
      />
    </div>
  );
}
