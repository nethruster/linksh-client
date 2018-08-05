const initialStore = {
  modal: {
    modalState: false,
    onAccept: () => {
      console.log('accept')
    },
    onClose: () => {
      console.log('close')
    },
    modalProps: {
      title: '',
      confirmButtonText: 'Ok',
      closeButtonText: 'Cancel',
      actionRequired: false
    }
  }
}

export default initialStore
