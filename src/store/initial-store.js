const initialStore = {
  modal: {
    state: false,
    props: {
      title: '',
      confirmButtonText: 'Ok',
      closeButtonText: 'Cancel',
      actionRequired: false,
      onAccept: () => {
        console.log('accept')
      },
      onClose: () => {
        console.log('close')
      }
    }
  },
  vmenu: {
    state: false,
    props: {
      onOpen: () => {
        console.log('accept')
      },
      onClose: () => {
        console.log('close')
      }
    }
  },
  auth: {
    state: !!sessionStorage.getItem('lsh-usersession')
  }
}

export default initialStore
