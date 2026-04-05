import type { ComponentType, SVGProps } from "react";
import {
  CalendarDays,
  Facebook,
  HeartHandshake,
  Instagram,
  MapPinned,
  PlaneTakeoff,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import type {
  AboutCardIconKey,
  GalleryFlowIconKey,
  GalleryMomentLayoutKey,
  SocialPlatformKey,
} from "@/lib/content/types";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const aboutCardIconMap: Record<AboutCardIconKey, IconComponent> = {
  shieldCheck: ShieldCheck,
  userCheck: UserCheck,
};

export const galleryFlowIconMap: Record<GalleryFlowIconKey, IconComponent> = {
  planeTakeoff: PlaneTakeoff,
  mapPinned: MapPinned,
  calendarDays: CalendarDays,
  heartHandshake: HeartHandshake,
};

export const socialIconMap: Record<SocialPlatformKey, IconComponent> = {
  facebook: Facebook,
  instagram: Instagram,
};

export const galleryMomentLayoutMap: Record<GalleryMomentLayoutKey, string> = {
  feature: "md:col-span-7 md:row-span-2",
  stackTop: "md:col-span-5 md:row-span-1",
  stackBottom: "md:col-span-5 md:row-span-1",
  triptychLeft: "md:col-span-4 md:row-span-1",
  triptychCenter: "md:col-span-4 md:row-span-1",
  triptychRight: "md:col-span-4 md:row-span-1",
};
