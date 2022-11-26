import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Mobile.module.css';
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
import { browserName, CustomView } from 'react-device-detect';

export default function Home() {
	let url = 'https://value-parser.herokuapp.com/api/scrap';
	axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

	// create state variable to store the value
	const [valueState, setValueState] = React.useState(styles.goodVision);
	const [valueStatemobile, setValueStatemobile] = React.useState(
		styles.goodVisionmobile,
	);
	const [valueStatee, setValueStatee] = React.useState('XXUg/L');
	const [dateState, setDateState] = React.useState('00.00.0000');
	const [faviconState, setFaviconState] = React.useState('/favicon.ico');

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
			});
	}, []);

	return (
		<div>
			<Head>
				<title>?</title>
				<meta name="description" content="Fields of May" />
				<link rel="icon" href={faviconState} />
				<link rel="apple-touch-icon" href={faviconState} />
				<script
					type="text/javascript"
					src="//code.jquery.com/jquery-1.10.2.min.js"
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
				{/* <script src="./path/to/blotter.js" defer></script> */}
				<script src="assets/app.js" defer></script>
				<script src="assets/shared.js" defer></script>
				<script src="assets/simulation.js" defer></script>
				<script src="assets/ui.js" defer></script>
				<script src="assets/waves.js" defer></script>
			</Head>

			<MobileView>
				<a href="./">
					<div className={styles.containermobile}>
						<main className={styles.mainmobile}>
							<div id="tooltip" className={styles.cursorimg}>
								<Image
									src="/assets/images/Fish.png"
									alt="Herring Fish"
									width="100px"
									height="25px"
								/>
							</div>

							{/*---------------------------- horizontal gradient ----------- */}

							{/*---------------------------- centered text ----------- */}
							<section className={styles.centeredElementsmobile}>
								{/*---------------------------- live text ----------- */}

								<div className={styles.livetextWrappermobile}>
									<div className={styles.livetextContainermobile}>
										<div className={styles.nppostmobile}>
											<div className={styles.livetextmobile}>
												<span className={valueStatemobile}>Fields of May</span>
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
                            </div>  */}
									</div>
								</div>

								{/*---------------------------- Sub text ----------- */}
								<div className={styles.subTextmobile}>
									<p className={styles.subTextOpacity}>
										The concentration of Baltic Sea Algae as of {dateState} is{' '}
										{valueStatee}. For several decades the Archipelago Research
										Institute has been measuring the shrinking Herring and
										traced the cause to the morphing plankton due to changes in
										salinity and eutrophication. In short, Algae concentration
										is an indicator of the Baltic Sea&apos;s health here
										reflected in the legibility of the font.
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
													<li className={styles.excellentVisiontext}>0–2.0</li>
													<li className={styles.goodVisiontext}>2.1–2.5</li>
													<li className={styles.fairVisiontext}>2.6–5.8</li>
													<li className={styles.poorVisiontext}>5.9+</li>
												</div>
											</div>

											<div className={styles.algaeListWrappermobile}>
												<div className={styles.algaeList}>
													<li className={styles.excellentVisiontext}>UG/L</li>
													<li className={styles.goodVisiontext}>UG/L</li>
													<li className={styles.fairVisiontext}>UG/L</li>
													<li className={styles.poorVisiontext}>UG/L</li>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</main>
					</div>
				</a>
			</MobileView>
		</div>
	);
}
