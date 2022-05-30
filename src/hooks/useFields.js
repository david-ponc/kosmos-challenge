import { useState } from 'react';

const useFields = () => {
	const [fields, setFields] = useState([]);

	const addTextField = () => {
		setFields([
			...fields,
			{
				_uid: crypto.randomUUID(),
				component: 'text',
				label: 'Label text',
				type: 'text'
			}
		]);
	};

	const addSelectField = () => {
		setFields([
			...fields,
			{
				_uid: crypto.randomUUID(),
				component: 'select',
				label: 'Label select',
				type: 'select',
				options: [
					{
						label: 'Option 1',
						value: 'option_1'
					},
					{
						label: 'Option 2',
						value: 'option_2'
					}
				]
			}
		]);
	};

	const addRadioGroupField = () => {
		setFields([
			...fields,
			{
				_uid: crypto.randomUUID(),
				component: 'radio-group',
				label: 'Label radio group',
				type: 'radio',
				options: [
					{
						label: 'Option 1',
						value: 'option_1'
					},
					{
						label: 'Option 2',
						value: 'option_2'
					}
				]
			}
		]);
	};

	const deleteField = _uid => {
		setFields(fields.filter(field => field._uid !== _uid));
	};

	return {
		fields,
		addTextField,
		addSelectField,
		addRadioGroupField,
		deleteField
	};
};

export default useFields;
