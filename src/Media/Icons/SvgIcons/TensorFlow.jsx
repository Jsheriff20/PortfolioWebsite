import { SvgIcon } from "@mui/material";

function TensorFlow(props) {
    let colours = props.colours || ["#ffb300"];
    return (
        <SvgIcon {...props} viewBox="0 0 48 48">
            <polygon fill={colours[0]} points="16,39.609 23,43.609 23,4 16,8" />
            <polygon fill={colours[0]} points="23,12.433 6,22.25 6,13.75 23,3.933" />
            <polygon fill={colours[0]} points="32,39.609 25,43.609 25,4 32,8" />
            <polygon fill={colours[0]} points="25,12.433 42,22.25 42,13.75 25,3.933" />
            <polygon fill={colours[0]} points="29,19.732 29,27.365 36,31.407 36,23.775" />
        </SvgIcon>
    );
}

export default TensorFlow;
