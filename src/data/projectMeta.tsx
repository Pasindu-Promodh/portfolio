import {
  Code,
  PhoneIphone,
  Public,
  SportsEsports,
  ViewInAr, // Import an icon representing 3D
} from "@mui/icons-material";

const projectMeta = [
  {
    label: "All Projects",
    value: "all",
    icon: <Code />,
    includeInTabs: true,
  },
  {
    label: "Games",
    value: "game",
    icon: <SportsEsports />,
    includeInTabs: true,
  },
  {
    label: "Mobile Apps",
    value: "mobile",
    icon: <PhoneIphone />,
    includeInTabs: true,
  },
  {
    label: "Web Apps",
    value: "web",
    icon: <Public />,
    includeInTabs: true,
  },
  {
    label: "3D Models",
    value: "3d",
    icon: <ViewInAr />, // AR/3D cube icon
    includeInTabs: true,
  },
];

export default projectMeta;
