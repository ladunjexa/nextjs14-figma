import dynamic from "next/dynamic";

const App = dynamic(() => import("./(root)/page"), { ssr: false });

export default App;
