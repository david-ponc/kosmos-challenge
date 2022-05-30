import Button from '../../button';
import styles from './text.module.css';

const TextField = ({ _uid, label, type, onDelete }) => {
	const handleClick = () => onDelete(_uid);

	return (
		<article className={styles.container}>
			<fieldset className={styles.field}>
				<label htmlFor={_uid} className={styles.label}>
					{label}
				</label>
				<input type={type} id={_uid} className={styles.input} />
			</fieldset>
			<Button className={styles.button} onClick={handleClick}>
				❌
			</Button>
		</article>
	);
};

export default TextField;
