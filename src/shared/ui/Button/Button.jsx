import styles from './button.module.scss'

const Button = (props) => {
  const {
    className = '',
    type = 'button',
    ref,
    children,
    onClick,
    isDisabled,
  } = props

  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      disabled={isDisabled}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button