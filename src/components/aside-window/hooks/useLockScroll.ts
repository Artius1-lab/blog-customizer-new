import { useEffect } from 'react';

/**
 * Хук, который блокирует скролл страницы при открытии окна с формой
 */
export const useScrollLock = (isFormOpen: boolean) => {
	useEffect(() => {
		const body = document.body;

		if (isFormOpen) body.style.overflow = 'hidden';
		else body.style.overflow = '';

		return () => {
			body.style.overflow = 'hidden';
		};
	}, [isFormOpen]);
};
