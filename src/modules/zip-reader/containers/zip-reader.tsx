import * as React from 'react'
import { WithTranslation, withTranslation, Trans } from 'react-i18next'
import TwitterArchive from 'twitter-archive-reader'
import { connect } from 'react-redux'

import { Base, ErrorMessage } from '../../../components'
import { ZIP_STATE, FileReadProgress, FileUploadForm } from '..'
import { storeAppState, storeArchiveData } from '../../app'

// interface props & state ---------------------------------------------------------------
interface InterfaceZipReaderProps extends WithTranslation {
  dispatch: any
}

interface InterfaceZipReaderState {
  zipState: string | 'loaded' | 'progress' | 'start' | 'error' | 'store' | 'read'
  fileTypeError: string
}

// component -------------------------------------------------------------------
class ZipReader extends React.Component<InterfaceZipReaderProps, InterfaceZipReaderState> {
  constructor(props: InterfaceZipReaderProps) {
    super(props)
    this.state = {
      zipState: ZIP_STATE.START,
      fileTypeError: '',
    }
  }

  async handleFile(file: any) {
    const { t } = this.props

    const archive = new TwitterArchive(file)

    archive.addEventListener('zipready', () => {
      this.setState({
        zipState: ZIP_STATE.STORE_DATA_PROGRESS,
      })
    })

    archive.addEventListener('tweetsread', async () => {
      await this.storeData(archive)
    })

    archive.addEventListener('error', () => {
      this.setState({
        fileTypeError: t('notArchiveFile'),
        zipState: ZIP_STATE.ERROR,
      })
    })
  }

  storeData = async (archive: any) => {
    const { dispatch } = this.props
    await archive.ready()

    dispatch(storeAppState('ready'))
    // @ts-ignore
    window.twitterArchive = archive

    this.setState({
      zipState: ZIP_STATE.LOADED,
    })
  }

  handleLoad = async (fileEvent: any) => {
    this.setState({
      zipState: ZIP_STATE.READ_DATA_PROGRESS,
    })
    await this.handleFile(fileEvent)
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
    const { t } = this.props

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
            label={t('chooseYourFile')}
            onLoad={this.handleLoad}
            onLoadStart={this.handleLoadStart}
            onProgress={this.handleProgress}
          />
        )
    }
  }

  render() {
    const { t } = this.props
    return (
      <Base>
        <div className="zip-reader-container">
          <h2>{t('Welcome to the twitter archive reader')}</h2>
          <h4>
            <Trans i18nKey="zipReaderDescription">
              [StartDemoString] /* overwritten from i18n */
              <a href="http://twitter.com">Twitter</a>
              [EndDemoString]/* overwritten from i18n */
            </Trans>
          </h4>



          <hr className="md-background--primary " />
          {this.state.fileTypeError !== '' && <ErrorMessage message={t(this.state.fileTypeError)} />}
          {this.renderContent()}
        </div>
      </Base>
    )
  }
}

export default connect()(withTranslation()(ZipReader))
