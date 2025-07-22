import { Mail, Phone, MapPin } from "lucide-react";
import type { ContactInfoItem } from "../types";

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: {
      en: "Email",
      es: "Correo electrónico"
    },
    value: "ruslanzapata@gmail.com",
    href: "mailto:ruslanzapata@gmail.com",
  },
  {
    icon: Phone,
    label: {
      en: "Phone",
      es: "Teléfono"
    },
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: {
      en: "Location",
      es: "Ubicación"
    },
    value: "New York, NY",
    href: "#",
  },
];
