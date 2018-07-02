import { h } from 'preact'

import TextInput from '../../shared/forms'
import TextArea from '../../shared/forms/textarea'
import Select from '../../shared/forms/select'
import Checkbox from '../../shared/forms/checkbox'

export default function Forms() {
  return (
    <div>
      <h3>Forms</h3>

      <div class="flex flex-dc">
        <TextInput title="Text input" id="00" type="text" />
        <Select
          title="Select"
          id="01"
          options={[
            { name: 'Option 1', value: 'value1' },
            { name: 'Option 2', value: 'value2' },
            { name: 'Option 3', value: 'value3' },
            { name: 'Option 4', value: 'value4' }
          ]}
        />
        <TextArea title="Textarea" id="02" />

        <Checkbox title="Checkbox" id="03" />
      </div>
    </div>
  )
}
