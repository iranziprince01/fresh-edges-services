"use client";

import { BackgroundVideo } from "@/components/sections/background-video";
import { images } from "@/lib/images";

export function HeroBackgroundVideo() {
  return (
    <BackgroundVideo
      src={images.heroVideo}
      poster={images.heroPoster}
      overlayClassName="bg-forest-600/85"
      priority
    />
  );
}
