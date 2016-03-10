export default React.createClass({

    currentElement: 0,

    propTypes: {
        defaultValue: React.PropTypes.string.isRequired,
        elements: React.PropTypes.array.isRequired,
        context: React.PropTypes.object.isRequired,
        customClass: React.PropTypes.string,
        callbackGlobal: React.PropTypes.func,
        callbackLeft: React.PropTypes.func,
        callbackRight: React.PropTypes.func
    },

    componentWillMount() {
        //Using that foreach to set our current element by default.
        this.props.elements.forEach(
            (element, index) => {
                if (element.value === this.props.defaultValue) {
                    this.currentElement = index;
                }
            }
        );

        console.log(this.currentElement);
    },
    leftClicked() {
        if (this.currentElement - 1 >= 0) {
            this.currentElement = this.currentElement - 1;
            this.props.callbackLeft ? this.props.callbackLeft.call(this.props.context, this.props.elements[this.currentElement].value) : this.props.callbackGlobal.call(this.props.context, this.props.elements[this.currentElement].value);
            this.forceUpdate();
        }
    },

    rightClicked() {
        if (this.currentElement + 1 < this.props.elements.length) {
            this.currentElement = this.currentElement + 1;
            this.props.callbackRight ? this.props.callbackRight.call(this.props.context, this.props.elements[this.currentElement].value) : this.props.callbackGlobal.call(this.props.context, this.props.elements[this.currentElement].value);
            this.forceUpdate();
        }
    },

    isBlockedStyle(side) {
        if (side === 'left' && this.currentElement === 0) {
            return 'disabled';
        } else if (side === 'right' && this.currentElement === this.props.elements.length) {
            return 'disabled';
        }

        return '';
    },

    render() {
        return (
            <div className={'range-button ' + (this.props.customClass ? this.props.customClass : '')}>
                <div className={'left-button ' + this.isBlockedStyle('left')} onClick={this.leftClicked}></div>
                <div className="main-body">
                    {this.props.elements[this.currentElement].label}
                </div>

                <div className={'right-button ' + this.isBlockedStyle('right')} onClick={this.rightClicked}></div>
            </div>
        );
    }
});
