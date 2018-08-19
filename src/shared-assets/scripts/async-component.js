import { h, Component } from 'preact'

export default (loader, collection) =>
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      this.state = { component: null }
    }

    async componentWillMount() {
      if (!this.state.component) {
        const component = await loader()
        this.setState({ component })
      }
    }

    render() {
      return this.state.component ? (
        <this.state.component {...this.props} {...collection} />
      ) : (
        <p>Loading...</p>
      )
    }
  }
