import dynamic from "next/dynamic";

const App = dynamic(() => import("./(root)/app"), { ssr: false });

export default App;
