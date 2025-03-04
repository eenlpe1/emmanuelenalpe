import { Analytics } from "@vercel/analytics/next";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <HomePage />
      <Analytics />
    </>
  );
}

export default App;
