import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";
function App() {
	return (
		<div
			className="w-screen h-screen flex flex-col justify-center items-center"
			style={{ backgroundImage: "url(/img/bg.png)" }}
		>
			<Header />
			<Routes>
				<Route path="/" element={<Content />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;