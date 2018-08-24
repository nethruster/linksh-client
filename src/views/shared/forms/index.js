import { h, Component } from 'preact'
import { bind } from 'decko'

export default class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false
    }
  }

  @bind
  handleInputStateChange(event) {
    if (event.type === 'focus') {
      this.setState({ isFocused: true })
    } else if (
      event.type === 'blur' &&
      !this.checkInputContent(event.target.value)
    ) {
      this.setState({ isFocused: false })
    }
  }

  @bind
  handleInputDataChange(event) {
    if (this.props.onInputHandler) {
      this.props.onInputHandler(event)
    }
  }

  checkInputContent(inputValue) {
    return !!inputValue.trim().replace(/\s/g, '')
  }

  render({ type, title, id }) {
    return (
      <label
        for={id}
        class={`flex flex-dc ${this.state.isFocused ? 'focused' : ''}`}
      >
        <span>{title}</span>
        <div class="input-container">
          <input
            id={id}
            type={type || 'text'}
            key={id}
            onFocus={this.handleInputStateChange}
            onBlur={this.handleInputStateChange}
            onInput={this.handleInputDataChange}
          />
          <div class="input-underline" />
        </div>
      </label>
    )
  }
}
