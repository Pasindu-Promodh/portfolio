import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import {
  GitHub,
  PlayArrow,
  Code,
  SportsEsports,
  PhoneIphone,
  Public,
  Star,
  Download,
  ArrowBack,
  Close,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";

// Import your projects data
import projects from "../data/projects.json";
import { Fade } from "@mui/material";

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Find the project based on the ID from URL parameters
  const project = projects.find((p) => p.id.toString() === id);

  const gotoPage = (page: string, id?: number) => {
    const url = id ? `${page}/${id}` : page;
    navigate(url);
  };

  if (!project) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" color="error">
          Project not found!
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate("/work")}
        >
          Back to Portfolio
        </Button>
      </Container>
    );
  }

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "game":
        return <SportsEsports sx={{ fontSize: "2rem" }} />;
      case "mobile":
        return <PhoneIphone sx={{ fontSize: "2rem" }} />;
      case "web":
        return <Public sx={{ fontSize: "2rem" }} />;
      default:
        return <Code sx={{ fontSize: "2rem" }} />;
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

  // Media gallery data (main image + additional media)
  const allMedia = [project.image, ...(project.media || [])];

  const openFullscreen = (imageSrc: string) => {
    const imageIndex = allMedia.findIndex((media) => media === imageSrc);
    setCurrentImageIndex(imageIndex);
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const goToPrevImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? allMedia.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setFullscreenImage(allMedia[prevIndex]);
  };

  const goToNextImage = () => {
    const nextIndex =
      currentImageIndex === allMedia.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
    setFullscreenImage(allMedia[nextIndex]);
  };

  // Handle escape key to close fullscreen and arrow keys for navigation
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeFullscreen();
      } else if (event.key === "ArrowLeft") {
        goToPrevImage();
      } else if (event.key === "ArrowRight") {
        goToNextImage();
      }
    };

    if (fullscreenImage) {
      document.addEventListener("keydown", handleKeydown);
      return () => document.removeEventListener("keydown", handleKeydown);
    }
  }, [fullscreenImage, currentImageIndex, allMedia]);

  return loaded ? (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
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
              onClick={() => navigate("/work")}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="rgba(255,255,255,0.8)">
              Back to Portfolio
            </Typography>
          </Box>

          <Fade in timeout={800}>
            <Box>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="h5" color="rgba(255,255,255,0.9)" paragraph>
                {project.description}
              </Typography>
              {/* <Typography variant="body1" color="rgba(255,255,255,0.8)">
                From immersive visuals to interactive gameplay, each project
                reflects my passion for creating engaging and polished digital
                experiences.
              </Typography> */}
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Project Image and Details */}
      <Fade in={loaded} timeout={1000}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            {/* Main Image with Featured Tag */}
            <Box
              sx={{
                position: "relative",
                mb: 4,
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: "100%",
                  // height: { xs: 200, sm: 300, md: 400 },
                  aspectRatio: "16/6",
                  objectFit: "cover",
                  display: "block",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => openFullscreen(project.image)}
              />
              {/* Featured Tag - Top Right */}
              {project.featured && (
                <Chip
                  icon={<Star />}
                  label="Featured"
                  color="primary"
                  size="medium"
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    fontWeight: "bold",
                    zIndex: 1,
                  }}
                />
              )}
            </Box>

            {/* Media Gallery Thumbnails */}
            {allMedia.length > 1 && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Media Gallery
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  {allMedia.map((mediaSrc, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        width: { xs: 80, sm: 100, md: 120 },
                        aspectRatio: "16/9",
                        borderRadius: 1,
                        overflow: "hidden",
                        cursor: "pointer",
                        border: "2px solid transparent",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          border: "2px solid #1976d2",
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        },
                      }}
                      onClick={() => openFullscreen(mediaSrc)}
                    >
                      <Box
                        component={mediaSrc.endsWith(".mp4") ? "video" : "img"}
                        src={mediaSrc}
                        alt={`${project.title} - Image ${index + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      {mediaSrc.endsWith(".mp4") && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            bgcolor: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "50%",
                            p: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <PlayArrow fontSize="small" />
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              {getProjectIcon(project.type)}
              <Typography variant="h5" fontWeight="bold" sx={{ ml: 2 }}>
                {project.title}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="text.primary"
              paragraph
              sx={{ lineHeight: 1.8 }}
            >
              {project.longDescription}
            </Typography>

            {project.features && project.features.length > 0 && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Key Features
                </Typography>
                <Box component="ul" sx={{ pl: 3, lineHeight: 1.8 }}>
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      <Typography variant="body1" component="span">
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </Box>
            )}

            <Divider sx={{ my: 4 }} />

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
              {project.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="medium"
                  variant="filled"
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    fontWeight: "medium",
                    border: "1px solid #ddd",
                  }}
                />
              ))}
            </Box>

            {/* Status Chip - Bottom Left Above Buttons */}
            <Box sx={{ mb: 3 }}>
              <Chip
                label={getStatusLabel(project.status)}
                color={getStatusColor(project.status) as any}
                size="medium"
                sx={{ fontWeight: "bold" }}
              />
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {project.demo && (
                <Button
                  variant="contained"
                  startIcon={<PlayArrow />}
                  size="large"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              )}
              {project.github && (
                <Button
                  variant="outlined"
                  startIcon={<GitHub />}
                  size="large"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Button>
              )}
              {project.download && (
                <Button
                  variant="outlined"
                  startIcon={<Download />}
                  size="large"
                  href={project.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </Button>
              )}
            </Box>
          </Paper>

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
                  I'm always excited to take on new challenges and create
                  amazing experiences.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
                  onClick={() => gotoPage("/")}
                >
                  Get In Touch
                </Button>
              </Box>
            </Container>
          </Box>
        </Container>
      </Fade>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <IconButton
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "white",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
              zIndex: 10001,
            }}
            onClick={closeFullscreen}
          >
            <Close />
          </IconButton>

          {/* Previous Button */}
          {allMedia.length > 1 && (
            <IconButton
              sx={{
                position: "absolute",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
                zIndex: 10001,
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevImage();
              }}
            >
              <ArrowBackIos />
            </IconButton>
          )}

          {/* Next Button */}
          {allMedia.length > 1 && (
            <IconButton
              sx={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
                zIndex: 10001,
              }}
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          )}

          {/* Main Image */}
          {fullscreenImage.endsWith(".mp4") ? (
            <Box
              component="video"
              src={fullscreenImage}
              controls
              autoPlay
              sx={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                // borderRadius: 1,
                backgroundColor: "black",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <Box
              component="img"
              src={fullscreenImage}
              alt="Fullscreen view"
              sx={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                // borderRadius: 1,
              }}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {/* Image Counter */}
          {allMedia.length > 1 && (
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                px: 2,
                py: 1,
                borderRadius: 1,
                zIndex: 10001,
              }}
            >
              <Typography variant="body2">
                {currentImageIndex + 1} / {allMedia.length}
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Box>
  ) : null;
};

export default ProjectDetail;
