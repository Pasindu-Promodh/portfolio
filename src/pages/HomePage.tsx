import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import {
  GitHub,
  LinkedIn,
  Email,
  PlayArrow,
  KeyboardArrowRight,
  Code,
} from "@mui/icons-material";
import { useEffect } from "react";
import { Snackbar } from "@mui/material";

// Import your projects data
import projects from "../data/projects.json";
import skills from "../data/skills.json";
import projectMeta from "../data/projectMeta";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollPos = location.state?.scrollPos;

  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    if (typeof scrollPos === "number") {
      window.scrollTo(0, scrollPos);
    }
  }, [scrollPos]);

  const gotoPage = (page: string) => {
    navigate("/" + page);
  };

  const getProjectIcon = (type: string) => {
    const match = projectMeta.find((meta) => meta.value === type);
    return match?.icon || <Code />;
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
            <Grid size={{ xs: 12, md: 8 }}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    variant="h6"
                    color="rgba(255,255,255,0.8)"
                    gutterBottom
                  >
                    Hello, I'm Maneesha Goonetilleke
                  </Typography>
                  <Typography variant="h2" fontWeight="bold" gutterBottom>
                    Game Developer & Technical Artist
                  </Typography>
                  <Typography
                    variant="h5"
                    color="rgba(255,255,255,0.9)"
                    paragraph
                  >
                    Crafting immersive games, 3D models, and visual effects that
                    blend creativity with technical skill.
                  </Typography>
                  <Box
                    sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<KeyboardArrowRight />}
                      onClick={() => gotoPage("work")}
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
            <Grid size={{ xs: 12, md: 4 }}>
              <Slide direction="left" in timeout={1200}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    src="https://media.licdn.com/dms/image/v2/D5603AQGvGYe0q9xbIQ/profile-displayphoto-shrink_800_800/B56ZOVIrHDGoAc-/0/1733373900788?e=1756944000&v=beta&t=ZPQn5y_TtJFhq7DgO89uQo4Ib8oh6O7tFCZFcP7ApkE"
                    sx={{
                      width: 200,
                      height: 200,
                      border: "4px solid rgba(255,255,255,0.3)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
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
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={skill.name}>
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
              <Grid size={{ xs: 12, md: 4 }} key={project.title}>
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
                      // height="200"
                      sx={{
                        aspectRatio: "16/9",
                      }}
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
                        onClick={() => gotoPage("work")}
                      >
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>

          {/* View All Projects Button */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => gotoPage("work")}
              endIcon={<KeyboardArrowRight />}
              sx={{ px: 4, py: 1.5 }}
            >
              View All Projects
            </Button>
          </Box>
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
              onClick={() => {
                navigator.clipboard.writeText("maneegoon@gmail.com");
                setCopied(true);
              }}
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
              href="https://www.linkedin.com/in/manee8/"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://github.com/ManeeshaG1"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "#333",
                color: "white",
                "&:hover": { bgcolor: "#000", transform: "scale(1.1)" },
              }}
            >
              <GitHub />
            </IconButton>
          </Box>
          {/*<Button
            variant="contained"
            size="large"
            sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
          >
            Get In Touch
          </Button> */}
        </Box>
        <Snackbar
          open={copied}
          autoHideDuration={3000}
          onClose={() => setCopied(false)}
          message="Email copied to clipboard!"
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Container>
    </Box>
  );
};

export default Home;
