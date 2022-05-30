import styles from './button.module.css';
import { cls } from '../../utils/cls';

const Button = ({ children, ...props }) => {
	return (
		<button {...props} className={cls(styles.base, props.className)}>
			{children}
		</button>
	);
};

export default Button;
