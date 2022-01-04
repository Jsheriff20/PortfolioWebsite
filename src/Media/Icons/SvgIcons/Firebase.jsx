import { SvgIcon } from "@mui/material";

function Firebase(props) {
    let colours = props.colours || ["#ffa000", "#f57f17", "#ffca28", "#ffa000"];
    return (
        <SvgIcon {...props} viewBox="0 0 30 35">
            <path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill={colours[0]} />
            <path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill={colours[1]} />
            <path
                d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
                fill={colours[2]}
            />
            <path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill={colours[3]} />
        </SvgIcon>
    );
}

export default Firebase;
