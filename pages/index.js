import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from 'react-device-detect';
import Hamburger from 'hamburger-react';

export default function Home() {
	const [isShown, setIsShown] = useState(false);
	const [isLoaded, setisLoaded] = useState(false);

	// --------------------------------------- feching data starts here

	const [isOpen, setOpen] = useState(false);

	let url = 'https://value-parser-api.herokuapp.com/api/scrap';
	axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

	// create state variable to store the value
	const [valueState, setValueState] = React.useState(styles.goodVision);
	const [valueStatemobile, setValueStatemobile] = React.useState(
		styles.goodVisionmobile,
	);
	const [valueStatemobilehome, setValueStatemobilehome] = React.useState(
		styles.goodVisionmobilehome,
	);
	const [valueStatee, setValueStatee] = React.useState('XXµg/l');
	const [dateState, setDateState] = React.useState('00.00.0000');
	const [faviconState, setFaviconState] = React.useState('/favicon.ico');
	const handleClick = (event) => {
		// 👇️ toggle shown state
		setIsShown((current) => !current);

		// 👇️ or simply set it to true
		// setIsShown(true);
	};

	// fetch value from url and set the value to the state
	React.useEffect(() => {
		axios
			.get(url, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
				},
			})
			.then((res) => {
				// fetch date
				let data = res.data.data;
				setDateState(data[0]);

				// fetch XXµg/l value
				setValueStatee(data[1]);

				// fetch value for blur
				let value = parseFloat(data[1]);

				if (value > 0 && value <= 2) {
					setValueState(styles.ExcellentVision);
					setFaviconState('/Excellent.ico');
				} else if (value > 2.0 && value <= 2.5) {
					setValueState(styles.goodVision);
					setFaviconState('/Good.ico');
				} else if (value > 2.6 && value <= 5.8) {
					setValueState(styles.fairVision);
					setFaviconState('/Fair.ico');
				} else if (value > 5.9) {
					setValueState(styles.poorVision);
					setFaviconState('/Poor.ico');
				}

				if (value > 0 && value <= 2) {
					setValueStatemobile(styles.ExcellentVisionmobile);
					setFaviconState('/Excellent.ico');
				} else if (value > 2.0 && value <= 2.5) {
					setValueStatemobile(styles.goodVisionmobile);
					setFaviconState('/Good.ico');
				} else if (value > 2.6 && value <= 5.8) {
					setValueStatemobile(styles.fairVisionmobile);
					setFaviconState('/Fair.ico');
				} else if (value > 5.9) {
					setValueStatemobile(styles.poorVisionmobile);
					setFaviconState('/Poor.ico');
				}

				if (value > 0 && value <= 2) {
					setValueStatemobilehome(styles.ExcellentVisionmobilehome);
					setFaviconState('/Excellent.ico');
				} else if (value > 2.0 && value <= 2.5) {
					setValueStatemobilehome(styles.goodVisionmobilehome);
					setFaviconState('/Good.ico');
				} else if (value > 2.6 && value <= 5.8) {
					setValueStatemobilehome(styles.fairVisionmobilehome);
					setFaviconState('/Fair.ico');
				} else if (value > 5.9) {
					setValueStatemobilehome(styles.poorVisionmobilehome);
					setFaviconState('/Poor.ico');
				}
			});
	}, []);

	// feching data ends here

	return (
		<div>
			<Head>
				<title>Fields of May</title>
				<meta name="description" content="Fields of May" />
				<link rel="icon" href={faviconState} />
				<link rel="apple-touch-icon" href={faviconState} />
				<script
					type="text/javascript"
					src="//code.jquery.com/jquery-1.10.2.min.js"
					defer
				></script>
				<script
					src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"
					defer
				></script>
				<script
					src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.1/jquery.min.js"
					defer
				></script>
				<script
					src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
					defer
				></script>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					defer
				></link>
				<script src="assets/app.js" defer></script>
				<script src="assets/shared.js" defer></script>
				<script src="assets/simulation.js" defer></script>
				<script src="assets/ui.js" defer></script>
				<script src="assets/waves.js" defer></script>
				{/* <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <script src="bundle.js" defer></script> */}
			</Head>

			{/* {
            isLoaded ? (
                <> */}

			<MobileView>
				<div className={styles.containermobile}>
					<main className={styles.mainmobile}>
						{/* <div id="tooltip"
                                    className={
                                        styles.cursorimg
                                }>
                                    <Image src="/assets/images/Fish.png" alt="Herring Fish" width="100px" height="25px"/>
                                </div> */}

						{/*---------------------------- hamburger ----------- */}
						<div className={styles.nav}>
							<div>
								<a href="./">Fields of May</a>
							</div>

							<div>
								<a href="./mobilemenu">
									<Hamburger size={50} toggled={isOpen} toggle={setOpen} />
								</a>
							</div>
						</div>

						<div className={styles.subTextmobile}>
							{/* <p className={
                            styles.subTextOpacity
                        }>The concentration of Baltic Sea Algae as of {dateState} is {valueStatee}. For several decades the Archipelago Research
                         Institute has been measuring the shrinking Herring and traced the cause to the morphing plankton due to changes in salinity and eutrophication. In short, Algae concentration is an indicator of the Baltic Sea&apos;s health here reflected in the legibility of the font.
                        </p> */}
							{/* <div className={
                    styles.question
                } >  <a href="./mobileinfo">About</a> </div> 
                    <div className={
                    styles.question
                } >  <a href="./mobileinfo">Past Witness Seminars</a> </div> 
                       <div className={
                    styles.question
                } >  <a href="./mobileinfo">Witness Seminars</a> </div>  */}{' '}
						</div>

						{/*---------------------------- centered text ----------- */}
						<section className={styles.centeredElementsmobile}>
							{/*---------------------------- live text ----------- */}
							{/*---------------------------- data used here ----------- */}

							<div className={styles.livetextWrappermobile}>
								<div className={styles.livetextContainermobile}>
									<div className={styles.nppostmobile}>
										<div className={styles.livetextmobile}>
											<span className={valueStatemobilehome}>
												Fields of May
											</span>
										</div>
									</div>
									{/*---------------------------- Sub text ----------- */}
									<div className={styles.subTextmobile}>
										<p className={styles.subTextOpacitymobile}>
											The concentration of Baltic Sea Algae as of {dateState}
											is {valueStatee}. For several decades the Archipelago
											Research Institute has been measuring the shrinking
											Herring and traced the cause to the morphing plankton due
											to changes in salinity and eutrophication. In short, Algae
											concentration is an indicator of the Baltic Sea&apos;s
											health here reflected in the legibility of the font.
										</p>

										<div className={styles.centermobile}>
											<div className={styles.algaeListContainermobile}>
												<p className={styles.algaeListTitlemobile}>
													Algae Concentration
												</p>

												<div className={styles.algaeListWrappermobile}>
													<div className={styles.algaeList}>
														<li className={styles.excellentVisiontext}>
															Excellent
														</li>
														<li className={styles.goodVisiontext}>Good</li>
														<li className={styles.fairVisiontext}>Fair</li>
														<li className={styles.poorVisiontext}>Poor</li>
													</div>
												</div>

												<div className={styles.algaeListWrappermobile}>
													<div className={styles.algaeList}>
														<li className={styles.excellentVisiontext}>
															0–2.0
														</li>
														<li className={styles.goodVisiontext}>2.1–2.5</li>
														<li className={styles.fairVisiontext}>2.6–5.8</li>
														<li className={styles.poorVisiontext}>5.9+</li>
													</div>
												</div>

												<div className={styles.algaeListWrappermobile}>
													<div className={styles.algaeList}>
														<li className={styles.excellentVisiontext}>µg/l</li>
														<li className={styles.goodVisiontext}>µg/l</li>
														<li className={styles.fairVisiontext}>µg/l</li>
														<li className={styles.poorVisiontext}>µg/l</li>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* <div 
                                className={
                                    styles.nppostnamemobile
                            }>Text legabilaty
                            (through blur) 
                            representing the Amount of
                            <a href=" https://goo.gl/maps/sLnY9MYMYfbBCA5y8"
                                className={
                                    styles.link
                            }>
                                Baltic Sea Algae
                            </a>




                                <p><b> </b>
                                </p>
                            </div>  */}{' '}
								</div>
							</div>

							{/*---------------------------- Sub text ----------- */}
							<div className={styles.subTextmobile}>
								{/* <p className={
                            styles.subTextOpacity
                        }>The concentration of Baltic Sea Algae as of {dateState} is {valueStatee}. For several decades the Archipelago Research Institute has been measuring the shrinking Herring and traced the cause to the morphing plankton due to changes in salinity and eutrophication. In short, Algae concentration is an indicator of the Baltic Sea's health here reflected in the legibility of the font.
                        </p> */}

								<div className={styles.centermobile}>
									<div className={styles.algaeListContainermobile}>
										{/* <p className={
                                styles.algaeListTitlemobile
                            }>Algae Concentration</p> */}
										{/* <div className={
                                styles.algaeListWrappermobile
                            }> */}
										{/* <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>Excellent</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>Good</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>Fair</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>Poor</li>
                                </div>
                            </div> */}
										{/* <div className={
                                styles.algaeListWrappermobile
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>0–2.0</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>2.1–2.5</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>2.6–5.8</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>5.9+</li>
                                </div>
                            </div> */}
										{/* <div className={
                                styles.algaeListWrappermobile
                            }>
                                <div className={
                                    styles.algaeList
                                }>
                                    <li className={
                                        styles.excellentVisiontext
                                    }>µg/l</li>
                                    <li className={
                                        styles.goodVisiontext
                                    }>µg/l</li>
                                    <li className={
                                        styles.fairVisiontext
                                    }>µg/l</li>
                                    <li className={
                                        styles.poorVisiontext
                                    }>µg/l</li>
                                </div>
                            </div> */}{' '}
									</div>
								</div>
							</div>
						</section>
					</main>
				</div>
			</MobileView>

			{/* ----------------------------------------------------------------Browser  */}

			<div>
				<BrowserView>
					<div className={styles.container}>
						<main className={styles.main}>
							<div id="tooltip" className={styles.cursorimg}>
								<Image
									src="/assets/images/Fish.png"
									alt="Herring Fish"
									width="100px"
									height="25px"
								/>
							</div>

							{/*---------------------------- horizontal gradient ----------- */}
							<section className={styles.gradientTop}></section>

							{/*---------------------------- centered text ----------- */}
							<section className={styles.centeredElements}>
								<div className={styles.subMenu}>
									<a href="./" className={styles.linkTop}>
										Fields of May
									</a>

									<a
										href="./witness-seminar-in-seili"
										className={styles.linkTop1}
									>
										Witness Seminar in Seili
									</a>

									<a
										className={styles.linkTop2}
										href="./a-witness-seminar-how-to"
									>
										A Witness Seminar How-To
									</a>
									<a className={styles.linkTop3} href="./about">
										About
									</a>
								</div>

								{/* Sanity button------ */}
								{/* <div className={
                                                styles.salinitybtn
                                            }>
                                          
                                            <div>
                                                <button onClick={handleClick}>See Salinity changes</button>
                                            </div>
                                            </div>
                                            <div> 
                                                {
                                                isShown && <Box/>
                                            } </div> */}

								{/*---------------------------- live text ----------- */}
								{/* -------fish 1 */}
								<div className={styles.fishContainer}>
									<div className={styles.fishWrapper}>
										<div className={styles.nppost}>
											<div className={styles.fish1}>
												<Image
													src="/assets/images/Fish.png"
													alt="Herring Fish 19XW"
													width="100px"
													height="25px"
												/>
											</div>
										</div>

										<div className={styles.nppostname}>
											Average Baltic herring size in 2000: 16cm
										</div>
										{/* <div className={ styles.nppostnamee }>This is placeholder text 2</div> 
                                        <div className={ styles.nppostname }>This is placeholder text 3</div>  */}
									</div>
								</div>
								{/* -------fish 2 */}
								<div className={styles.fishContainer2}>
									<div className={styles.fishWrapper}>
										<div className={styles.nppostt}>
											<div className={styles.fish2}>
												<Image
													src="/assets/images/Fish.png"
													alt="Herring Fish 19XX"
													width="150px"
													height="35px"
												/>
											</div>
										</div>

										{/* <div className={ styles.nppostname }>Average Baltic herring size in 2000: 16cm</div>  */}
										<div className={styles.nppostnamee}>
											Average Baltic herring size in 1990: 19cm
										</div>
										{/* <div className={ styles.nppostname }>This is placeholder text 3</div>  */}
									</div>
								</div>
								{/* -------fish 3 */}
								<div className={styles.fishContainer3}>
									<div className={styles.fishWrapper}>
										<div className={styles.npposttt}>
											<div className={styles.fish3}>
												<Image
													src="/assets/images/Fish.png"
													alt="Herring Fish 19XX"
													width="200px"
													height="45px"
												/>
											</div>
										</div>

										{/* <div className={ styles.nppostname }>Average Baltic herring size in 2000: 16cm</div>  */}
										{/* <div className={ styles.nppostnamee }>This is placeholder text 2</div>  */}
										<div className={styles.nppostnameee}>
											Average Baltic herring size in 1985: 21cm
										</div>
									</div>
								</div>

								<div className={styles.livetextWrapper}>
									<div className={styles.livetextContainer}>
										<div className={styles.nppost}>
											<div className={styles.livetext}>
												<span className={valueState}>Fields of May</span>
											</div>
										</div>
									</div>
								</div>

								{/*---------------------------- Sub text ----------- */}
								<div className={styles.subText}>
									<p className={styles.subTextOpacity}>
										The concentration of Baltic Sea Algae as of {dateState} is{' '}
										{valueStatee}µg/l. For several decades the Archipelago
										Research Institute has been measuring the shrinking Herring
										and traced the cause to the morphing plankton due to changes
										in salinity and eutrophication. In short, Algae
										concentration is an indicator of the Baltic Sea&apos;s
										health here reflected in the legibility of the font.
									</p>

									<div className={styles.algaeListContainer}>
										<p className={styles.algaeListTitle}>Algae Concentration</p>

										<div className={styles.algaeListWrapper}>
											<div className={styles.algaeList}>
												<li className={styles.excellentVisiontext}>
													Excellent
												</li>
												<li className={styles.goodVisiontext}>Good</li>
												<li className={styles.fairVisiontext}>Fair</li>
												<li className={styles.poorVisiontext}>Poor</li>
											</div>
										</div>

										<div className={styles.algaeListWrapper}>
											<div className={styles.algaeList}>
												<li className={styles.excellentVisiontext}>0–2.0</li>
												<li className={styles.goodVisiontext}>2.1–2.5</li>
												<li className={styles.fairVisiontext}>2.6–5.8</li>
												<li className={styles.poorVisiontext}>5.9+</li>
											</div>
										</div>

										<div className={styles.algaeListWrapper}>
											<div className={styles.algaeList}>
												<li className={styles.excellentVisiontext}>µg/l</li>
												<li className={styles.goodVisiontext}>µg/l</li>
												<li className={styles.fairVisiontext}>µg/l</li>
												<li className={styles.poorVisiontext}>µg/l</li>
											</div>
										</div>
									</div>
								</div>
							</section>

							{/* Decorative-------------------------------------------------------- */}
							<section className={styles.cordiantesContainer}>
								<div className={styles.cordBottomLeft} id="cordBottomLeft">
									<p className={styles.cord}>+ (10°e)</p>
								</div>

								<div
									className={styles.cord__bottomMiddle}
									id="cordBottomMiddle"
								>
									{/* <p className={styles.plus}>+</p> */}
									<p className={styles.cord}>+ (20°e)</p>
								</div>

								<div className={styles.cord__bottomEnd} id="cordBottomEnd">
									<p className={styles.cord}>+ (30°e)</p>
								</div>
							</section>
						</main>

						{/* ----------------------------  wave -----------  */}
						{/* <div className={styles.overlay} id="overlay"></div>
                                <div className={styles.ui} id="ui">
                                    <div className={styles.camera} id="camera">
                                        <canvas className={styles.profile} id="profile" width="350" height="105"></canvas>
                                        <div className={styles.length} id="length"></div>
                                        <div className={styles.end} id="end"></div>
                                        <div className={styles.wind} id="wind">
                                            <span className={styles.windspeed} id="wind-speed"></span><span id="wind-unit"></span>
                                            <div className={styles.windlabel} id="wind-label"></div>
                                        </div>

                                        <div className={styles.size} id="size">
                                            <span className={styles.sizevalue} id="size-value"></span><span id="size-unit"></span>
                                        </div>
                                        <div className={styles.sizelabe} id="size-label"></div>
                                        <div className={styles.choppiness} id="choppiness"></div>
                                        <div className={styles.choppinesslabel} id="choppiness-label"></div>
                                    </div>
                                </div> */}
						<canvas className={styles.simulator} id="simulator"></canvas>
					</div>
				</BrowserView>
			</div>
		</div>
	);
}
