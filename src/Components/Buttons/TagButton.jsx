import React, { useState, memo } from "react"
import { IconButton, Tooltip } from "@mui/material"
import findContrastColour from "../../Utils/findContrastColour"
import {
    Firebase,
    Java,
    CSharp,
    ReactIcon,
    CPlusPlus,
    NextJs,
    Python,
    TensorFlow,
    ArtificialIntelligence,
    Rpi,
    Aws,
    C,
    Html,
    Css,
    Php,
    Linux,
    Hadoop,
    Spark,
    Stripe,
    SanityIo,
} from "../../Media/Icons"

import { Android, School, Article, Javascript, Security } from "@mui/icons-material"

const GetTagInfo = (tag, sx) => {
    const [colours, setColours] = useState({
        Firebase: ["#ffa000", "#f57f17", "#ffca28", "#ffa000"],
        Java: ["#F44336", "#1565C0"],
        CSharp: ["#a179dc", "#280068", "#390091", "#fff"],
        React: ["#80deea"],
        CPlusPlus: ["#5C8DBC", "#1A4674", "#1B598E", "#FFF"],
        NextJs: ["#000", "#fff"],
        Python: ["#0277BD", "#FFC107"],
        TensorFlow: ["#ffb300"],
        ArtificialIntelligence: ["#000"],
        Rpi: ["#37474F", "#64DD17", "#FF4081"],
        Aws: ["#252f3e", "#f90"],
        C: ["#283593", "#5c6bc0", "#fff", "#3949ab"],
        Html: ["#E65100", "#FF6D00", "#FFF", "#EEE"],
        Css: ["#0277BD", "#039BE5", "#FFF", "#EEE"],
        Php: ["#474A8A"],
        Linux: ["#000"],
        Hadoop: ["#ff0", "#fffdbb", "#cc0", "#c0ca33", "#424242", "#ffc"],
        Spark: ["#e25a1c"],
        Stripe: ["#6772e5"],
        SanityIo: ["#f37369", "#f68d85", "#f14939", "#ecedee"],
    })

    let buttonSx = (
        backgroundColor = "#fff",
        hoverBackgroundColour,
        forgroundColour,
        hoverForegroundColour = "#000",
        transformScale = 1
    ) => {
        return [
            sx ? sx : {},
            {
                backgroundColor: backgroundColor,
                color: forgroundColour || findContrastColour("#fff"),

                lineHeight: "1.2",
                height: "35px",
                width: "35px",
                padding: "2px",
                borderRadius: "30px",
                transition: "0.3s",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                ":hover ": {
                    transform: "translateY(-5px)",
                    background: hoverBackgroundColour || findContrastColour("#000"),
                    color: hoverForegroundColour,
                },
            },
        ]
    }

    switch (tag) {
        case "Android":
            return <Android sx={buttonSx("#a4c639", "#000", "#000", "#fff")} />
        case "Java":
            return (
                <Java
                    onMouseOver={() => setColours({ ...colours, Java: ["#F7F7F7", "#E4E4E4"] })}
                    onMouseOut={() => setColours({ ...colours, Java: ["#F44336", "#1565C0"] })}
                    colours={colours.Java}
                    sx={buttonSx("#fff", "#5F5F5F")}
                />
            )
        case "Firebase":
            return (
                <Firebase
                    onMouseOver={() =>
                        setColours({ ...colours, Firebase: ["#5F5F5F", "#4B4B4B", "#7C7C7C", "#5F5F5F"] })
                    }
                    onMouseOut={() =>
                        setColours({ ...colours, Firebase: ["#ffa000", "#f57f17", "#ffca28", "#ffa000"] })
                    }
                    colours={colours.Firebase}
                    sx={buttonSx("#5382a1")}
                />
            )
        case "University":
            return <School sx={buttonSx("#fff", "#e3e3e3", "#00688B")} />
        case "Dissertation":
            return <Article sx={buttonSx("#fff", "#e3e3e3", "#00688B")} />
        case "C#":
            return (
                <CSharp
                    onMouseOver={() => setColours({ ...colours, CSharp: ["#5F5F5F", "#4B4B4B", "#7C7C7C", "#fff"] })}
                    onMouseOut={() => setColours({ ...colours, CSharp: ["#a179dc", "#280068", "#390091", "#fff"] })}
                    colours={colours.CSharp}
                    sx={buttonSx("#280068")}
                />
            )
        case "React":
            return (
                <ReactIcon
                    onMouseOver={() => setColours({ ...colours, React: ["#1d2026"] })}
                    onMouseOut={() => setColours({ ...colours, React: ["#80deea"] })}
                    colours={colours.React}
                    sx={buttonSx("#1d2026", "#fff")}
                />
            )
        case "JavaScript":
            return <Javascript sx={buttonSx("#ffd600", "#000", "#000", "#fff", "1.8")} />
        case "NextJS":
            return (
                <NextJs
                    onMouseOver={() => setColours({ ...colours, NextJs: ["#fff", "#000"] })}
                    onMouseOut={() => setColours({ ...colours, NextJs: ["#000", "#fff"] })}
                    colours={colours.NextJs}
                    sx={buttonSx("#fff", "#000")}
                />
            )
        case "C++":
            return (
                <CPlusPlus
                    onMouseOver={() => setColours({ ...colours, CPlusPlus: ["#5F5F5F", "#4B4B4B", "#7C7C7C", "#fff"] })}
                    onMouseOut={() => setColours({ ...colours, CPlusPlus: ["#5C8DBC", "#1A4674", "#1B598E", "#FFF"] })}
                    colours={colours.CPlusPlus}
                    sx={buttonSx("#1A4674")}
                />
            )
        case "Python":
            return (
                <Python
                    onMouseOver={() => setColours({ ...colours, Python: ["#5C5C5C", "#BFBFBF"] })}
                    onMouseOut={() => setColours({ ...colours, Python: ["#0277BD", "#FFC107"] })}
                    colours={colours.Python}
                    sx={buttonSx("#1f1f1f", "#fff")}
                />
            )
        case "Security":
            return <Security sx={buttonSx("#fff", "#fff5f5", "#990000")} />
        case "Tensorflow":
            return (
                <TensorFlow
                    onMouseOver={() => setColours({ ...colours, TensorFlow: ["#000"] })}
                    onMouseOut={() => setColours({ ...colours, TensorFlow: ["#ffb300"] })}
                    colours={colours.TensorFlow}
                    sx={buttonSx("#000", "#fff")}
                />
            )
        case "Artifical Intelligence":
            return (
                <ArtificialIntelligence
                    onMouseOver={() => setColours({ ...colours, ArtificialIntelligence: ["#ebffeb"] })}
                    onMouseOut={() => setColours({ ...colours, ArtificialIntelligence: ["#000"] })}
                    colours={colours.ArtificialIntelligence}
                    sx={buttonSx("#00FF00", "#000")}
                />
            )
        case "Raspberry Pi":
            return (
                <Rpi
                    onMouseOver={() => setColours({ ...colours, Rpi: ["#434343", "#A3A3A3", "#808080"] })}
                    onMouseOut={() => setColours({ ...colours, Rpi: ["#37474F", "#64DD17", "#FF4081"] })}
                    colours={colours.Rpi}
                    sx={buttonSx("#434343", "#fff")}
                />
            )
        case "AWS":
            return (
                <Aws
                    onMouseOver={() => setColours({ ...colours, Aws: ["#fff", "#A7A7A7"] })}
                    onMouseOut={() => setColours({ ...colours, Aws: ["#252f3e", "#f90"] })}
                    colours={colours.Aws}
                    sx={buttonSx("#fff", "#000", "#fff")}
                />
            )
        case "C":
            return (
                <C
                    onMouseOver={() => setColours({ ...colours, C: ["#5F5F5F", "#4B4B4B", "#fff", "#000"] })}
                    onMouseOut={() => setColours({ ...colours, C: ["#283593", "#5c6bc0", "#fff", "#3949ab"] })}
                    colours={colours.C}
                    sx={buttonSx("#5c6bc0")}
                />
            )
        case "HTML":
            return (
                <Html
                    onMouseOver={() => setColours({ ...colours, Html: ["#757575", "#8D8D8D", "#fff", "#EEE"] })}
                    onMouseOut={() => setColours({ ...colours, Html: ["#E65100", "#FF6D00", "#FFF", "#EEE"] })}
                    colours={colours.Html}
                    sx={buttonSx("#fff")}
                />
            )
        case "CSS":
            return (
                <Css
                    onMouseOver={() => setColours({ ...colours, Css: ["#5C5C5C", "#767676", "#fff", "#EEE"] })}
                    onMouseOut={() => setColours({ ...colours, Css: ["#0277BD", "#039BE5", "#FFF", "#EEE"] })}
                    colours={colours.Css}
                    sx={buttonSx("#fff")}
                />
            )
        case "PHP":
            return (
                <Php
                    onMouseOver={() => setColours({ ...colours, Php: ["#B0B3D6"] })}
                    onMouseOut={() => setColours({ ...colours, Php: ["#474A8A"] })}
                    colours={colours.Php}
                    sx={buttonSx("#FEDE00", null, "#8A8747")}
                />
            )
        case "Linux":
            return (
                <Linux
                    onMouseOver={() => setColours({ ...colours, Linux: ["#fff"] })}
                    onMouseOut={() => setColours({ ...colours, Linux: ["#000"] })}
                    colours={colours.Linux}
                    sx={buttonSx("#f5c500", "#434343")}
                />
            )
        case "Hadoop":
            return (
                <Hadoop
                    onMouseOver={() =>
                        setColours({
                            ...colours,
                            Hadoop: ["#E3E3E3", "#F6F6F6", "#B6B6B6", "#B6B6B6", "#424242", "#F9F9F9"],
                        })
                    }
                    onMouseOut={() =>
                        setColours({ ...colours, Hadoop: ["#ff0", "#fffdbb", "#cc0", "#c0ca33", "#424242", "#ffc"] })
                    }
                    colours={colours.Hadoop}
                    sx={buttonSx("#fffdbb")}
                />
            )
        case "Spark":
            return (
                <Spark
                    onMouseOver={() => setColours({ ...colours, Spark: ["#7C7C7C"] })}
                    onMouseOut={() => setColours({ ...colours, Spark: ["#e25a1c"] })}
                    colours={colours.Spark}
                    sx={buttonSx("#7C7C7C")}
                />
            )
        case "Stripe":
            return (
                <Stripe
                    onMouseOver={() => setColours({ ...colours, Stripe: ["#7C7C7C"] })}
                    onMouseOut={() => setColours({ ...colours, Stripe: ["#6772e5"] })}
                    colours={colours.Stripe}
                    sx={buttonSx("#fff")}
                />
            )
        case "Sanity.io":
            return (
                <SanityIo
                    onMouseOver={() => setColours({ ...colours, SanityIo: ["#7C7C7C"] })}
                    onMouseOut={() =>
                        setColours({ ...colours, SanityIo: ["#f37369", "#f68d85", "#f14939", "#ecedee"] })
                    }
                    colours={colours.SanityIo}
                    sx={buttonSx("#fff")}
                />
            )
        default:
            return <Firebase sx={buttonSx("#fff")} />
    }
}

const TagButton = memo(({ sx, ...props }) => {
    let tagIcon = GetTagInfo(props.type, sx)

    return (
        <Tooltip title={props.type} placement="top">
            <IconButton {...props} variant="contained">
                {tagIcon}
            </IconButton>
        </Tooltip>
    )
})

export default TagButton
