import Button from './components/button';
import FieldsCollection from './components/fields-collection';
import useFields from './hooks/useFields';
import styles from './styles/app.module.css';

function App() {
	const {
		fields,
		addRadioGroupField,
		addSelectField,
		addTextField,
		deleteField
	} = useFields();

	return (
		<section className={styles.container}>
			<aside className={styles.aside}>
				<header className={styles.asideHeader}>
					<h1>Components</h1>
					<p>Add elements to form</p>
				</header>
				<section className={styles.options}>
					<Button className={styles.button} onClick={addTextField}>
						<p>Text</p>
					</Button>
					<Button className={styles.button} onClick={addSelectField}>
						<p>Select</p>
					</Button>
					<Button className={styles.button} onClick={addRadioGroupField}>
						<p>Radio group</p>
					</Button>
				</section>
			</aside>
			<FieldsCollection fields={fields} deleteField={deleteField} />
		</section>
	);
}

export default App;
