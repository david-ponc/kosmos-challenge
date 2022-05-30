import RadioGroup from '../fields/radio-group';
import SelectField from '../fields/select';
import TextField from '../fields/text';
import styles from './fields-collection.module.css';

const FieldsCollection = ({ fields, deleteField }) => {
	if (!fields.length) return <p className={styles.message}>No hay elementos</p>;

	return (
		<main className={styles.main}>
			<h2 className={styles.title}>Form structure</h2>
			<section className={styles.container}>
				{fields.map(field => {
					const Component = COMPONENTS[field.component];
					return (
						<Component key={field._uid} {...field} onDelete={deleteField} />
					);
				})}
			</section>
		</main>
	);
};

const COMPONENTS = {
	text: TextField,
	select: SelectField,
	'radio-group': RadioGroup
};

export default FieldsCollection;
