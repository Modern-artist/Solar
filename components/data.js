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
  title: "Highlights of your benefits",
  desc: "At Dunamis, we understand that trust is the foundation of any successful partnership, especially when it comes to your solar energy needs. Here's why you can trust us:",
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
  title:" Design and Engineering in One Step",
  desc: "Choosing Dunamis means choosing a trusted partner committed to delivering excellence in services. We are dedicated to helping you harness the power of the sun efficiently and sustainably, making a positive impact on your energy bills and the environment.",
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
