import { ArrowButton } from 'src/ui/arrow-button';
import styles from './AsideWindow.module.scss';
import { ReactNode, useRef } from 'react';
import { useOutsideClick } from './hooks/useOutsideClick';
import { useScrollLock } from './hooks/useLockScroll';
import clsx from 'clsx';

type AsideWindowProps = {
	isOpen: boolean;
	setOpen: (open: boolean) => void;
	children: ReactNode;
};

/**
 * Выдвигающееся окно сайдбара
 */
export const AsideWindow = (props: AsideWindowProps) => {
	const { isOpen, setOpen, children } = props;
	useScrollLock(isOpen);

	const rootRef = useRef(null);
	useOutsideClick({
		rootRef: rootRef,
		callback: () => setOpen(false),
	});

	return (
		<div ref={rootRef}>
			<ArrowButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				{children}
			</aside>
		</div>
	);
};
