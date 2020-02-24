import React from 'react'
import './App.css'
import arrow from './images/arrow.svg'
import image1 from './images/image2.1.jpg'
import image2 from './images/image3.jpg'
import image3 from './images/image2.jpg'

class App extends React.Component {
  constructor() {
    super()
    this.data = [
      {
        img: image1,
        city: 'Rostov-on-Don LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request',
      },
      {
        img: image3,
        city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',
      },
      {
        img: image2,
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',
      },
    ]
    this.state = {
      i: 0,
      img: image1,
      area: '81 m2',
      city: 'Rostov-on-Don LCD admiral',
      time: '3.5 months',
    }
  }

  handleClick(abracadabra) {
    this.setState({
      i: abracadabra,
    })
  }

  render() {
    const img = <img src={this.data[this.state.i].img} />
    return (
      <div className='page2'>
        <div className='page2__side page2__side--left'>
          <h2 className='page2__title'>
            Completed
            <br />
            projects
          </h2>
          <p className='page2__text'>
            Only a small part of the work performed by our company is presented
            on the site. For 14 years on in the construction marketwe have made
            happy more than 1000 families
          </p>
          <div className='page2__params'>
            <div className='page2__params--sity'>City:</div>
            <div className='page2__params--sity'>apartment area:</div>
            <div id='city' className='page2__params--sity2'>
              {this.data[this.state.i].city}
            </div>
            <div id='area' className='page2__params--sity2'>
              {this.data[this.state.i].area}
            </div>
            <div className='page2__params--sity'>Repair time::</div>
            <div className='page2__params--sity'>Repair Cost:</div>
            <div id='time' className='page2__params--sity2'>
              {this.data[this.state.i].time}
            </div>
            <div id='cost' className='page2__params--sity2'>
              Upon request
            </div>
          </div>
          <div className='page2__params--time'></div>
          <div className='page2__params--cost'></div>
          <div className='page2__controls'>
            <button
              onClick={this.handleClick.bind(
                this,
                this.state.i == 0 ? this.data.length - 1 : this.state.i - 1
              )}
              className='page2__arrow page2__arrow--left'
            >
              <img src={arrow} />
            </button>
            <button
              onClick={this.handleClick.bind(this, 0)}
              className={
                this.state.i == 0
                  ? 'page2__circle--current page2__circle'
                  : 'page2__circle'
              }
            ></button>
            <button
              onClick={this.handleClick.bind(this, 1)}
              className={
                this.state.i == 1
                  ? 'page2__circle--current page2__circle'
                  : 'page2__circle'
              }
            ></button>
            <button
              onClick={this.handleClick.bind(this, 2)}
              className={
                this.state.i == 2
                  ? 'page2__circle--current page2__circle'
                  : 'page2__circle'
              }
            ></button>
            <button
              onClick={this.handleClick.bind(
                this,
                this.state.i == this.data.length - 1 ? 0 : this.state.i + 1
              )}
              className='page2__arrow page2__arrow--right'
            >
              <img src={arrow} />
            </button>
          </div>
        </div>
        <div className='page2__side page2__side--right'>
          <div className='page2__buttons'>
            <button
              onClick={this.handleClick.bind(this, 0)}
              className={
                this.state.i == 0
                  ? 'page2__button page2__button--current'
                  : 'page2__button'
              }
            >
              Rostov-on-Don, Admiral
            </button>
            <button
              onClick={this.handleClick.bind(this, 1)}
              className={
                this.state.i == 1
                  ? 'page2__button page2__button--current'
                  : 'page2__button'
              }
            >
              Sochi Thieves
            </button>
            <button
              onClick={this.handleClick.bind(this, 2)}
              className={
                this.state.i == 2
                  ? 'page2__button page2__button--current'
                  : 'page2__button'
              }
            >
              Rostov-on-Don Patriotic
            </button>
          </div>

          <div className='page2__images'>{img} </div>
        </div>
      </div>
    )
  }
}

export default App
