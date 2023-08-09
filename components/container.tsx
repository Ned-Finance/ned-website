export default function Container(props) {
	return (
		<div
			className={`container h-screen items-center justify-center p-8 mx-auto xl:px-0 ${
				props.className ? props.className : ""
			}`}>
			{props.children}
		</div>
	);
}
