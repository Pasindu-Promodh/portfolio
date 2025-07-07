// projectMeta.ts

import {
  Code,
  PhoneIphone,
  Public,
  SportsEsports,
} from "@mui/icons-material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ViewInArIcon from '@mui/icons-material/ViewInAr';


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
  icon: <ViewInArIcon />,
  includeInTabs: true,
},
{
  label: "Visual Effects",
  value: "vfx",
  icon: <AutoAwesomeIcon />,
  includeInTabs: true,
},

];

export default projectMeta;
