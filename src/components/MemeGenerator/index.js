import {Component} from 'react'

import {Maincont} from './styledComponents'

import {Inputcont} from './styledComponents'

import {Imagecont} from './styledComponents'

import {Custombutton} from './styledComponents'

import {Secondcont} from './styledComponents'

import {Parastyle} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    inputImage: '',
    topText: '',
    bottomText: '',
    displycontent: false,
    parafont: '',
  }

  onchangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onchangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onchangeUrl = event => {
    this.setState({inputImage: event.target.value})
  }

  onsubmitform = event => {
    event.preventDefault()
    const {topText, bottomText} = this.state
    this.setState({displycontent: true})
  }

  handleChange = event => {
    this.setState({parafont: event.target.value})
  }

  render() {
    const {inputImage, topText, bottomText, displycontent, parafont} =
      this.state
    return (
      <Maincont>
        <Inputcont onSubmit={this.onsubmitform}>
          <h1>Meme Generator</h1>
          <label for="ImageUrl">Image URL:</label>
          <input
            type="text"
            id="ImageUrl"
            name="ImageUrl"
            value={inputImage}
            placeholder="Enter the Image URL"
            onChange={this.onchangeUrl}
          />

          <label for="topText">Top Text:</label>
          <input
            type="text"
            id="topText"
            name="topText"
            placeholder="Enter the Top Text"
            value={topText}
            onChange={this.onchangeTop}
          />

          <label for="bottomText">Bottom Text:</label>
          <input
            type="text"
            id="bottomText"
            name="bottomText"
            placeholder="Enter the Bottom Text"
            onChange={this.onchangeBottom}
          />

          <label htmlFor="dropdown">Font Size</label>
          <select id="dropdown" onChange={this.handleChange}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.displayText}>
                {each.displayText}
              </option>
            ))}
          </select>

          <Custombutton type="submit">Generate</Custombutton>
        </Inputcont>
        <Secondcont disp={displycontent}>
          <Imagecont imgUrl={inputImage} data-testid="meme">
            <Parastyle fontstyle={parafont}>{topText}</Parastyle>
            <Parastyle fontstyle={parafont}>{bottomText}</Parastyle>
          </Imagecont>
        </Secondcont>
      </Maincont>
    )
  }
}
export default MemeGenerator
