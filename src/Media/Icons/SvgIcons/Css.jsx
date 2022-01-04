import { SvgIcon } from "@mui/material";

function Css(props) {
    let colours = props.colours || ["#0277BD", "#039BE5", "#FFF", "#EEE"];
    return (
        <SvgIcon {...props} viewBox="0 0 48 48">
            <path fill={colours[0]} d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
            <path fill={colours[1]} d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
            <path
                fill={colours[2]}
                d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
            />
            <path
                fill={colours[3]}
                d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
            />
        </SvgIcon>
    );
}

export default Css;
