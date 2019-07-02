import React, { Component } from 'react'
import { DirectUploadProvider } from 'react-activestorage-provider'

export default class ActiveStorageUploader extends Component {
  render() {
    return (
      <DirectUploadProvider
        onSuccess={this.props.handleAttachement}
        render={({ handleUpload, uploads, ready }) => (
            <div className='signUp-file file-wrapper'>
              <div className='signUp-file file'>
                <input
                  type="file"
                  disabled={!ready}
                  onChange={e => handleUpload(e.currentTarget.files)}
                  required
                />
                {uploads.map(upload => {
                  switch (upload.state) {
                    case 'waiting':
                      return <div className='file-progress' key={upload.id}>Waiting to upload {upload.file.name}</div>
                    case 'uploading':
                      return (
                        <div className='file-progress' key={upload.id}>
                          {Math.round(upload.progress)}%
                        </div>
                      )
                    case 'error':
                      return (
                        <div className='file-progress' key={upload.id}>
                          Error uploading {upload.file.name}: {upload.error}
                        </div>
                      )
                    case 'finished':
                      return (
                        <div className='file-progress' key={upload.id}>Finished uploading {upload.file.name}</div>
                      )
                  }
                })}
              </div>
            </div>
        )}
      />
    )
  }
}
