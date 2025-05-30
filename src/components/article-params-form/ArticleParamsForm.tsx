import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Select } from 'src/ui/select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	fontColorsOptions,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import { AsideWindow } from '../aside-window/';

type ArticleParamsFormProps = {
	currentValues: ArticleStateType;
	defaultValues: ArticleStateType;
	onChange: (newValues: ArticleStateType) => void;
};

/**
 * Форма для изменения параметов статьи
 */
export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { currentValues, defaultValues, onChange } = props;
	const [isOpen, setOpen] = useState(false);

	const [userFormData, setUserFormData] = useState<Partial<ArticleStateType>>(
		{}
	);

	const formData: ArticleStateType = {
		...currentValues,
		...userFormData,
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onChange(formData);
		setUserFormData({});
		// Расскоментируйте, если необходимо закрытие окна формы после нажатия на кнопку "Применить"
		// setOpen(false);
	};

	const onReset = () => {
		onChange(defaultValues);
		setUserFormData({});
		// Расскоментируйте, если необходимо закрытие окна формы после нажатия на кнопку "Сбросить"
		// setOpen(false);
	};

	return (
		<AsideWindow isOpen={isOpen} setOpen={setOpen}>
			<form className={styles.form} onSubmit={onSubmit} onReset={onReset}>
				<Text weight={800} size={31} uppercase>
					задайте параметры
				</Text>
				<div className={styles.formOptionContainer}>
					<Select
						title='шрифт'
						selected={formData.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) =>
							setUserFormData((l) => ({ ...l, fontFamilyOption: option }))
						}
					/>
				</div>
				<div className={styles.formOptionContainer}>
					<RadioGroup
						title={'размер шрифта'}
						name={'font-size'}
						options={fontSizeOptions}
						selected={formData.fontSizeOption}
						onChange={(option) =>
							setUserFormData((l) => ({ ...l, fontSizeOption: option }))
						}
					/>
				</div>
				<div className={styles.formOptionContainer}>
					<Select
						title='цвет шрифта'
						selected={formData.fontColor}
						options={fontColorsOptions}
						onChange={(option) =>
							setUserFormData((l) => ({ ...l, fontColor: option }))
						}
					/>
				</div>
				<div className={styles.formOptionContainer}>
					<Separator />
				</div>
				<div className={styles.formOptionContainer}>
					<Select
						title='цвет фона'
						selected={formData.backgroundColor}
						options={backgroundColors}
						onChange={(option) =>
							setUserFormData((l) => ({ ...l, backgroundColor: option }))
						}
					/>
				</div>
				<div className={styles.formOptionContainer}>
					<Select
						title='ширина контента'
						selected={formData.contentWidth}
						options={contentWidthArr}
						onChange={(option) =>
							setUserFormData((l) => ({ ...l, contentWidth: option }))
						}
					/>
				</div>
				<div className={styles.formButtonsContainer}>
					<Button title='Сбросить' htmlType='reset' type='clear' />
					<Button title='Применить' htmlType='submit' type='apply' />
				</div>
			</form>
		</AsideWindow>
	);
};
