import * as React from 'react'
import * as d3 from 'd3'

export interface State {
    height : number
    width  : number
}

export class VisualsView extends React.Component<{}, {}> {
    state: State;

    container: any;
    svg1: any;
    svg2: any;
    svg3: any;
    svg4: any;
    svg5: any;
    svg6: any;
    svg7: any;

    frameRate: number;

    constructor(props: any) {
        super(props)
        this.state = { 
            height: 200, 
            width: 400
        }

        this.frameRate = 1000 / 30;
     }

     setupWindowResizer = () => {
        this.setState({width: this.container.offsetWidth})
        window.addEventListener("optimizedResize", () => {
            this.setState({width: this.container.offsetWidth})
        });
     }

    clear = (svg: any) => svg.selectAll("*").remove();

    componentDidMount() {
        this.setupWindowResizer()
        this.viz1(this.svg1)
        this.viz2(this.svg2)
        this.viz3(this.svg3)
        this.viz4(this.svg4)
        this.viz5(this.svg5)
    }
    componentDidUpdate() {
        this.viz1(this.svg1)
        this.viz2(this.svg2)
        this.viz3(this.svg3)
        this.viz4(this.svg4)
        this.viz5(this.svg5)
    }

    viz1 = (svgRef: any) => {
        const svg = d3.select(svgRef)
        this.clear(svg);
        const radius = 20;
        svg.insert("circle", "rect")
        .attr("cx", radius + 5)
        .attr("cy", radius + 5)
        .attr("r", radius)
        .style("stroke", "white")
        .style("stroke-width", 3)
        .style("stroke-opacity", 1)
    }

    viz2 = (svgRef: any) => {
        const svg = d3.select(svgRef)
        this.clear(svg);
        const radius = 20;
        svg.insert("circle", "rect")
        .attr("cx", (this.state.width / 2))
        .attr("cy", (this.state.height / 2))
        .attr("r", radius)
        .style("stroke", "white")
        .style("stroke-width", 3)
        .style("stroke-opacity", 1)
    }

    viz3 = (svgRef: any) => {
        const svg = d3.select(svgRef)
        this.clear(svg);
        const radius = 20;
        const circle = svg.insert("circle", "rect")
            .attr("cx", (this.state.width / 2))
            .attr("cy", (this.state.height / 2))
            .attr("r", radius)
            .style("stroke", "white")
            .style("stroke-width", 3)
            .style("stroke-opacity", 1)

        setInterval(() => {
            let xPos = parseInt(circle.attr("cx"))
            if (xPos >= this.state.width + radius) xPos = 0 - radius;
            circle.attr("cx", xPos + 1)
        }, this.frameRate)
    }
    
    viz4 = (svgRef: any) => {
        const svg = d3.select(svgRef)
        this.clear(svg);
        const radius = 20;
        let direction = 1;
        const circle = svg.insert("circle", "rect")
            .attr("cx", (this.state.width / 2))
            .attr("cy", (this.state.height / 2))
            .attr("r", radius)
            .style("stroke", "white")
            .style("stroke-width", 3)
            .style("stroke-opacity", 1)

        setInterval(() => {
            let xPos = parseInt(circle.attr("cx"))
            if (xPos >= this.state.width - radius || xPos <= radius) direction *= -1;
            circle.attr("cx", xPos + direction)
        }, this.frameRate)
    }

    viz5 = (svgRef: any) => {
        const svg = d3.select(svgRef)
        this.clear(svg);
        const radius = 20;
        let direction = 1;
        const circle = svg.insert("circle", "rect")
            .attr("cx", (this.state.width / 2))
            .attr("cy", (this.state.height / 2))
            .attr("r", radius)
            .style("stroke", "white")
            .style("stroke-width", 3)
            .style("stroke-opacity", 1)

        setInterval(() => {
            let xPos = parseInt(circle.attr("cx"))
            let yPos = parseInt(circle.attr("cy"))
            if (xPos >= this.state.width + radius || xPos < 0 - radius ||
                yPos >= this.state.height + radius || yPos < 0 - radius) { reset() }
            circle.attr("cx", xPos + (Math.floor(Math.random() * 3) - 1) * 5)
            circle.attr("cy", yPos + (Math.floor(Math.random() * 3) - 1) * 5)
        }, this.frameRate)

        const reset = () =>
            circle
                .attr("cx", (this.state.width / 2))
                .attr("cy", (this.state.height / 2))

    }

    viz6 = (svgRef: any) => {
        const svg = d3.select(svgRef)
        this.clear(svg);
        const radius = 20;
        let direction = 1;
        const circle = svg.insert("circle", "rect")
            .attr("cx", (this.state.width / 2))
            .attr("cy", (this.state.height / 2))
            .attr("r", radius)
            .style("stroke", "white")
            .style("stroke-width", 3)
            .style("stroke-opacity", 1)

        setInterval(() => {
            let xPos = parseInt(circle.attr("cx"))
            let yPos = parseInt(circle.attr("cy"))
            if (xPos >= this.state.width + radius || xPos < 0 - radius ||
                yPos >= this.state.height + radius || yPos < 0 - radius) { reset() }
            circle.attr("cx", xPos + (Math.floor(Math.random() * 3) - 1) * 5)
            circle.attr("cy", yPos + (Math.floor(Math.random() * 3) - 1) * 5)
        }, this.frameRate)

        const reset = () =>
            circle
                .attr("cx", (this.state.width / 2))
                .attr("cy", (this.state.height / 2))

    }

    render () {
        const { height, width } = this.state;
        return <div className="visuals-wrapper">
        <div className="visuals-container" ref={cont => this.container = cont}>

                <h4>Basic circle</h4>
                <svg height={height} width={width} ref={svg => this.svg1 = svg}/>

                <h4>Centered circle</h4>
                <svg height={height} width={width} ref={svg => this.svg2 = svg}/>

                <h4>Repeat, right-moving circle</h4>
                <svg height={height} width={width} ref={svg => this.svg3 = svg}/>

                <h4>Bouncing circle</h4>
                <svg height={height} width={width} ref={svg => this.svg4 = svg}/>

                <h4>Random walk circle</h4>
                <svg height={height} width={width} ref={svg => this.svg5 = svg}/>

                <h4>Basic circle</h4>
                <svg height={height} width={width} ref={svg => this.svg6 = svg}/>

                <h4>Basic circle</h4>
                <svg height={height} width={width} ref={svg => this.svg7 = svg}/>
                    
        </div></div>
  }
}