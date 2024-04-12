import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/home.svg";
import benefitTwoImg from "../public/img/check.svg";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Preliminary Design",
      desc: "Ignite your project's potential with our visionary preliminary design services, sculpting the blueprint for your future success from the ground up.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Permit Design",
      desc: "Breakthrough regulatory barriers with our precision-crafted permit design solutions, paving the way for seamless approval and rapid progress.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Engineering Stamping",
      desc: "Elevate your project with the mark of excellence through our meticulous engineering stamping services, setting the standard for quality and compliance.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Interconnection Support(PTO)",
      desc: "Power up your project's connectivity with our dynamic interconnection support, forging pathways to integration and efficiency like never before.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Permitting Application Assistance",
      desc: "Unleash the full potential of your project with our expert guidance through the permitting labyrinth, ensuring smooth sailing toward regulatory approval.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Ongoing Support Project Lifecycle",
      desc: "Lifecycle: Experience unparalleled peace of mind with our steadfast support throughout your project's journey, providing a steady hand and innovative solutions at every turn.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
