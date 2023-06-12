import "@fontsource/open-sans"
import "@fontsource/open-sans/700.css"
import "./index.css"
import React, { StrictMode } from "react"
import Game from "./App"

import { createRoot } from "react-dom/client"
const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <StrictMode>
    <Game />
  </StrictMode>
)
