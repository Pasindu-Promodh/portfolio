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
    label: "3D Models",
    value: "model",
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
