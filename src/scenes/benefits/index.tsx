import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { HomePageProps } from "../home";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import HeadingText from "@/shared/HeadingText";
import { BenefitType } from "@/shared/types";
import Benefit from "@/shared/Benefit";
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Architecture",
    description:
      "This is the description for the lorem ipsum component that we are having here",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State of the Art Architecture",
    description:
      "This is the description for the lorem ipsum component that we are having here",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the Art Architecture",
    description:
      "This is the description for the lorem ipsum component that we are having here",
  },
];
export const Benefits = ({ setSelectedPage }: HomePageProps) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Benefits);
        }}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeadingText>MORE THAN JUST A GYM!</HeadingText>
          <p className="my-5 text-sm ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            quibusdam cupiditate. Suscipit reiciendis aut ratione
            exercitationem, similique pariatur asperiores consectetur
          </p>
        </motion.div>
        <motion.div
          className="md:flex items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit, index) => {
            return (
              <Benefit
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              ></Benefit>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
