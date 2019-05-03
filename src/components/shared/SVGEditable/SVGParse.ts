export default (path: string): any => {
    let pointerX = 0, pointerY = 0;
    return (path.match(/[A-z](.*?)(?=[A-z])/g) || []).map((statement: any) => {
        if (!statement) return;
        statement = statement.toLowerCase()
        let ret = null;
        if (statement.startsWith('m')) {
        ret = {
            type: 'moveto',
            x: parseFloat(statement.split(',')[0].substr(1)),
            y: parseFloat(statement.split(',')[1])
        }
        }
        else if (statement.startsWith('c')) {
        const numbers = statement.substr(1).split(" ");
        ret = {
            type: 'curveto',
            from: {
            x: pointerX,
            y: pointerY
            },
            handleLeft: {
            x: parseFloat(numbers[0].split(',')[0]),
            y: parseFloat(numbers[0].split(',')[1]),
            },
            handleRight: {
            x: parseFloat(numbers[1].split(',')[0]),
            y: parseFloat(numbers[1].split(',')[1]),
            },
            to: {
            x: pointerX + parseFloat(numbers[2].split(',')[0]),
            y: pointerY + parseFloat(numbers[2].split(',')[1]),
            }
        }
        }
        else {
        console.error('unknown ' + statement)
        }
        // Moving pointer
        if (!ret) return null;
        if (ret.type === 'moveto') {
        if (ret.x) pointerX = ret.x
        if (ret.y) pointerY = ret.y
        }
        if (ret.type === 'curveto' && ret.to) {
        if (ret.to.x) pointerX = ret.to.x
        if (ret.to.y) pointerY = ret.to.y
        }

        return ret;
    })
}