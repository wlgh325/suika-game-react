import { observer } from "mobx-react-lite";
import {ThemeProvider} from "@mui/system"
import theme from "./theme"
import Router from "./routes"

const App = () => {
  return (
      <>
          <ThemeProvider theme={theme}>
              <Router/>
          </ThemeProvider>
      </>
  )
}

export default observer(App);