import * as React from 'react'
import { CSSProperties } from 'react';


export class HomeView extends React.Component<{}, {}> {

  render () {
    return <div>
      <div className="sidebar-wrapper">
      <div className="sidebar">
          <div className="sidebar-header">
            Spencer Tank
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        <HomeViewContent numBackgroundDivs={20} />
      </div>
    </div>
  }
}

export interface IHomeViewProps
{
  numBackgroundDivs : number;
}

export interface IHomeViewState
{
  scrollPosition : number;
  width          : number;
}

export class HomeViewContent extends React.Component<IHomeViewProps, IHomeViewState>
{
  container: any;
  state : IHomeViewState
  constructor(props: IHomeViewProps) {
    super(props)
    this.state = {
      scrollPosition: 0,
      width: 1000
    }
  }

  setupWindowResizer = () => {
    this.setState({width: this.container.offsetWidth})
    window.addEventListener("optimizedResize", () => {
        this.setState({width: this.container.offsetWidth})
    });
  }

  componentDidMount() {
    this.setupWindowResizer()
  }

  render() {
    const { numBackgroundDivs } = this.props;
    console.log(numBackgroundDivs);
    return <div className="content" onScroll={this.handleScroll} ref={cont => this.container = cont}>
      {Array.apply(null, {length: numBackgroundDivs}).map(Number.call, Number).map((num: number) =>
      {
        const width = this.state.width / numBackgroundDivs;
        const sidebarWidth = 400;
        const styleObject: CSSProperties = {
          position : 'fixed',
          top : '0px',
          bottom: '0px',
          left: sidebarWidth + num * width,
          width: width,
          transform: 'rotate(' + this.state.scrollPosition + 'deg)'

        }
        return (<div key={num} className={`background-div background-div-${num}`} style={styleObject}/>)
      }
      )}
      <div className="content-scroll"/>
    </div>
  }

  renderBackgroundDivs = () =>
  {
    const { numBackgroundDivs } = this.props;
    for (let i = 0; i < numBackgroundDivs; i++) {

    }
   }

  private handleScroll = () =>
  {
    this.setState({scrollPosition: this.state.scrollPosition + 1})
    console.log(this.state.scrollPosition)
  }
  


}


