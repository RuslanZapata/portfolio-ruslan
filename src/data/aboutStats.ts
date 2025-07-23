import { Users, Code, Calendar } from "lucide-react";
import type { Stat, Translation } from "../types";

export const aboutStats = (t: Translation): Stat[] => [
  {
    icon: Calendar,
    value: t.about.years,
    label: t.about.experience,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Code,
    value: "20+",
    label: t.about.projects,
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Users,
    value: "15+",
    label: t.about.clients,
    color: "text-emerald-600 dark:text-emerald-400",
  },
  // {
  //   icon: Award,
  //   value: "15+",
  //   label: t.about.award,
  //   color: "text-orange-600 dark:text-orange-400",
  // },
];