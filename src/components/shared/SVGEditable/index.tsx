import React, { RefObject } from 'react'
import SVGParse from './SVGParse'
import Point from './Point'

interface IProps {
    path: string
}

interface IState {
    paths: any
}

const SVGEditable = (WrappedComponent: any): any => {

    return class extends React.Component<IProps, IState> {

        component: React.RefObject<any> = React.createRef<any>()
        state: IState = {
            paths: []
        }

        componentDidMount () {
            const that = this;
            const wrappedComponent = this.component.current;
            for (let pathName in wrappedComponent.paths) {
                wrappedComponent.paths[pathName].current.addEventListener('dblclick', function (this: never) {
                    if (!that.state.paths.includes(this)) {
                        const paths = that.state.paths
                        paths.push(this)
                        that.setState({ paths })
                    }
                })
            }
        }

        render () {
            const helpers: any = [];
            const paths = this.state.paths;
            for (let path of paths) {
                const pathString = path.getAttribute('d');
                const pathId = path.getAttribute('id');
                const parsedPath = SVGParse(pathString)
                const curvePoints = parsedPath.filter((s: any) => s.type === 'curveto');
                for (let i = 0; i < curvePoints.length; i++) helpers.push(<Point key={pathId + i} index={i} items={curvePoints} />)
            }
    
            return (<React.Fragment>
                <WrappedComponent ref={this.component} {...this.props} />
                <g className="handlers">
                    {helpers}
                </g>
            </React.Fragment>)
        }
    
    }

}

export default SVGEditable;