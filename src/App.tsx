import { useEffect } from "react";
import { Index } from "./components";
import { ThemeWhiteState, ThemeBlackState, useToggleTheme } from "./hooks/useToggleTheme";

function App() {

	const [theme, setTheme] = useToggleTheme();

  useEffect(() => {
		if (localStorage.getItem('Theme') != "") {
			setTheme(localStorage.getItem('Theme') == 'white' ? ThemeWhiteState : ThemeBlackState)
		} else {
			setTheme(ThemeWhiteState)
		}
	}, [])

  return (
    <div className="App">
      <Index/>
    </div>
  );
}

export default App;
