import {
  Code,
  PhoneIphone,
  Public,
  SportsEsports, 
  AutoAwesome, 
  ViewInAr, 
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
    includeInTabs: false,
  },
  {
    label: "3D Models",
    value: "3d",
    icon: <ViewInAr />, 
    includeInTabs: true,
  },
  {
    label: "Visual Effects",
    value: "vfx",
    icon: <AutoAwesome />,
    includeInTabs: true,
  },
];

export default projectMeta;
