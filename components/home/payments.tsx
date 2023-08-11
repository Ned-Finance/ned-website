import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { useWindowSize } from "rooks";
import { Props } from "../../common/props";
import { scroll, transformer } from "../../common/utils/animation";
import cryptobackImg from "../../public/img/home/cryptoback.png";
import discountsImg from "../../public/img/home/discounts.png";
import loyaltyImg from "../../public/img/home/loyalty.png";
import Container from "../container";

const Payments = (props: Props) => {
	const ref = useRef(null);
	const { scrollYProgress } = scroll(ref)();
	const windowSize = useWindowSize();
	const mobileDiff = windowSize.innerWidth < 1024 ? 0.3 : 0;
	const propertyTransformer = transformer(scrollYProgress);
	const opacityFeatures = useCallback(
		(index: number) =>
			useTransform(
				scrollYProgress,
				[0.5 + 0.09 * index - mobileDiff, 0.8 - mobileDiff],
				[0, 1]
			),
		[]
	);
	const marginTopFeatures = useCallback(
		(index: number) =>
			useTransform(
				scrollYProgress,
				[0.5 + 0.09 * index - mobileDiff, 0.8 - mobileDiff],
				[300, 0]
			),
		[]
	);

	// useMotionValueEvent(scrollYProgress, "change", (latest) => {
	// 	console.log("x changed to", latest);
	// });

	return (
		<>
			<Container
				className="flex overflow-y-hidden pb-8 lg:pb-16 xl:pb-16"
				ref={ref}>
				<div className="w-full h-full flex flex-col mx-0 lg:mx-8 xl:mx-8">
					<motion.div
						style={{
							opacity: propertyTransformer([0, 0.6 - mobileDiff], [0, 1]),
							scale: propertyTransformer([0, 0.4 - mobileDiff], [0.5, 1]),
						}}>
						<h2 className="text-5xl lg:text-6xl xl:text-6xl text-white text-center">
							Do you have a business? We gotcha
						</h2>
					</motion.div>
					<motion.div
						style={{
							opacity: propertyTransformer(
								[0.4 - mobileDiff, 0.5 - mobileDiff],
								[0, 1]
							),
						}}>
						<h2 className="mt-4 lg:mt-2 xl:mt-2 text-3xl lg:text-4xl xl:text-4xl font-thin text-ned-pink text-center">
							Cashback + discounts + loyalty program = happy customers
						</h2>
					</motion.div>
					<div className="mt-0 lg:mt-16 xl:mt-16 lg:mt-24 xl:mt-24 h-auto lg:h-64 xl:h-64 mb-2 flex flex-col lg:flex-row xl:flex-row">
						<motion.div
							className="mt-4 lg:mt-0 xl:mt-0 mr-0 lg:mr-2 xl:mr-2 border rounded-xl border-ned-pink w-full lg:w-1/4 xl:w-1/4 h-full relative px-6 py-6 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(0),
								translateY: marginTopFeatures(0),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-pink to-60% h-full w-full"></div>
							<h3 className="text-3xl text-ned-pink font-light text-center">
								Cryptoback
							</h3>
							<Image
								className="z-10 relative h-fit h-auto"
								src={cryptobackImg}
								alt="Ned Cryptoback"
								loading="eager"
							/>
						</motion.div>
						<motion.div
							className="mt-4 lg:mt-0 xl:mt-0 mx-0 lg:mx-2 xl:mx-2 border rounded-xl border-ned-pink w-full lg:w-1/4 xl:w-1/4 h-full relative px-6 py-6 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(1),
								translateY: marginTopFeatures(1),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-pink to-60% h-full w-full"></div>
							<h3 className="text-3xl text-ned-pink font-light text-center">
								Discounts
							</h3>
							<Image
								className="z-10 relative h-fit h-auto"
								src={discountsImg}
								alt="Ned Discounts"
								loading="eager"
							/>
						</motion.div>
						<motion.div
							className="mt-4 lg:mt-0 xl:mt-0 mx-0 lg:mx-2 xl:mx-2 border rounded-xl border-ned-pink w-full lg:w-1/4 xl:w-1/4 h-full relative px-6 py-6 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(2),
								translateY: marginTopFeatures(2),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-pink to-60% h-full w-full"></div>
							<h3 className="text-3xl text-ned-pink font-light text-center">
								Loyalty
							</h3>
							<Image
								className="z-10 relative h-fit h-auto"
								src={loyaltyImg}
								alt="Ned Loyalty"
								loading="eager"
							/>
						</motion.div>
						<motion.div
							className="mt-4 lg:mt-0 xl:mt-0 mx-0 lg:mx-2 xl:mx-2 border rounded-xl border-ned-pink w-full lg:w-1/4 xl:w-1/4 h-full relative px-6 py-6 flex flex-col items-center justify-between border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(3),
								translateY: marginTopFeatures(3),
							}}>
							<div className="z-0 absolute top-[-30px] right-0 left-[30px] bottom-0 blur-2xl rounded-xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-10% from-ned-pink to-60% h-full w-full"></div>
							<div>
								<h3 className="text-3xl text-ned-pink font-light text-center">
									Fee
								</h3>
								<h4 className="text-5xl text-white font-medium text-center">
									1.5%
								</h4>
							</div>
							<div>
								<h3 className="text-3xl text-ned-pink font-light text-center">
									Cashback
								</h3>
								<h4 className="text-5xl text-white font-medium text-center">
									0.5%
								</h4>
							</div>
						</motion.div>
					</div>
					<div className="w-full mt-2 h-auto lg:h-56 xl:h-56 mb-8 flex">
						<motion.div
							className="border rounded-xl border-ned-pink w-full h-full relative p-8 flex flex-col items-start lg:items-center xl:items-center lg:flex-row xl:flex-row border-opacity-20 overflow-hidden"
							style={{
								opacity: opacityFeatures(3),
								translateY: marginTopFeatures(3),
							}}>
							<h3 className="text-3xl lg:text-5xl xl:text-5xl text-white font-thin text-left flex-auto w-auto lg:w-4/6 xl:w-4/6">
								Boost your business and power up your customers
							</h3>
							<div className="mt-4 lg:mt-0 xl:mt-0 w-auto lg:w-2/6 xl:w-2/6 flex justify-end">
								<button
									rel="noopener"
									className="w-auto px-8 lg:px-12 xl:px-12 py-2 text-lg font-medium border border-ned-pink bg-transparent text-ned-pink rounded-full flex items-center">
									<span className="">Learn more</span>{" "}
									<ChevronRightIcon className="ml-2 w-5 h-5 animate-bounce-right" />
								</button>
							</div>
						</motion.div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Payments;
