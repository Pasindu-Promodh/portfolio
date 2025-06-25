// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link } from 'react-router-dom';

// const ArcadeAppBar = styled(AppBar)(({ }) => ({
//   background: 'linear-gradient(90deg, rgba(0, 255, 204, 0.1), rgba(255, 0, 255, 0.1))',
//   borderBottom: '4px solid',
//   borderImage: 'linear-gradient(90deg, #00ffcc, #ff00ff) 1',
//   boxShadow: '0 0 15px rgba(255, 0, 255, 0.5)',
//   position: 'fixed',
//   top: 0,
//   zIndex: 1000,
// }));

// const PixelButton = styled(Button)(({ theme }) => ({
//   color: '#fff',
//   fontFamily: 'Press Start 2P',
//   fontSize: '0.9rem',
//   margin: '0 15px',
//   textShadow: '0 0 5px #00ffcc',
//   '&:hover': {
//     color: theme.palette.secondary.main,
//     textShadow: '0 0 10px #ff00ff',
//   },
// }));

// function Navbar() {
//   return (
//     <ArcadeAppBar>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Press Start 2P', color: '#00ffcc' }}>
//           [Player One]
//         </Typography>
//         <PixelButton component={Link} to="/">HOME</PixelButton>
//         <PixelButton component={Link} to="/projects">PROJECTS</PixelButton>
//         <PixelButton component={Link} to="/contact">CONTACT</PixelButton>
//       </Toolbar>
//     </ArcadeAppBar>
//   );
// }

// export default Navbar;