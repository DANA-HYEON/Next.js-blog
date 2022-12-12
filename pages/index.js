import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Layout from "./components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "./components/date";

// for ssg
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			{/* Keep the existing code here */}
			<div className={styles.container}>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main>
					<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
						<h2 className={utilStyles.headingLg}>Blog</h2>
						<ul className={utilStyles.list}>
							{allPostsData.map(({ id, date, title }) => (
								<li className={utilStyles.listItem} key={id}>
									<Link href={`/posts/${id}`}>{title}</Link>
									<br />
									<small className={utilStyles.lightText}>{/* <Date dateString={date} /> */}</small>
								</li>
							))}
						</ul>
					</section>
				</main>

				<footer>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Powered by <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
					</a>
				</footer>

				<style jsx>{`
					main {
						padding: 5rem 0;
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					footer {
						width: 100%;
						height: 100px;
						border-top: 1px solid #eaeaea;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					footer img {
						margin-left: 0.5rem;
					}
					footer a {
						display: flex;
						justify-content: center;
						align-items: center;
						text-decoration: none;
						color: inherit;
					}
					code {
						background: #fafafa;
						border-radius: 5px;
						padding: 0.75rem;
						font-size: 1.1rem;
						font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
					}
				`}</style>

				<style jsx global>{`
					html,
					body {
						padding: 0;
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
					}
					* {
						box-sizing: border-box;
					}
				`}</style>
			</div>
		</Layout>
	);
}
