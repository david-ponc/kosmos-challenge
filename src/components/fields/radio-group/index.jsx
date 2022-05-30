import Button from '../../button';
import styles from './radio-group.module.css';

const RadioGroup = ({ _uid, label, type, options, onDelete }) => {
	const handleClick = () => onDelete(_uid);

	return (
		<article className={styles.container}>
			<fieldset className={styles.field}>
				<label>{label}</label>
				<div className={styles.options}>
					{options.map(option => (
						<label key={option.id} className={styles.radioContainer}>
							<input type={type} name={_uid} value={option.value} />
							<span>{option.label}</span>
						</label>
					))}
				</div>
			</fieldset>
			<Button className={styles.button} onClick={handleClick}>
				❌
			</Button>
		</article>
	);
};

export default RadioGroup;
