import "./Input.scss";

function Input({
	label,
	type,
	customClass,
	name,
	handleChange,
	defaultValue,
	disabled
}) {
	return (
		<section className="input">
			<label className="input__label">{label}</label>
			<input
				type={type}
				className={`input__field ${customClass ? customClass : ""}`}
				aria-label={name}
				onChange={handleChange}
				defaultValue={defaultValue ? defaultValue : ""}
				disabled={disabled}
			/>
		</section>
	);
}

export default Input;
