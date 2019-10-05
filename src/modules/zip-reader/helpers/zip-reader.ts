import JSZip from 'jszip'

export const loadFile = (file: File, onSuccess: (files: Array<any>) => void, onError: (e?: any) => void) => {
  JSZip.loadAsync(file).then(
    zip => {
      console.log('zipLoad')
      const files: Array<string> = []
      zip.forEach(function(relativePath, zipEntry: any) {
        files.push(zipEntry)
      })
      onSuccess(files)
    },
    (e: any) => {
      if (onError) {
        onError(e)
      }
    },
  )
}
