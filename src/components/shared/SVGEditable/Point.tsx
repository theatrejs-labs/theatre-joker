import React from 'react'

interface IProps {
    items: any
    index: number
}

interface IState  {
    selected: boolean
}

class Point extends React.PureComponent<IProps, IState> {

    state = {
        selected: false
    }

    render () {
        const { items, index } = this.props
        const { selected } = this.state
        const showHandles = !!selected;
        const item = items[index]
        const previousItem = index > 0 ? items[index - 1] : null;
        const x = item.from.x;
        const y = item.from.y;
        const handleRightX = x + item.handleRight.x
        const handleRightY = y + item.handleRight.y
        const handleLeftX = previousItem ? x - previousItem.handleLeft.x : 0
        const handleLeftY = previousItem ? y - previousItem.handleLeft.y : 0
        return (
            <g>
                {showHandles && <line className="handlers__handle-line" x1={x} y1={y} x2={handleRightX} y2={handleRightY} />}
                {showHandles && previousItem && <line className="handlers__handle-line" x1={x} y1={y} x2={handleLeftX} y2={handleLeftY} />}
                <circle
                    onClick={this.toggleSelected}
                    className="handlers__main"
                    cx={x}
                    cy={y} />
                {showHandles && <circle className="handlers__handle-point" cx={handleRightX} cy={handleRightY} />}
                {showHandles && previousItem && <circle className="handlers__handle-point" cx={handleLeftX} cy={handleLeftY} />}
            </g>
        )
    }

    toggleSelected = () => {
        this.setState({ selected: !this.state.selected })
    }

}

export default Point;