import * as React from 'react'
import { FileUpload } from 'react-md'

interface IFileReadProgress {
  onLoad: (e: any) => void
  onLoadStart: (e: any) => void
  onProgress: (e: any) => void
  label?: string
}

export const FileUploadForm: React.FC<IFileReadProgress> = ({ onLoad, onLoadStart, onProgress, label }) => {
  return (
    <div className="md-color--secondary-text">
      <FileUpload
        id="server-upload-file"
        label={label}
        accept="zip/*"
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        onChange={() => console.log('onChange')}
        name="file"
        secondary
        className="file-inputs__upload-form__file-upload"
        iconBefore
      />
    </div>
  )
}

FileUploadForm.defaultProps = {
  label: 'Choose Your File',
}

export default FileUploadForm
