import { observer } from "mobx-react-lite";
import {Control, Score} from "./components";
import {ThemeProvider} from "@mui/system"
import theme from "./theme"
import {Game} from "./components"

const App = () => {
  return (
      <>
      <ThemeProvider theme={theme}>
        <Control/>
        <Score/>
        <Game/>
      </ThemeProvider>
      </>
  )
}

export default observer(App);