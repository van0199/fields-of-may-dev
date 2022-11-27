import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.css';
import * as React from 'react';
import axios from 'axios';
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from 'react-device-detect';
import { browserName, CustomView } from 'react-device-detect';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

export default function Home() {
	let url = 'http://localhost:5000/api/scrap';
	axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

	const [isOpen, setOpen] = useState(false);
	// create state variable to store the value
	const [valueState, setValueState] = React.useState(styles.goodVision);
	const [dateState, setDateState] = React.useState('//DATEFETCHED//');
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

	const MyComponentDraggable = () => {
		useEffect(
			() =>
				new Draggable({
					dialogId: 'MyComponentId',
					elementThatCaptureTheClick: 'MyComponentId',
				}),
		);
		// return <MyComponent/>
	};

	return (
		<div>
			<Head>
				<title>Fields of May</title>
				<meta name="description" content="Fields of May" />
				<link rel="icon" href={faviconState} />
				<script
					type="text/javascript"
					src="//code.jquery.com/jquery-1.10.2.min.js"
					defer
				></script>
				<script
					src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
					defer
				></script>
				<script
					src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
					defer
				></script>
				<script src="assets/app.js" defer></script>
			</Head>

			{/* ----------------------------------------------------------------Mobile */}
			<MobileView>
				<div className={styles.containermobile}>
					<main className={styles.mainmobile}>
						{/* <section className={
                    styles.gradientTop
                }></section> */}

						<section>
							<div className={styles.popupmobile}>
								<div className={styles.columnmobile}>
									<div className={styles.mobilenav}>
										<div className={styles.contentTitlemobile}>
											<div className={styles.titleMobile}>
												<a href="./witness-seminar-in-seili">
													Witness Seminars
												</a>
											</div>

											<div>
												<a className={styles.hamburgernav} href="./mobilemenu">
													<Hamburger
														size={50}
														toggled={isOpen}
														toggle={setOpen}
													/>
												</a>
											</div>
										</div>
									</div>

									{/* <div id="tooltip"
          className={
              styles.cursorimg
      }>
          <Image src="/assets/images/Fish.png" alt="Herring Fish" width="100px" height="25px"/>
      </div> */}

									<div className={styles.FixedHeightContainermobile}>
										<div className={styles.Content}>
											<div className={styles.nav2}>
												<div>
													<a href="#placeholder">Scroll to first Sec ↓</a>
													<a href="#placeholder2">Scroll to second Sec ↓</a>
												</div>
											</div>

											<p id="placeholder" className={styles.subtitlemobile}>
												Placeholder Text
											</p>
											<Image
												src="/assets/images/Placeholder.jpeg"
												alt="Herring Fish"
												width="800px"
												height="400px"
											/>
											<div className={styles.contentparagraphmobile}>
												<p>
													If we imagine that each participant is invited to
													speak on behalf of a layer of the stratified seabed.
													The archived layers are distributed accross phosphate,
													carbon, fish, and salt, and aim to bring into
													dicussion possible attunement through a grounding in
													Seili. What post-extractive futures can we imagine
													through this specific formation? (with specific
													attention to imagining a legal system rooted in a
													more-than-human ecological paradigm).
												</p>

												<p>
													If we imagine that each participant is invited to
													speak on behalf of a layer of the stratified seabed.
													The archived layers are distributed accross phosphate,
													carbon, fish, and salt, and aim to bring into
													dicussion possible attunement through a grounding in
													Seili. What post-extractive futures can we imagine
													through this specific formation? (with specific
													attention to imagining a legal system rooted in a
													more-than-human ecological paradigm).
												</p>
											</div>

											<p id="placeholder2" className={styles.subtitlemobile}>
												Placeholder Text
											</p>
											<div className={styles.contentparagraphmobile}>
												<p>
													If we imagine that each participant is invited to
													speak on behalf of a layer of the stratified seabed.
													The archived layers are distributed accross phosphate,
													carbon, fish, and salt, and aim to bring into
													dicussion possible attunement through a grounding in
													Seili. What post-extractive futures can we imagine
													through this specific formation? (with specific
													attention to imagining a legal system rooted in a
													more-than-human ecological paradigm).
												</p>

												<p>
													If we imagine that each participant is invited to
													speak on behalf of a layer of the stratified seabed.
													The archived layers are distributed accross phosphate,
													carbon, fish, and salt, and aim to bring into
													dicussion possible attunement through a grounding in
													Seili. What post-extractive futures can we imagine
													through this specific formation? (with specific
													attention to imagining a legal system rooted in a
													more-than-human ecological paradigm).
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
				</div>
			</MobileView>

			{/* ----------------------------------------------------------------Browser  */}
			<div className={styles.container}>
				<BrowserView>
					<main className={styles.main}>
						<section className={styles.centeredElements}>
							<div id="tooltip" className={styles.cursorimg}>
								<Image
									src="/assets/images/Fish.png"
									alt="Herring Fish"
									width="100px"
									height="25px"
								/>
							</div>

							<div className={styles.subMenu}>
								<a href="./" className={styles.linkTop}>
									Fields of May
								</a>

								<a href="./witness-seminar-in-seili" className={styles.linkTop}>
									Witness Seminar in Seili
								</a>

								<a className={styles.linkTop} href="./a-witness-seminar-how-to">
									A Witness Seminar How-To
								</a>
								<a className={styles.linkTop} href="./about">
									About
								</a>
							</div>

							<div className={styles.content}>
								<div className={styles.contentwrapper}>
									{/* <div className={
                            styles.backlink
                        }>
                            <div><a href="./"
                                >
                                Back
                            </a></div>
                            
                            </div> */}

									<p className={styles.titlewitness}>Witness Seminars</p>

									<div className={styles.seminarimage}>
										<Image
											src="/assets/images/Placeholder.jpeg"
											alt="Placeholder Image"
											width="800px"
											height="400px"
										/>
									</div>

									<div className={styles.contentparagraph}>
										<p>
											If we imagine that each participant is invited to speak on
											behalf of a layer of the stratified seabed. The archived
											layers are distributed accross phosphate, carbon, fish,
											and salt, and aim to bring into dicussion possible
											attunement through a grounding in Seili. What
											post-extractive futures can we imagine through this
											specific formation? (with specific attention to imagining
											a legal system rooted in a more-than-human ecological
											paradigm).
										</p>
									</div>
									<div className={styles.contentparagraph}>
										<p>
											If we imagine that each participant is invited to speak on
											behalf of a layer of the stratified seabed. The archived
											layers are distributed accross phosphate, carbon, fish,
											and salt, and aim to bring into dicussion possible
											attunement through a grounding in Seili. What
											post-extractive futures can we imagine through this
											specific formation? (with specific attention to imagining
											a legal system rooted in a more-than-human ecological
											paradigm).
										</p>
									</div>
								</div>
							</div>
						</section>

						{/*---------------------------- horizontal gradient ----------- */}
						<section className={styles.gradientTop}></section>
					</main>
				</BrowserView>
			</div>
		</div>
	);
}
