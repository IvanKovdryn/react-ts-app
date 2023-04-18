import React, { createElement as e, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return e("div", { className: "container m-5" }, [
    e("h1", { className: "font-bold m-2 px-2", key: 1 }, `test tsx ${count}`),
    e(
      "button",
      {
        className: "py-2 px-4 border m-2",
        key: 2,
        onClick: () => {
          setCount(count + 1);
        },
      },
      "click me!"
    ),
  ]);
}
