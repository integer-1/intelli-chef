import { Cooking } from '../Icons'
interface ErrorProps {
  message: string
}

import styles from './ErrorMessage.module.css'



const ErrorMessage: React.FC<ErrorProps> = ({message}) => {
  return (
    <div className={styles['error-box']}>
      <h1>Oops!</h1>
      <Cooking />
      <p>{message}</p>
    </div>
  )
}

export default ErrorMessage
