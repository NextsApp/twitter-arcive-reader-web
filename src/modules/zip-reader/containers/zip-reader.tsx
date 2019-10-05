import * as React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'

import JSZip from 'jszip'
import { Base, ErrorMessage } from '../../../components'
import { ZIP_STATE, FileReadProgress, FileUploadForm } from '..'

// interface props & state ---------------------------------------------------------------
interface InterfaceZipReaderProps extends WithTranslation {}

interface InterfaceZipReaderState {
  zipState: string | 'loaded' | 'progress' | 'start' | 'error' | 'store' | 'read'
  files: Array<string>
  fileTypeError: string
}

// component -------------------------------------------------------------------
class ZipReader extends React.Component<InterfaceZipReaderProps, InterfaceZipReaderState> {
  constructor(props: InterfaceZipReaderProps) {
    super(props)
    this.state = {
      zipState: ZIP_STATE.START,
      files: [],
      fileTypeError: '',
    }
  }

  handleFile(file: any) {
    JSZip.loadAsync(file).then(
      zip => {
        console.log('zipLoad')
        const files: Array<string> = []
        zip.forEach(function(relativePath, zipEntry) {
          files.push(zipEntry.name)
        })

        this.setState({
          files,
          zipState: ZIP_STATE.STORE_DATA_PROGRESS,
        })

        this.storeData()
      },
      (e: any) => {
        console.error(e)
        this.setState({
          fileTypeError: 'Error: invalid file format, you can only upload a zip file',
          zipState: ZIP_STATE.ERROR,
        })
      },
    )
  }

  storeData = () => {
    this.setState({
      zipState: ZIP_STATE.LOADED,
    })
  }

  handleLoad = (fileEvent: any) => {
    this.handleFile(fileEvent)
    this.setState({
      zipState: ZIP_STATE.READ_DATA_PROGRESS,
    })
  }

  handleLoadStart = () => {
    this.setState({
      zipState: ZIP_STATE.START,
      fileTypeError: '',
    })
  }

  handleProgress = () => {
    if (this.state.zipState !== ZIP_STATE.PROGRESS) {
      this.setState({
        zipState: ZIP_STATE.PROGRESS,
        fileTypeError: '',
      })
    }
  }

  renderContent() {
    switch (this.state.zipState) {
      case ZIP_STATE.PROGRESS:
        return <FileReadProgress message={this.props.t('File is being uploaded')} />
      case ZIP_STATE.READ_DATA_PROGRESS:
        return <FileReadProgress message={this.props.t('File is read')} />
      case ZIP_STATE.STORE_DATA_PROGRESS:
        return <FileReadProgress message={this.props.t('Data are store')} />

      case ZIP_STATE.LOADED:
        return <div>loaded</div>
      case ZIP_STATE.START:
      default:
        return (
          <FileUploadForm
            onLoad={this.handleLoad}
            onLoadStart={this.handleLoadStart}
            onProgress={this.handleProgress}
          />
        )
    }
  }

  renderFileList() {
    return <div>{this.state.files.join('\n')}</div>
  }

  render() {
    console.log('files => ', this.state.files)

    return (
      <Base>
        <div className="zip-reader-container">
          <h2>Willkommen zur "Online Twitter Archive Reader" </h2>
          <h4>
            Falls du eine Archiv "Zip-Datei" vom <a href="http://twitter.com">Twitter</a> bekommen hast,
            <br /> kannst du sie hier durch unseren System auslesen lassen und deinen archive betrachten.
          </h4>
          <hr className="md-background--primary" />
          {this.state.fileTypeError !== '' && <ErrorMessage message={this.state.fileTypeError} />}
          {this.renderContent()}
          <div>{this.renderFileList()}</div>
        </div>
      </Base>
    )
  }
}

export default withTranslation()(ZipReader)
