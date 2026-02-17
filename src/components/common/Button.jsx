import styles from './Button.module.css'

function Button({ children, variant = 'primary', onClick, ...props }) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
