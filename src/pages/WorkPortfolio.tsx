import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Badge from "@mui/material/Badge";
import {
  Code,
  SportsEsports,
  PhoneIphone,
  Public,
  Star,
  ArrowBack,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects.json";

const WorkPortfolio: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const gotoPage = (page: string, id?: string, scrollPos?: number) => {
    const url = id ? `${page}/${id}` : page;
    navigate(url, { state: { scrollPos } });
  };

  const tabCategories = [
    { label: "All Projects", value: "all", count: projects.length },
    {
      label: "Games",
      value: "game",
      count: projects.filter((p) => p.type === "game").length,
    },
    {
      label: "Mobile Apps",
      value: "mobile",
      count: projects.filter((p) => p.type === "mobile").length,
    },
    {
      label: "Web Apps",
      value: "web",
      count: projects.filter((p) => p.type === "web").length,
    },
  ];

  const filteredProjects =
    selectedTab === 0
      ? projects
      : projects.filter(
          (project) => project.type === tabCategories[selectedTab].value
        );

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "game":
        return <SportsEsports />;
      case "mobile":
        return <PhoneIphone />;
      case "web":
        return <Public />;
      default:
        return <Code />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "success";
      case "in-progress":
        return "warning";
      case "concept":
        return "info";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "concept":
        return "Concept";
      default:
        return status;
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 6,
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <IconButton
              sx={{ color: "white", mr: 2 }}
              // onClick={() => window.history.back()}
              onClick={() => gotoPage("/")} // Navigate to home
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="rgba(255,255,255,0.8)">
              Back to Home
            </Typography>
          </Box>

          <Fade in timeout={800}>
            <Box>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                My Work Portfolio
              </Typography>
              <Typography variant="h5" color="rgba(255,255,255,0.9)" paragraph>
                A collection of games, 3D models, and visual effects I've built
              </Typography>
              <Typography variant="body1" color="rgba(255,255,255,0.8)">
                From immersive visuals to interactive gameplay, each project
                reflects my passion for creating engaging and polished digital
                experiences.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Filter Tabs */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabCategories.map((category) => (
              <Tab
                key={category.value}
                label={
                  <Badge badgeContent={category.count} color="primary">
                    {category.label}
                  </Badge>
                }
              />
            ))}
          </Tabs>
        </Box>

        {/* All Projects Grid */}
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            {selectedTab === 0
              ? "All Projects"
              : tabCategories[selectedTab].label}
          </Typography>
          <Grid container spacing={4}>
            {filteredProjects.map((project, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
                <Fade in timeout={800 + index * 200}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    {project.featured && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          zIndex: 1,
                        }}
                      >
                        <Chip
                          icon={<Star />}
                          label="Featured"
                          color="primary"
                          size="small"
                        />
                      </Box>
                    )}

                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
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

                      <Typography color="text.secondary" paragraph>
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
                    </CardContent>

                    <CardActions
                      sx={{ justifyContent: "space-between", px: 2, pb: 2 }}
                    >
                      <Chip
                        label={getStatusLabel(project.status)}
                        color={getStatusColor(project.status) as any}
                        size="small"
                      />

                      <Button
                        variant="contained"
                        startIcon={<Code />}
                        size="small"
                        onClick={() => gotoPage("/project", project.id)}
                      >
                        View Project
                      </Button>
                    </CardActions>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: "grey.50", py: 8, mt: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Interested in Working Together?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              paragraph
              sx={{ mb: 4 }}
            >
              I'm always excited to take on new challenges and create amazing
              experiences.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
              onClick={() => gotoPage("/", undefined, 99999)}
            >
              Get In Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WorkPortfolio;
