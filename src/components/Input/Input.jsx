import "./Input.scss";

function Input({
	label,
	type,
	customClass,
	name,
	handleChange,
	defaultValue,
	disabled,
	testId
}) {
	return (
		<section className="input">
			<label
				htmlFor={label}
				className="input__label"
			>
				{label}
			</label>
			<input
				id={label}
				type={type}
				className={`input__field ${customClass ? customClass : ""}`}
				name={name}
				aria-label={name}
				onChange={handleChange}
				defaultValue={defaultValue ? defaultValue : ""}
				disabled={disabled}
				data-testid={testId ?? name}
			/>
		</section>
	);
}

export default Input;
