const initialStore = {
  modal: {
    state: false,
    props: {
      title: '',
      confirmButtonText: 'Ok',
      closeButtonText: 'Cancel',
      actionRequired: false
    },
    onAccept: () => {
      console.log('accept')
    },
    onClose: () => {
      console.log('close')
    }
  }
}

export default initialStore
