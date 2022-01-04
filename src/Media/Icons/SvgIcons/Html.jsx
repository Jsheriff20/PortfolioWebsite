import { SvgIcon } from "@mui/material";

function Html(props) {
    let colours = props.colours || ["#E65100", "#FF6D00", "#FFF", "#EEE"];
    return (
        <SvgIcon {...props} viewBox="0 0 48 48">
            <path fill={colours[0]} d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
            <path fill={colours[1]} d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
            <path
                fill={colours[2]}
                d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
            />
            <path
                fill={colours[3]}
                d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
            />
        </SvgIcon>
    );
}

export default Html;
