import "./Button.css";
export const Button = ({
	text,
	classname,
	onSubmit,
	onClickFunction,
	type,
	disabled,
}: {
	text: string;
	classname: string;
	onClickFunction?: () => void;
	type?: any;
	disabled?: boolean;
	onSubmit?: () => void;
}) => {
	return (
		<button
			type={type || "submit"}
			className={classname}
			onClick={onClickFunction}
			disabled={disabled}
			onSubmit={onSubmit}
		>
			{text}
		</button>
	);
};

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
//   children: React.ReactNode;
// }
// const Button: React.FC<ButtonProps> = ({
//   variant = 'primary',
//   children,
//   className = '',
//   ...props
// }) => {
//   return (
//     <button
//       className={`button button--${variant} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };
