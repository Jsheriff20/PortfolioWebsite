import theme from "../../Components/Themes"

import profileImage from "../../Media/Images/ProfileImage2.jpg"

export const intro = {
    width: "100vw",
    maxWidth: "1200px",
    margin: "auto",
    marginBottom: "100px",
    backgroundColor: "transparent",
}

export const profileInfo = {
    height: "426px",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

export const infoBar = {
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "20px",
    boxShadow: 10,
}

export const title = {
    textAlign: "center",
    lineHeight: null,
    fontSize: { xs: "4.5rem", md: "5.2rem", lg: "5.625rem" },
    color: theme.palette.primary.contrastText,
    textShadow: "0px 6px 6px rgb(0 0 0 / 44%), 0px 10px 14px rgb(0 0 0 / 30%), 0px 4px 18px rgb(0 0 0 / 26%)",
    flexShrink: 1,
    display: "block",
}

export const job = {
    textAlign: "center",
    textShadow: "0px 6px 6px rgb(0 0 0 / 44%), 0px 10px 14px rgb(0 0 0 / 30%), 0px 4px 18px rgb(0 0 0 / 26%)",
    marginTop: "16px",
}

export const aboutMe = {
    fontSize: "16px",
    fontFamily: "Georgia",
}

export const subTitle = {
    fontSize: { xs: "36px", sm: "40px", md: "48px" },
    color: theme.palette.primary.contrastText,
}

export const centerButton = {
    textAlign: "center",
    marginTop: "3.125rem",
}

export const backgroundImage = {
    width: "100%",
    height: "426px",
    position: "fixed",
    left: 0,
    right: 0,
    zIndex: -1,
    display: "block",

    backgroundImage: `url(${profileImage})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    filter: "blur(3px)",
}

export const titleGrid = {
    marginBottom: "30px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
}

export const hideOnSm = {
    display: { xs: "none", md: "block" },
}

export const showOnSm = {
    display: { xs: "block", md: "none" },
}

export const aboutMeGrid = {
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
}
