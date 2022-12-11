import "../styles/global.css";

export default function App({ Component, pageProps }) {
	console.log("App : 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할");
	return <Component {...pageProps} />;
}
