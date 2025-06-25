// import { Box, Typography, Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { motion } from 'framer-motion';

// const ArcadeHero = styled(Box)(({ theme }) => ({
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   background: '#1a1a1a',
//   position: 'relative',
//   overflow: 'hidden',
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 3px)', // Scanlines
//     pointerEvents: 'none',
//   },
// }));

// const PixelTypography = styled(Typography)(({ theme }) => ({
//   color: theme.palette.primary.main,
//   textShadow: '0 0 10px #00ffcc, 0 0 20px #ff00ff',
//   padding: '10px',
// }));

// function Home() {
//   return (
//     <ArcadeHero
//       component={motion.div}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <PixelTypography variant="h1">INSERT COIN TO PLAY</PixelTypography>
//       <Typography
//         variant="body1"
//         sx={{ color: '#fff', mt: 2, maxWidth: 600, textAlign: 'center', fontFamily: 'Roboto' }}
//       >
//         I’m [Your Name], a game dev crafting pixel-perfect adventures and tech wizardry.
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         sx={{ mt: 4, fontFamily: 'Press Start 2P', padding: '10px 20px' }}
//         href="/your-cv.pdf" // Update with your CV path
//         download
//       >
//         GRAB CV
//       </Button>
//     </ArcadeHero>
//   );
// }

// export default Home;

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import {
  GitHub,
  LinkedIn,
  Email,
  PlayArrow,
  Code,
  GamepadOutlined,
  WebOutlined,
  MobileOffOutlined,
  KeyboardArrowRight,
} from "@mui/icons-material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PublicIcon from '@mui/icons-material/Public';

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const skills = [
    { name: "Unity", icon: "🎮", color: "#FF6B35" },
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "React Native", icon: "📱", color: "#61DAFB" },
    { name: "TypeScript", icon: "📘", color: "#3178C6" },
    { name: "Java", icon: "☕", color: "#ED8B00" },
    { name: "Construct 2", icon: "🛠️", color: "#4CAF50" },
    { name: "HTML/CSS", icon: "🌐", color: "#E34F26" },
    { name: "MUI", icon: "🎨", color: "#007FFF" },
  ];

  const projects = [
    {
      title: "Indie Adventure Game",
      description:
        "A 2D platformer built with Unity featuring custom physics and procedural level generation.",
      image:
        "https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=1200&quality=85&auto=format&fit=max&s=5c5b07b8cc96af633881fb903fb14a83",
      tags: ["Unity", "C#", "Game Design"],
      type: "game",
    },
    {
      title: "Cross-Platform Mobile App",
      description:
        "React Native app with real-time features and custom animations.",
      image:
        "https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=1200&quality=85&auto=format&fit=max&s=5c5b07b8cc96af633881fb903fb14a83",
      tags: ["React Native", "TypeScript", "Firebase"],
      type: "mobile",
    },
    {
      title: "Web Dashboard",
      description:
        "Modern admin dashboard with data visualization and responsive design.",
      image:
        "https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=1200&quality=85&auto=format&fit=max&s=5c5b07b8cc96af633881fb903fb14a83",
      tags: ["React", "MUI", "TypeScript"],
      type: "web",
    },
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "game":
        return <SportsEsportsIcon />;
      case "mobile":
        return <PhoneIphoneIcon />;
      case "web":
        return <PublicIcon />;
      default:
        return <Code />;
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.2)",
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    variant="h6"
                    color="rgba(255,255,255,0.8)"
                    gutterBottom
                  >
                    Hello, I'm
                  </Typography>
                  <Typography variant="h2" fontWeight="bold" gutterBottom>
                    Game Developer & Software Engineer
                  </Typography>
                  <Typography
                    variant="h5"
                    color="rgba(255,255,255,0.9)"
                    paragraph
                  >
                    Crafting immersive gaming experiences and robust software
                    solutions
                  </Typography>
                  <Box
                    sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<KeyboardArrowRight />}
                      sx={{
                        bgcolor: "white",
                        color: "primary.main",
                        "&:hover": { bgcolor: "grey.100" },
                      }}
                    >
                      View My Work
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: "white",
                        color: "white",
                        "&:hover": {
                          borderColor: "grey.300",
                          bgcolor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      Download Resume
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={4}>
              <Slide direction="left" in timeout={1200}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    sx={{
                      width: 200,
                      height: 200,
                      border: "4px solid rgba(255,255,255,0.3)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    }}
                  >
                    <Typography variant="h1">👨‍💻</Typography>
                  </Avatar>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
          Technical Skills
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Technologies I work with to bring ideas to life
        </Typography>

        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={skill.name}>
              <Fade in timeout={800 + index * 100}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ py: 3 }}>
                    <Typography variant="h2" sx={{ mb: 1 }}>
                      {skill.icon}
                    </Typography>
                    <Typography variant="h6" fontWeight="medium">
                      {skill.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Projects */}
      <Box sx={{ bgcolor: "grey.50", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            A showcase of my recent game development and software engineering
            work
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={project.title}>
                <Fade in timeout={1000 + index * 200}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        {getProjectIcon(project.type)}
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ ml: 1 }}
                        >
                          {project.title}
                        </Typography>
                      </Box>
                      <Typography
                        color="text.secondary"
                        paragraph
                        sx={{ flexGrow: 1 }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 2,
                        }}
                      >
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                      <Button
                        variant="text"
                        endIcon={<PlayArrow />}
                        sx={{ alignSelf: "flex-start" }}
                      >
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom fontWeight="bold">
            Let's Work Together
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{ mb: 4 }}
          >
            Ready to bring your next project to life? Let's connect!
          </Typography>

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}
          >
            <IconButton
              color="primary"
              size="large"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                "&:hover": { bgcolor: "primary.dark", transform: "scale(1.1)" },
              }}
            >
              <Email />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              sx={{
                bgcolor: "#0077B5",
                color: "white",
                "&:hover": { bgcolor: "#005885", transform: "scale(1.1)" },
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              sx={{
                bgcolor: "#333",
                color: "white",
                "&:hover": { bgcolor: "#000", transform: "scale(1.1)" },
              }}
            >
              <GitHub />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            size="large"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            Get In Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
