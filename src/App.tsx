import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import Home from "./pages/HomePage";
import Work from "./pages/WorkPortfolio";
import ProjectDetail from "./pages/ProjectDetail";

// const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#667eea',
//     },
//     secondary: {
//       main: '#764ba2',
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
