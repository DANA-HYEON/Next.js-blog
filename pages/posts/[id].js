import utilStyles from "../../styles/utils.module.css";
import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false, //404페이지
	};
}

export async function getStaticProps({ params }) {
	// Add the "await" keyword like this:

	const postData = await getPostData(params.id);

	return {
		props: {
			postData,
		},
	};
}
