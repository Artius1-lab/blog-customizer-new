import { useEffect } from 'react';

type UseOutsideClick = {
	rootRef: React.RefObject<HTMLElement>;
	callback: () => void;
};

/**
 * Хук, который при клике вне сайдбара закрывает его
 */
export const useOutsideClick = ({ rootRef, callback }: UseOutsideClick) => {
	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				event.target &&
				rootRef.current &&
				!rootRef.current.contains(event.target as Node)
			) {
				callback();
			}
		};

		window.addEventListener('mousedown', handleOutsideClick);
		return () => {
			window.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [rootRef, callback]);
};
