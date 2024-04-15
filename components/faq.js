import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left rounded-lg focus:outline-none focus-visible:ring text-gray-400 focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 bg-slate-800/40">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-amber-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-400">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What’s included in the PV permit plan set?",
    answer: "Our PV design plan-set encompasses essential elements such as a Cover Sheet, Site Plan, Project Plan, Electrical Diagram, Labels, Placards, Racking Details, and Datasheets.",
  },
  {
    question: "What do you charge if there are permit corrections from the permit jurisdictions?",
    answer: "Typically, we do not charge for AHJ-required corrections; however, if there are additional revisions beyond those mandated by the permit jurisdiction, fees may apply based on the scope of work involved.",
  },
  {
    question: "Do you do commercial and residential work or just residential? ",
    answer:
      "We provide both commercial and residential services. Whether it's a commercial building or a residential property, we're equipped to handle various projects to meet your needs.",
  },
  {
    question: "How can you assist with interconnection support?",
    answer:
      "Interconnection support involves facilitating the process of connecting your solar energy system to the grid.We work closely with utility companies to navigate the interconnection application process, ensure compliance with technical requirements, and expedite approvals, helping you achieve seamless integration with the grid.",
  },
];

export default Faq;