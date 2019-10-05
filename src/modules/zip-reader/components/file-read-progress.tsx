import * as React from 'react'
import { CircularProgress, CardText } from 'react-md'
import { FILE_READ_PROGRESS_SCALE } from '../constants'

interface IFileReadProgressProps {
  message?: string
}

export const FileReadProgress: React.FC<IFileReadProgressProps> = props => {
  return (
    <div>
      {(props.message !== '' || props.message !== undefined) && (
        <CardText className="file-read-progress-message">Please Wait: {props.message}</CardText>
      )}
      <CircularProgress id={'load-file'} scale={FILE_READ_PROGRESS_SCALE} />
    </div>
  )
}

export default FileReadProgress
