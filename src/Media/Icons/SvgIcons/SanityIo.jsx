import { SvgIcon } from "@mui/material"

function SanityIo(props) {
    let colours = props.colours || ["#f37369", "#f68d85", "#f14939", "#ecedee"]
    return (
        <SvgIcon {...props} viewBox="100 0 400 315">
            <svg>
                <path
                    fill={colours[0]}
                    stroke="none"
                    d="M252 111C254.69 100.082 256.98 90.1672 266.039 82.4676C289.011 62.9431 333.829 68.2265 343 100L396 100C390.889 81.9898 384.325 65.0267 369.999 52.1736C334.301 20.1448 261.371 16.9503 228.189 55.0038C214.38 70.84 235.427 105.411 252 111z"
                />
                <path fill={colours[1]} stroke="none" d="M336 33L337 34L336 33z" />
                <path
                    fill={colours[2]}
                    stroke="none"
                    d="M223 62C218.026 72.6542 211.591 82.8552 211.039 95C210.546 105.876 210.707 116.563 214.029 127C237.127 199.586 355.458 154.73 379.251 227C381.76 234.623 382.934 242.992 383 251L384 251C390.187 241.649 394.639 231.97 397.112 221C398.754 213.718 398.289 205.435 397.961 198C396.822 172.221 377.623 152.408 355 142.72C320.724 128.041 279.703 130.064 248 108.66C237.506 101.576 229.838 90.0965 226.428 78C224.957 72.7803 225.214 66.9318 223 62M286 72L287 73L286 72z"
                />
                <path fill={colours[1]} stroke="none" d="M334 84L335 85L334 84M257 92L258 93L257 92z" />
                <path
                    fill={colours[0]}
                    stroke="none"
                    d="M308 179L309 180L308 179M354 197C353.199 235.799 305.952 249.578 276 232.123C270.128 228.701 265.329 223.728 261.711 218C259.783 214.947 258.619 209.456 254.786 208.318C240.124 203.962 218.341 208 203 208C207.209 228.395 216.673 247.153 233 260.535C270.057 290.912 343.661 293.583 377.906 256.985C384.096 250.37 382.136 245.073 380.754 237C377.941 220.57 369.511 204.727 354 197z"
                />
                <path
                    fill={colours[1]}
                    stroke="none"
                    d="M355 197L356 198L355 197M357 198L358 199L357 198M358 199L359 200L358 199M359 200L360 201L359 200M361 201L362 202L361 201M362 202L363 203L362 202M363 203L364 204L363 203M364 204L365 205L364 204M365 205L366 206L365 205M366 206L367 207L366 206M367 207L368 208L367 207M352 208L353 209L352 208M368 208L369 209L368 208z"
                />
                <path fill={colours[3]} stroke="none" d="M369 209L370 210L369 209z" />
                <path fill={colours[1]} stroke="none" d="M370 211L371 212L370 211M371 212L372 213L371 212z" />
                <path fill={colours[1]} stroke="none" d="M373 215L374 216L373 215z" />
                <path fill={colours[1]} stroke="none" d="M374 217L375 218L374 217z" />
                <path fill={colours[1]} stroke="none" d="M375 219L376 220L375 219z" />
                <path fill={colours[1]} stroke="none" d="M376 221L377 222L376 221z" />
                <path fill={colours[1]} stroke="none" d="M377 223L378 224L377 223z" />

                <path fill={colours[1]} stroke="none" d="M208 226L209 227L208 226M378 226L379 227L378 226z" />
                <path fill={colours[3]} stroke="none" d="M379 228L380 229L379 228z" />
                <path fill={colours[1]} stroke="none" d="M379 229L380 230L379 229z" />

                <path fill={colours[1]} stroke="none" d="M380 233L380 236L381 236L380 233z" />
                <path fill={colours[3]} stroke="none" d="M381 237L382 238L381 237z" />
                <path fill={colours[1]} stroke="none" d="M381 238L381 242L382 242L381 238z" />
                <path fill={colours[1]} stroke="none" d="M382.333 246.667L382.667 247.333L382.333 246.667z" />
            </svg>
        </SvgIcon>
    )
}

export default SanityIo
