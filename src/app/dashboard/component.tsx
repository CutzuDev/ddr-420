"use client";

import useStore from "~/store/useStore";
import { create } from "../actions";
function Component() {
  const { text, setText } = useStore();
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        placeholder="Enter text..."
      />
    </div>
  );
}

export default Component;
