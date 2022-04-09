import Router from "./Routes"
import {ThemeProvider} from 'styled-components';
import {User} from "./contexts/auth";
import {Alert} from "./contexts/alertBoxContext"
import AlertBox from "./Components/alertBox/alertBox";

interface ICart {
  cardBackground: string
}
interface IButtom {
  textColor: string,
  secondaryBackground: string
}
interface ITheme {
  primary: string,
  secondary: string,
  textColor: string,
  card: ICart,
  buttom: IButtom
}

const lightTheme:ITheme = {
  primary: "#00A86B",
  secondary: "#FFBC40",
  textColor: "#000000",
  card: {
    cardBackground: "#FFFFFF"
  },
  buttom: {
    textColor: "#FFFFFF",
    secondaryBackground: "#FFFFFF"
  }
}

// const darkTheme:ITheme = {
//   primary: "#00A86B",
//   secondary: "#FFBC40",
//   textColor: "#000000",
//   card: {
//     cardBackground: "#FFFFFF"
//   },
//   buttom: {
//     textColor: "#FFFFFF",
//     secondaryBackground: "#FFFFFF"
//   }
// }

function App() {

  return (
    <Alert>
      <User>
          <ThemeProvider theme={lightTheme}>
            <AlertBox />
            <Router />
          </ThemeProvider>
      </User>
    </Alert>
  );
}

export default App;
