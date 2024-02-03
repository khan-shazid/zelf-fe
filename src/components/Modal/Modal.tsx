import styles from './Modal.module.css';

export function Modal({show, onClose, children}) {
    return (
        <div id="myModal" className={styles.modal} style={{display: show ? 'block' : 'none'}}>
            <div className={styles['modal-content']}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    )
}