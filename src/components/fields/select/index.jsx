import Button from '../../button';
import styles from './select.module.css';

const SelectField = ({ _uid, label, options, onDelete }) => {
	const handleClick = () => onDelete(_uid);

	return (
		<article className={styles.container}>
			<fieldset className={styles.field}>
				<label>{label}</label>
				<select className={styles.select}>
					{options.map(option => (
						<option key={option.id} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</fieldset>
			<Button className={styles.button} onClick={handleClick}>
				❌
			</Button>
		</article>
	);
};

export default SelectField;
