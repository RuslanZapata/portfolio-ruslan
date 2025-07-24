import type { SkillCategory, Translation } from "../types";

export const getSkillCategories = (t: Translation): SkillCategory[] => [
  { id: 'frontend', label: t.skills.frontend, color: 'text-blue-600 dark:text-blue-400', borderColor: 'border-blue-600 dark:border-blue-400' },
  { id: 'backend', label: t.skills.backend, color: 'text-green-600 dark:text-green-400', borderColor: 'border-green-600 dark:border-green-400' },
  { id: 'mobile', label: t.skills.mobile, color: 'text-purple-600 dark:text-purple-400', borderColor: 'border-purple-600 dark:border-purple-400' },
  { id: 'tools', label: t.skills.tools, color: 'text-orange-600 dark:text-orange-400', borderColor: 'border-orange-600 dark:border-orange-400' },
];