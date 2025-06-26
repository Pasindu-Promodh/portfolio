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
import Tooltip from "@mui/material/Tooltip";
import {
  GitHub,
  Launch,
  PlayArrow,
  Code,
  SportsEsports,
  PhoneIphone,
  Public,
  Star,
  Visibility,
  Download,
  ArrowBack,
} from "@mui/icons-material";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  type: "game" | "mobile" | "web" | "all";
  status: "completed" | "in-progress" | "concept";
  featured: boolean;
  github?: string;
  demo?: string;
  download?: string;
  stats?: {
    stars?: number;
    downloads?: number;
    views?: number;
  };
}

const WorkPortfolio: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const projects: Project[] = [
    {
      id: "1",
      title: "Mystic Realms",
      description: "A 2D adventure RPG with procedural dungeon generation",
      longDescription: "An immersive 2D adventure RPG built with Unity featuring custom physics engine, procedural dungeon generation, dynamic lighting system, and original soundtrack. Players explore mystical realms, battle creatures, and uncover ancient secrets in this pixel-art masterpiece.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
      tags: ["Unity", "C#", "Game Design", "Pixel Art", "Audio"],
      type: "game",
      status: "completed",
      featured: true,
      github: "https://github.com/username/mystic-realms",
      demo: "https://play.unity.com/mg/other/mystic-realms",
      download: "https://itch.io/mystic-realms",
      stats: { stars: 245, downloads: 12000, views: 45000 }
    },
    {
      id: "2",
      title: "TaskFlow Mobile",
      description: "Cross-platform productivity app with real-time collaboration",
      longDescription: "A comprehensive task management application built with React Native and TypeScript. Features real-time collaboration, offline sync, custom animations, push notifications, and intelligent task prioritization using machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      tags: ["React Native", "TypeScript", "Firebase", "Machine Learning", "UX/UI"],
      type: "mobile",
      status: "completed",
      featured: true,
      github: "https://github.com/username/taskflow-mobile",
      demo: "https://expo.dev/@username/taskflow",
      stats: { stars: 180, downloads: 8500 }
    },
    {
      id: "3",
      title: "Analytics Dashboard Pro",
      description: "Modern data visualization dashboard with real-time updates",
      longDescription: "A sophisticated analytics dashboard built with React, TypeScript, and MUI. Features real-time data visualization, customizable widgets, advanced filtering, export capabilities, and responsive design that works seamlessly across all devices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["React", "TypeScript", "MUI", "D3.js", "WebSockets", "Data Viz"],
      type: "web",
      status: "completed",
      featured: true,
      github: "https://github.com/username/analytics-dashboard",
      demo: "https://analytics-dashboard-pro.vercel.app",
      stats: { stars: 320, views: 25000 }
    },
    {
      id: "4",
      title: "Retro Arcade Collection",
      description: "HTML5 games built with Construct 2 engine",
      longDescription: "A collection of classic arcade-style games recreated using Construct 2. Includes Pac-Man inspired maze runner, Tetris-like puzzle game, and Space Invaders clone. All games feature modern graphics, sound effects, and mobile-responsive controls.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop",
      tags: ["Construct 2", "HTML5", "Game Design", "Retro Gaming"],
      type: "game",
      status: "completed",
      featured: false,
      demo: "https://retro-arcade-collection.netlify.app",
      stats: { views: 15000 }
    },
    {
      id: "5",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with admin panel",
      longDescription: "A complete e-commerce platform built with React frontend and Java Spring Boot backend. Features product catalog, shopping cart, payment integration, order management, inventory tracking, and comprehensive admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      tags: ["React", "Java", "Spring Boot", "MySQL", "Stripe", "Admin Panel"],
      type: "web",
      status: "completed",
      featured: false,
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce-demo.herokuapp.com",
      stats: { stars: 95, views: 8000 }
    },
    {
      id: "6",
      title: "AR Furniture Visualizer",
      description: "Augmented reality app for furniture placement",
      longDescription: "An innovative AR application built with Unity and ARCore/ARKit that allows users to visualize furniture in their real-world environment. Features 3D model library, realistic lighting, measurement tools, and social sharing capabilities.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop",
      tags: ["Unity", "AR", "C#", "ARCore", "ARKit", "3D Modeling"],
      type: "mobile",
      status: "in-progress",
      featured: true,
      github: "https://github.com/username/ar-furniture",
      stats: { stars: 150 }
    }
  ];

  const tabCategories = [
    { label: "All Projects", value: "all", count: projects.length },
    { label: "Games", value: "game", count: projects.filter(p => p.type === "game").length },
    { label: "Mobile Apps", value: "mobile", count: projects.filter(p => p.type === "mobile").length },
    { label: "Web Apps", value: "web", count: projects.filter(p => p.type === "web").length },
  ];

  const filteredProjects = selectedTab === 0 
    ? projects 
    : projects.filter(project => project.type === tabCategories[selectedTab].value);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "game": return <SportsEsports />;
      case "mobile": return <PhoneIphone />;
      case "web": return <Public />;
      default: return <Code />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "success";
      case "in-progress": return "warning";
      case "concept": return "info";
      default: return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "concept": return "Concept";
      default: return status;
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
              onClick={() => window.history.back()}
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
                A collection of games, mobile apps, and web applications I've built
              </Typography>
              <Typography variant="body1" color="rgba(255,255,255,0.8)">
                From immersive gaming experiences to practical software solutions, 
                each project represents my passion for creating meaningful digital experiences.
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

        {/* Featured Projects */}
        {selectedTab === 0 && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Featured Projects
            </Typography>
            <Grid container spacing={4}>
              {projects.filter(p => p.featured).map((project, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
                  <Fade in timeout={800 + index * 200}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                        },
                      }}
                    >
                      <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 1 }}>
                        <Chip
                          icon={<Star />}
                          label="Featured"
                          color="primary"
                          size="small"
                        />
                      </Box>
                      
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                      />
                      
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                          {getProjectIcon(project.type)}
                          <Typography variant="h6" fontWeight="bold" sx={{ ml: 1, mr: 2 }}>
                            {project.title}
                          </Typography>
                          <Chip
                            label={getStatusLabel(project.status)}
                            color={getStatusColor(project.status) as any}
                            size="small"
                          />
                        </Box>
                        
                        <Typography color="text.secondary" paragraph>
                          {project.longDescription}
                        </Typography>
                        
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                          {project.tags.map((tag) => (
                            <Chip key={tag} label={tag} size="small" variant="outlined" />
                          ))}
                        </Box>

                        {project.stats && (
                          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                            {project.stats.stars && (
                              <Tooltip title="GitHub Stars">
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                  <Star fontSize="small" color="action" />
                                  <Typography variant="caption">
                                    {project.stats.stars}
                                  </Typography>
                                </Box>
                              </Tooltip>
                            )}
                            {project.stats.downloads && (
                              <Tooltip title="Downloads">
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                  <Download fontSize="small" color="action" />
                                  <Typography variant="caption">
                                    {project.stats.downloads.toLocaleString()}
                                  </Typography>
                                </Box>
                              </Tooltip>
                            )}
                            {project.stats.views && (
                              <Tooltip title="Views">
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                  <Visibility fontSize="small" color="action" />
                                  <Typography variant="caption">
                                    {project.stats.views.toLocaleString()}
                                  </Typography>
                                </Box>
                              </Tooltip>
                            )}
                          </Box>
                        )}
                      </CardContent>
                      
                      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                        <Box>
                          {project.demo && (
                            <Button
                              variant="contained"
                              startIcon={<PlayArrow />}
                              size="small"
                              sx={{ mr: 1 }}
                            >
                              Demo
                            </Button>
                          )}
                          {project.download && (
                            <Button
                              variant="outlined"
                              startIcon={<Download />}
                              size="small"
                            >
                              Download
                            </Button>
                          )}
                        </Box>
                        
                        <Box>
                          {project.github && (
                            <IconButton size="small">
                              <GitHub />
                            </IconButton>
                          )}
                          <IconButton size="small">
                            <Launch />
                          </IconButton>
                        </Box>
                      </CardActions>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* All Projects Grid */}
        <Box>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            {selectedTab === 0 ? "All Projects" : tabCategories[selectedTab].label}
          </Typography>
          <Grid container spacing={3}>
            {filteredProjects.map((project, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.id}>
                <Fade in timeout={600 + index * 100}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={project.image}
                      alt={project.title}
                    />
                    
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        {getProjectIcon(project.type)}
                        <Typography variant="h6" fontWeight="medium" sx={{ ml: 1 }}>
                          {project.title}
                        </Typography>
                        {project.featured && (
                          <Star fontSize="small" color="primary" sx={{ ml: "auto" }} />
                        )}
                      </Box>
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                        {project.tags.slice(0, 3).map((tag) => (
                          <Chip key={tag} label={tag} size="small" variant="outlined" />
                        ))}
                        {project.tags.length > 3 && (
                          <Chip 
                            label={`+${project.tags.length - 3}`} 
                            size="small" 
                            variant="outlined" 
                          />
                        )}
                      </Box>

                      <Chip
                        label={getStatusLabel(project.status)}
                        color={getStatusColor(project.status) as any}
                        size="small"
                      />
                    </CardContent>
                    
                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <Button
                        variant="text"
                        startIcon={<Code />}
                        size="small"
                      >
                        View Details
                      </Button>
                      
                      <Box>
                        {project.github && (
                          <IconButton size="small">
                            <GitHub />
                          </IconButton>
                        )}
                        {project.demo && (
                          <IconButton size="small">
                            <Launch />
                          </IconButton>
                        )}
                      </Box>
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
            <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
              I'm always excited to take on new challenges and create amazing experiences.
            </Typography>
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
    </Box>
  );
};

export default WorkPortfolio;