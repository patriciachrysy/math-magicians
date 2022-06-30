class Screen extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div class="screen-frame">
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}