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
import { browserName, CustomView } from 'react-device-detect';

export default function Home() {
	let url = 'https://value-parser-backend.herokuapp.com/api/scrap';
	axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

	// create state variable to store the value
	const [valueState, setValueState] = React.useState(styles.goodVision);
	const [valueStatee, setValueStatee] = React.useState('XXUg/L');
	const [dateState, setDateState] = React.useState('00.00.0000');
	const [faviconState, setFaviconState] = React.useState('/favicon.ico');

	// fetch value from url and set the value to the state
	React.useEffect(() => {
		axios
			.get('https://value-parser-backend.herokuapp.com/api/scrap', {
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
			});
	}, []);

	return (
		<div className={styles.container}>
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
					{/*---------------------------- live text ----------- */}

					<BrowserView>
						<div className={styles.livetext}>Comming Soon</div>
					</BrowserView>
					<MobileView>
						<div className={styles.soonmobile}>Comming Soon</div>
					</MobileView>
				</section>

				{/* Decorative-------------------------------------------------------- */}
			</main>
		</div>
	);
}
