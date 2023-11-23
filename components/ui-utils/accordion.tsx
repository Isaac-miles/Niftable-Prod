"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import localFont from "next/font/local";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LimitlessLogo from "../../assets/icons/LimitlessLogo";
import ProfitAndGrowthLogo from "@/assets/icons/ProfitAndGrowthLogo";
import TransparentAndFairLogo from "@/assets/icons/TransparentAndFairLogo";
import EngagementLogo from "@/assets/icons/EngagementLogo";

const satoshi = localFont({ src: "../../util/fonts/satoshi/Satoshi-Regular.ttf" });

type AccordionProps = {
  readonly title: string;
  readonly summary: string;
  readonly logoTitle: string;
};

export default function BasicAccordion({
  title,
  summary,
  logoTitle,
}: AccordionProps) {
  return (
    <div className="flex gap-10 items-start flex-col ">
      <Accordion
        className={`${satoshi.className} !bg-black !text-white font-light border-x-0 border-b-2 !border-[#13171d]`}
      >
        <AccordionSummary
          className="flex !bg-black justify-end"
          expandIcon={<ExpandMoreIcon className=" !text-white"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className=" w-[83px] -ml-24 h-[83px] "></div>
          <div className="flex">
          {logoTitle === "Limitless" ? <LimitlessLogo /> : null}
          {logoTitle === "Profit" ? <ProfitAndGrowthLogo /> : null}
          {logoTitle === "Transparent" ? <TransparentAndFairLogo /> : null}
          {logoTitle === "Engagement" ? <EngagementLogo /> : null}
          </div>
       

          <Typography className={`${satoshi.className} accordionHeading `}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="!text-white !bg-black">
          <Typography className={`${satoshi.className} !text-white !bg-black pl-[80px]`}>
            {summary}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
