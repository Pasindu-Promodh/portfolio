// projectMeta.ts

import {
  Code,
  PhoneIphone,
  Public,
  SportsEsports,
} from "@mui/icons-material";

// Central definition of project types
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
];

export default projectMeta;
