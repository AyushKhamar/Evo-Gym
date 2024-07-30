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
import { ActionButton } from "@/shared/ActionButton";
import BenefitPageGraphics from "@/assets/BenefitsPageGraphic.png";
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
        {/* graphics and description */}
        <motion.div
          className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* graphic */}
          <img
            className="mx-auto "
            src={BenefitPageGraphics}
            alt="benefits-page-graphic"
          />
          <div>
            {/* title  */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HeadingText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT!</span>
                  </HeadingText>
                </div>
              </div>
            </div>
            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
                alias. Consectetur, itaque quasi consequuntur earum aspernatur
                assumenda facere, fugit expedita veritatis optio nemo adipisci,
                nulla fugiat. Architecto dignissimos enim ipsum.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in
                dicta illo corrupti? Quo cupiditate ad, quasi consequuntur sint,
                ipsum, eveniet mollitia reprehenderit voluptatum minima
                veritatis inventore distinctio possimus magni!
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16 ">
              <div className="before:absolute before:-bottom[20] before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
