import * as React from 'react'
import { CardText } from 'react-md'

// props & state ---------------------------------------------------------------
interface IErrorMessageProps {
  message: string
}

// component -------------------------------------------------------------------
export const ErrorMessage = ({ message }: IErrorMessageProps) => {
  return <CardText className="md-text--error">{message}</CardText>
}

export default ErrorMessage
