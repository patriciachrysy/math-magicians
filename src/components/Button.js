class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div class="button">
                <button>{this.props.label}</button>
            </div>
        )
    }
}