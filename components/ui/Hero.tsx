import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import CampaignTimer, { Props as CampaignTimerProps } from "../header/CampaignTimer.tsx";

export interface Props {
  backgroundImage: {
    desktop: ImageWidget;
    mobile: ImageWidget;
    alt: string;
    lcp?: boolean;
    campaignTimer?: CampaignTimerProps;
  };
}

export default function Hero({ backgroundImage, campaignTimer }: any) {
  if (!backgroundImage) return null;

  return ( 
    <>
      <div class="z-[-1] fixed top-0 left-0 h-[80vh] w-[50vw]" style={`background-image: url('${backgroundImage.desktop}'); background-size:cover; background-repeat: no-repeat; background-position: center;`} />
      <div class="hero w-full h-[80vh] flex flex-col items-center justify-center md:grid md:grid-cols-5">
        <div class="flex flex-col w-full pt-20 h-[20%] md:h-full items-center md:items-end bg-opacity-60 md:col-span-2">
          <div class="relative w-full after:absolute after:left-10 after:top-0 after:content-[''] after:bg-red-600/80 after:h-[8px] after:w-[80%]"></div>
          <div class="relative w-full after:absolute after:left-10 after:top-10 after:content-[''] after:bg-red-600/80 after:h-[6px] after:w-[60%]"></div>
        </div>
        
        <div class="hero-content text-neutral-content w-full md:h-full md:col-start-3 md:col-span-3 md:bg-black">
          <div class="w-[90%] md:w-[95%] bg-black px-8 py-12">
            <h1 class="mb-4 lg:mb-8 text-5xl lg:text-7xl font-bold">BLACK FRIDAY</h1>
            <p class="mb-4 lg:mb-8 lg:text-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary bg-red-600/80">Quero meu desconto agora!</button>
          </div>
        </div>
      </div>
      <div class="z-10 w-full flex items-center justify-center bg-red-700 h-40 text-lg font-semibold">
        <CampaignTimer {...campaignTimer} />
      </div>
    </>
  );
}
