import { SvgIcon } from "@mui/material";

function Hadoop(props) {
    let colours = props.colours || ["#ff0", "#fffdbb", "#cc0", "#c0ca33", "#424242", "#ffc"];
    return (
        <SvgIcon {...props} viewBox="0 0 48 48">
            <path
                fill={colours[0]}
                fill-rule="evenodd"
                d="M17.071,14.306l-3.06,0.496l-2.792,1.222 l-2.371,1.489l-2.257,2.749L5.317,21.61l-1.233,0.454l-0.326-0.795l0.57-0.821l0.128-1.158l0.382,0.015l0.417,0.38l-0.113-1.18 l-0.462-0.31l0.014-0.45l-1.095,0.619l-0.992,1.168L2.4,20.576l0.424,0.836l0.396,1.421l0.805,0.38l0.846-0.041l0.803-0.466 l-0.535,2.711l0.535,3.016l-0.589,1.393l-1.93,2.076l0.343,1.24l0.914,1.437l1.724,1.211l0.915,0.125l1.017,0.034l-0.634,2.6 l2.333,0.954l2.907,0.382l0.994-0.649l0.077-1.756l1.109-1.833l0.076-1.451l2.677,0.191l2.486-0.229l-2.486,1.489l0.421,1.794 l1.568,2.443l1.53,0.649l1.224-0.496l0.497-0.993l2.562-1.947l0.497,0.42l4.016,0.153l0.803-0.649l0.076-1.145l-0.268-0.496 l-0.191-3.092l-1.339-2.672l0.229-1.184l0.803,0.42l2.257,2.1l1.109,0.076l1.224-0.496l1.224-0.916l0.612-1.985l3.595,0.229 l2.18-0.84l1.759-1.642l1.262-2.367l0.306-2.787l-0.268-3.245l-0.688-2.901l-0.688-0.916l-0.956-0.305l-1.683,1.833l-1.53,0.534 l-1.339-2.214l-1.339-1.222l-0.727-0.458l-2.907-2.405l-2.333-1.26l-2.333-0.191l-2.715,0.458l-2.371,0.878l-1.645,1.336l-1.3,1.565 l-1.339,0.382L17.071,14.306L17.071,14.306z"
                clip-rule="evenodd"
            />
            <path
                fill={colours[1]}
                fill-rule="evenodd"
                d="M8.198,21.197 c-2.621,3.051-2.039,6.752-1.312,10.378c-0.388-0.978-0.775-1.955-1.163-2.933c-0.143-0.896-0.286-1.792-0.428-2.689 c0.041-0.917,0.082-1.833,0.122-2.75c0.367-0.876,0.735-1.752,1.102-2.627c0.551-0.815,1.102-1.629,1.653-2.444 c0.857-0.713,1.714-1.426,2.571-2.139c0.939-0.387,1.877-0.774,2.816-1.161c1.102-0.143,2.204-0.285,3.305-0.428 c-1.02,1.161-2.04,2.322-3.061,3.483C11.345,18.683,9.895,19.219,8.198,21.197"
                clip-rule="evenodd"
            />
            <path
                fill={colours[1]}
                fill-rule="evenodd"
                d="M20.535 11.9c-1.822 1.774-2.817 3.113-3.977 5.19-.829 1.486-1.76 2.918-2.632 4.383-.441.742-.483 1.364-.615 2.219-.428-.509-.857-1.018-1.285-1.528.204-.611.408-1.222.612-1.833.694-1.242 1.387-2.485 2.081-3.727 1.469-1.446 2.938-2.892 4.407-4.338C19.597 12.144 20.066 12.022 20.535 11.9M29.534 7.5c-1.459.546-3.883.726-4.051 2.398-.12 1.187.09 1.784.807 3.04-1.771-1.829-2.209-1.546-5.631-.978.49-.693.979-1.385 1.469-2.078.857-.529 1.714-1.059 2.571-1.589 1.102-.244 2.204-.489 3.305-.733C28.513 7.541 29.024 7.521 29.534 7.5"
                clip-rule="evenodd"
            />
            <path
                fill={colours[2]}
                fill-rule="evenodd"
                d="M33.56,30.116 c0.486,0.299,0.475,0.516,0.394,0.721c0.383-0.153,0.766-0.306,1.15-0.459c0.248-0.333,0.497-0.665,0.745-0.998 c0.184-0.474,0.369-0.948,0.553-1.422c-0.236-0.177-0.471-0.353-0.706-0.53c-1.029,0.131-2.058,0.262-3.088,0.393 c-0.077,0.208-0.153,0.415-0.23,0.623c0.022,0.295,0.044,0.59,0.066,0.885c0.098,0.175,0.197,0.35,0.296,0.525 c0.153,0.077,0.307,0.153,0.46,0.23C33.32,30.094,33.44,30.105,33.56,30.116"
                clip-rule="evenodd"
            />
            <path
                fill={colours[3]}
                fill-rule="evenodd"
                d="M33.273 24.845c-1.548.446-1.536.569-1.993 2.102C31.884 25.98 32.33 25.492 33.273 24.845M43.564 13.375c-.275.127-.543.188-.715.439-.37.541-.688.996-1.3 1.375-.308.191-.627.315-.954.417-.271.084-.434.009-.665.175.137.024.274.048.411.072.302 0 .604 0 .906 0 .372-.23.745-.459 1.117-.689.219-.23.438-.459.657-.689C43.202 14.109 43.383 13.742 43.564 13.375M18.91 16.804c-.609 1.663-1.141 3.089-2.063 4.595 1.182-1.271 1.898-2.352 2.575-3.789.263-.558.313-1.213 1.045-.97.033.557.151 1.115.184 1.672.396-2.832 1.512-4.016 4.106-5.115-.734.088-1.467.175-2.201.262-.69.153-1.38.306-2.069.459-.339.492-.679.984-1.018 1.476C19.282 15.864 19.096 16.334 18.91 16.804M23.936 16.738c.559 2.628 1.365 5.151 1.715 7.821.227 1.735.252 2.569-.622 4.065-.956-.062-1.549.046-2.474.348-3.68 1.204-5.791 2.975-8.271-.593.792.372 1.583.745 2.375 1.117.564-.111 1.129-.221 1.693-.332.996-.579 1.993-1.159 2.989-1.738.777-.153 1.555-.306 2.332-.459.252-1.049.504-2.099.756-3.148-.186-1.388-.372-2.776-.558-4.164-.022-.656-.044-1.311-.066-1.967C23.848 17.372 23.892 17.055 23.936 16.738M30.276 33.001c-.309 2.135.712 3.283.289 3.873-.12.167-.282.458-.463.538-.647.285-1.536-.053-1.6.114-.712 0-1.423 0-2.135 0-.285-.12-.569-.241-.854-.361.438-.514.876-1.027 1.314-1.541.427-.929.854-1.858 1.281-2.787.274-.94.548-1.88.821-2.82.142 0 .285 0 .427 0C29.662 31.012 29.969 32.007 30.276 33.001"
                clip-rule="evenodd"
            />
            <path
                fill={colours[3]}
                fill-rule="evenodd"
                d="M26.687 26.793c.173.97.475 1.2.932 2.139-.304 1.531-.793 3.352-1.381 4.703-.248.57-.448.884-.885 1.324-.738.744-1.484 1.392-2.321 2.037-.602.464-1.023.231-1.766.126-.316.572-.403.89-.985 1.18-.895.447-1.696-.516-2.398-1.082.507.791 1.014 1.581 1.521 2.372.35.328.701.656 1.051.984.296.044.591.087.887.131.394-.241.788-.481 1.182-.721.208-.393.416-.787.624-1.18.438-.328.876-.656 1.314-.984.537-.459 1.073-.918 1.61-1.377.339-.481.679-.962 1.018-1.443.306-.568.613-1.137.92-1.705.394-1.18.788-2.361 1.183-3.541.033-.448.066-.896.098-1.344-.493-.219-.985-.437-1.478-.656C27.451 27.416 27.048 27.132 26.687 26.793M14.903 33.624c1.658 0 3.409-.092 4.927-.787.43-.644.854-1.169 1.38-1.738-.479.902-.629 1.412-.756 2.426-.164.24-.328.481-.493.721-1.248.033-2.496.066-3.745.098-.405-.044-.81-.087-1.215-.131-.044-.044-.088-.087-.131-.131C14.881 33.93 14.892 33.777 14.903 33.624M14.673 32.477c-.043-.388-.086-.776-.129-1.164-.283 1.702-.215 2.842-1 4.367-.586.678-1.308 1.295-2.134 1.625.07.418.091.679.05.986-.146 1.102-2.355.615-3.263.571 1.458.375 2.916.749 4.374 1.124.328-.131.657-.262.985-.393.11-.634.219-1.268.328-1.902.307-.568.613-1.137.92-1.705.055-.35.11-.7.164-1.049C14.87 34.116 14.772 33.296 14.673 32.477M12.209 22.87c-.046.827-.099 1.173.266 1.903.465.929 1.036 1.802 1.541 2.72.055-.612.109-1.224.164-1.836C13.523 24.728 12.866 23.798 12.209 22.87M5.466 29.121c-.142.302-.284.604-.427.906.391 1.316.739 2.149 1.484 3.299-.13.466-.227.67-.526 1.049-.656-.101-1.238-.13-1.903-.128.734.568 1.467 1.137 2.201 1.705.361-.066.723-.131 1.084-.197.361-.361.723-.721 1.084-1.082-.515-.798-1.029-1.596-1.544-2.394C6.436 31.227 5.951 30.174 5.466 29.121M43.569 12.94c.447 2.007 1.023 3.858.969 5.913-.066 2.521-.558 5.706-2.898 7.226-2.621 1.703-5.697.897-8.573.168 1.172.481 2.343.962 3.515 1.443 1.095.055 2.19.109 3.285.164.745-.219 1.489-.437 2.234-.656.58-.481 1.161-.962 1.741-1.443.438-.918.876-1.836 1.314-2.754.164-1.06.328-2.12.493-3.181-.131-1.038-.263-2.077-.394-3.115-.241-1.027-.482-2.055-.723-3.082C44.211 13.395 43.89 13.167 43.569 12.94M4.458 18.92c-1.19.773-1.657 1.112-1.527 2.545.119.429.237.858.356 1.287.168.113.336.227.504.34.208.069.415.138.623.207.375-.089.751-.178 1.127-.266.193-.597.385-1.194.578-1.79-.534.261-1.067.523-1.601.784-.124 0-.247 0-.371 0-.138-.212-.277-.424-.415-.636.168-.247.336-.493.504-.74.089-.469.178-.937.267-1.406.114.035.227.069.341.103.138.109.277.217.415.326-.02-.247-.04-.493-.059-.74-.094-.158-.188-.316-.282-.473-.094-.079-.188-.158-.282-.237C4.577 18.456 4.518 18.688 4.458 18.92M31.151 7.631c1.056.979 2.352 1.83 3.196 3.026.327.463.69.7-.006 1.354.735-.21 1.008-.187 1.596-.116 1.07.129 2.073 1.648 2.137 2.736-.013.102-.297.333-1.125.561-.016.032-.467-.062-.456-.031.086.235.201.271.376.381.038.261.063.664.241.95.521-.009 1.03.047 1.539.148.172.284.146.568.131.852.197-.033.394-.066.591-.098-.055-.448-.109-.896-.164-1.344.175-.295.35-.59.526-.885-.252-.568-.504-1.137-.756-1.705-.482-.459-.964-.918-1.445-1.377-.046-.002-.093-.005-.139-.007-.542-.332-1.084-.664-1.625-.996-.884-.722-1.767-1.443-2.651-2.165C32.463 8.487 31.807 8.059 31.151 7.631M32.93 15.71c-.056.097-.14.253-.248.36.44.415.657.693.814 1.281-.497.246-.994.493-1.492.739-.421.403-.841.805-1.262 1.208-.554-.298-.692-.526-.96-1.093-.312.082-.608.162-.865.067.163.001.264-.04.427-.14.268-.278.535-.555.803-.833.473-.357.946-.715 1.419-1.072.309-.101.619-.201.928-.302C32.613 15.876 32.812 15.759 32.93 15.71"
                clip-rule="evenodd"
            />
            <path
                fill={colours[3]}
                fill-rule="evenodd"
                d="M34.302 17.191c-1.582.85-3.097 1.705-3.906 3.32C30.397 18.461 32.458 17.559 34.302 17.191M30.083 13.159c-1.175.799-2.005 2.413-1.901 3.985-.383-1.361-.247-2.648.928-3.588.198-.096.396-.192.595-.289C29.83 13.232 29.957 13.196 30.083 13.159"
                clip-rule="evenodd"
            />
            <path
                fill={colours[4]}
                d="M21.397 13.389L21.3 13.398c-.643.06-.796.074-1.307.578-.811.801-1.57 3.507-1.794 4.482-.011.05.017.101.066.117.01.003.021.005.031.005.039 0 .075-.023.091-.06.053-.124.119-.279.193-.456.429-1.02 1.227-2.919 1.832-3.436.05-.043.096-.081.138-.115-.316.625-.265.95-.108 1.954.007.048.049.084.098.084 0 0 .001 0 .001 0 .049 0 .091-.037.097-.086.141-1.073.493-1.532 1.078-2.294l.122-.159c.732-.185 1.421-.407 2.166-.697.047-.018.073-.068.061-.117-.012-.049-.058-.078-.108-.075C23.113 13.219 22.251 13.309 21.397 13.389zM30.319 13.073c-.017-.048-.065-.075-.118-.063-1.978.495-2.626 1.305-2.309 2.89.009.046.05.08.096.08 0 0 .001 0 .001 0 .047 0 .087-.032.097-.078.204-.901.557-1.928 2.182-2.706C30.315 13.174 30.336 13.121 30.319 13.073zM34.292 17.092c-.364 0-.767.064-1.174.188-.024-.127-.065-.25-.121-.368-.142-.297-.373-.536-.662-.688.236-.132.484-.284.685-.466.036-.033.043-.088.016-.129-.027-.041-.081-.058-.125-.035-.297.137-.623.2-.939.26-.4.076-.813.155-1.156.387-.304.205-.665.649-1.014 1.079-.264.325-.537.661-.764.863-.036.032-.044.085-.019.126.025.041.077.057.121.041.295-.114.606-.298.969-.575.021.154.066.305.134.447.126.264.321.481.568.634-.173.244-.31.504-.409.776-.016.045.002.096.044.12.016.009.033.014.05.014.029 0 .056-.012.076-.035.958-1.133 2.375-2.047 3.79-2.443.048-.013.078-.06.072-.108-.006-.049-.048-.086-.097-.087C34.323 17.092 34.307 17.092 34.292 17.092z"
            />
            <path
                fill={colours[4]}
                d="M44.715,13.354c-0.225-0.43-0.917-0.868-1.512-0.957c-0.371-0.058-0.681,0.026-0.89,0.237 c-0.209,0.211-0.387,0.472-0.561,0.725c-0.204,0.297-0.415,0.604-0.668,0.82c-0.308,0.263-0.679,0.411-1.038,0.554l-0.081,0.033 c-0.278-0.715-0.67-1.346-1.297-2.092c-0.453-0.537-0.873-0.8-1.455-1.164c-0.789-0.493-1.446-1.068-2.141-1.676 c-0.297-0.26-0.604-0.529-0.922-0.791c-2.497-2.056-5.022-2.919-9.881-0.879c-1.891,0.795-2.793,1.857-3.938,3.383 c-0.687,0.041-1.181,0.19-1.918,0.839c-0.506,0.446-1.003,0.923-1.518,1.458c-3.638,0.58-5.935,1.274-8.374,3.433 c-0.936,0.828-1.677,1.786-2.267,2.929l-0.042,0.047c-0.485,0.535-0.986,1.087-1.631,1.336c-0.176,0.068-0.315,0.119-0.354,0.102 c-0.032-0.014-0.07-0.108-0.123-0.247c0.495-0.419,0.539-1.106,0.58-1.771l0.007-0.106c0.158,0.055,0.265,0.221,0.387,0.409 c0.057,0.088,0.116,0.179,0.183,0.263c0.024,0.03,0.064,0.044,0.1,0.035c0.037-0.009,0.067-0.038,0.075-0.075 c0.134-0.597,0.249-1.638-0.427-2.064c0.034-0.086,0.068-0.173,0.102-0.261c0.073-0.187,0.149-0.378,0.22-0.579 c0.012-0.034,0.005-0.07-0.018-0.097c-0.023-0.027-0.058-0.04-0.093-0.034c-0.703,0.122-2.717,1.339-3.14,2.719 c-0.192,0.627-0.037,1.193,0.461,1.683c0.125,0.507,0.219,0.826,0.375,1.15c0.432,0.895,1.358,1.051,2.143,0.81 c-0.2,1.01-0.229,2.096-0.101,3.586c0.031,0.363,0.084,0.742,0.157,1.125l-0.548,1.49L3.18,31.095 c-0.059,0.059-0.113,0.11-0.161,0.156c-0.398,0.383-0.478,0.487-0.368,1.147c0.157,0.932,0.612,1.797,1.317,2.503 c0.691,0.692,2.272,1.836,3.527,1.459c-0.107,0.354-0.235,0.695-0.382,1.016c-0.224,0.491-0.253,0.917-0.087,1.268 c0.338,0.71,1.391,0.983,2.32,1.225c0.11,0.029,0.218,0.057,0.322,0.085l0.127,0.034c0.979,0.266,2.802,0.762,3.74,0.224 c0.272-0.156,0.452-0.389,0.533-0.692c0.178-0.66,0.211-1.022,0.148-1.662c0.295-0.653,0.415-0.829,0.63-1.144l0.102-0.149 c0.416-0.616,0.386-0.864,0.297-1.609c-0.012-0.102-0.026-0.212-0.042-0.326c1.097,0.154,2.196,0.178,3.342,0.07 c-0.233,0.126-0.481,0.253-0.766,0.399l-0.127,0.065c-0.296,0.152-0.486,0.38-0.566,0.678c-0.217,0.814,0.418,1.938,0.994,2.826 C18.91,39.942,19.721,41,20.915,41c0.402,0,0.848-0.12,1.352-0.392c0.495-0.268,0.659-0.554,0.866-0.916 c0.07-0.122,0.149-0.26,0.248-0.409c0.187-0.115,0.733-0.565,1.311-1.041c0.228-0.188,0.454-0.375,0.649-0.533 c0.294,0.275,0.792,0.331,1.496,0.382c0.253,0.018,0.985,0.02,1.57,0.02c0.158,0,0.306,0,0.428,0c0.16,0,0.252,0,0.347,0.001 c1.092,0,1.865-0.136,1.961-1.479c0.045-0.619,0.013-0.771-0.28-1.294l-0.053-1.973c-0.02-0.761-0.167-1.234-0.466-1.947 c-0.102-0.241-0.186-0.468-0.269-0.691c-0.135-0.363-0.262-0.707-0.451-1.083c0.03-0.172,0.055-0.348,0.075-0.524l1.047,1.006 c0.724,0.696,1.354,1.302,2.465,1.302c0.049,0,0.099-0.001,0.15-0.003c1.29-0.061,2.676-1.084,3.026-2.233l0.327-1.075 c2.071,0.374,4.07,0.155,5.496-0.604c2.099-1.119,3.425-3.406,3.734-6.442C46.165,18.899,45.723,15.28,44.715,13.354z M4.793,18.786c0.002-0.006,0.003-0.013,0.005-0.019c0.071,0.078,0.112,0.182,0.138,0.309c-0.057-0.036-0.119-0.062-0.189-0.071 C4.759,18.925,4.775,18.853,4.793,18.786z M40.631,15.335c0.289-0.102,0.588-0.207,0.837-0.404 c0.309-0.243,0.562-0.568,0.808-0.882c0.181-0.232,0.368-0.472,0.572-0.669c0.116-0.112,0.251-0.148,0.413-0.116 c0.066,0.014,0.132,0.038,0.198,0.071c-0.506,0.994-1.264,1.761-2.197,2.221c-0.445,0.22-0.75,0.187-1.211,0.136 c-0.038-0.004-0.077-0.008-0.117-0.013C40.092,15.525,40.341,15.437,40.631,15.335z M3.494,22.458 c-0.164-0.341-0.259-0.683-0.382-1.126C3.108,21.316,3.1,21.302,3.088,21.29c-0.273-0.283-0.387-0.608-0.34-0.966 c0.104-0.793,0.931-1.561,1.528-1.984c-0.067,0.156-0.119,0.293-0.159,0.432c-0.101,0.347-0.116,0.674-0.13,0.991 c-0.026,0.575-0.05,1.071-0.593,1.505c-0.036,0.029-0.048,0.08-0.027,0.122c0.054,0.109,0.101,0.21,0.144,0.302 c0.311,0.668,0.462,0.884,1.345,0.53c0.245-0.098,0.475-0.226,0.696-0.388c-0.083,0.228-0.162,0.464-0.239,0.706 c-0.015,0.045-0.028,0.09-0.042,0.136C4.729,22.897,3.821,23.14,3.494,22.458z M7.549,35.203c-0.129,0.173-0.302,0.264-0.528,0.279 c-0.022,0.001-0.044,0.002-0.067,0.002c-0.777,0-1.883-0.859-2.281-1.264c-0.558-0.569-0.927-1.246-1.013-1.856 c-0.053-0.38-0.033-0.4,0.217-0.649l1.41-1.424c0.01-0.01,0.017-0.022,0.022-0.035l0.187-0.499 c0.621,1.997,1.589,3.696,2.315,4.796C7.755,34.783,7.688,35.02,7.549,35.203z M29.958,33.379l0.06,2.114 c0,0.016,0.005,0.032,0.013,0.047c0.219,0.384,0.246,0.449,0.209,0.871c-0.076,0.854-0.327,0.898-1.098,0.876 c-0.085-0.001-0.227-0.003-0.401-0.005c-0.566-0.006-1.515-0.016-1.797-0.04c-0.382-0.033-0.645-0.066-0.81-0.129 c0.856-0.752,2.151-3.077,2.416-3.913c0.118-0.371,0.241-0.722,0.361-1.065c0.137-0.393,0.268-0.77,0.386-1.153 c0.072,0.244,0.148,0.495,0.259,0.759C29.825,32.376,29.94,32.745,29.958,33.379z M45.073,21.033 c-0.216,1.997-1.181,4.54-3.242,5.687c-2.429,1.354-5.23,0.593-7.891-0.302c-0.45-0.152-0.782-0.363-1.167-0.608l-0.184-0.117 c-0.034-0.021-0.078-0.021-0.11,0.003c-0.033,0.023-0.049,0.064-0.04,0.103c0.153,0.686,0.158,1.227,0.018,1.702 c-0.198,0.667-0.497,1.674-0.13,2.297c0.15,0.254,0.397,0.422,0.735,0.496c0.499,0.111,0.731,0.089,1.414-0.262 c0.044-0.023,0.065-0.075,0.048-0.122c-0.017-0.047-0.069-0.075-0.115-0.063c-0.529,0.119-0.783,0.087-1.137,0.023 c-0.164-0.031-0.294-0.102-0.392-0.219c0.103,0.031,0.227,0.061,0.379,0.097c0.931,0.222,1.883-0.199,2.079-0.925 c0.033-0.124,0.054-0.229,0.074-0.332c0.036-0.186,0.071-0.362,0.181-0.642c0.13,0.039,0.265,0.076,0.402,0.11l-0.31,1.007 c-0.271,0.882-1.352,1.644-2.325,1.644c-0.011,0-0.021,0-0.032,0c-0.839-0.015-1.397-0.513-1.988-1.04l-0.124-0.11 c-0.445-0.395-0.873-0.774-1.299-1.149c-0.01-0.009-0.022-0.016-0.035-0.02c-1.271-0.401-2.154-0.844-3.15-1.58 c-0.041-0.031-0.098-0.025-0.132,0.012s-0.035,0.094-0.003,0.133c0.784,0.919,1.314,1.412,2.334,1.849 c-0.119,1.108-0.436,2.02-0.771,2.984c-0.132,0.379-0.268,0.772-0.399,1.191c-0.214,0.69-1.892,3.408-2.32,3.655 c-0.169,0.097-0.742,0.558-1.349,1.045c-0.623,0.5-1.268,1.017-1.463,1.133c-0.011,0.006-0.021,0.015-0.029,0.026 c-0.076,0.102-0.151,0.213-0.226,0.326c-0.209,0.315-0.425,0.64-0.729,0.8c-1.261,0.665-2.073-0.62-2.789-1.754 c-0.585-0.929-0.828-1.601-0.722-1.998c0.036-0.136,0.115-0.235,0.24-0.301c0.698-0.369,1.103-0.635,1.776-1.076l0.083-0.054 c0.056,0.085,0.121,0.168,0.183,0.249c0.069,0.089,0.14,0.18,0.195,0.27c0.024,0.04,0.073,0.057,0.118,0.042 c0.044-0.016,0.071-0.06,0.066-0.106l-0.084-0.671c-0.046-0.37-0.05-0.684-0.016-1.122l0.093-1.185 c0.004-0.051-0.031-0.097-0.082-0.106c-0.05-0.011-0.099,0.021-0.113,0.071c-0.056,0.195-0.142,0.396-0.226,0.591 c-0.086,0.2-0.175,0.407-0.241,0.636c-0.035,0.122-0.067,0.231-0.088,0.331c-1.675,0.334-3.302,0.354-4.974,0.065 c-0.106-0.61-0.234-1.243-0.345-1.709c-0.011-0.048-0.057-0.086-0.105-0.076c-0.049,0.004-0.088,0.044-0.091,0.093 c-0.024,0.379-0.02,1.231-0.017,1.982c0.001,0.312,0.003,0.607,0.002,0.848c-0.002,0.646-0.032,0.834-0.344,1.347 c-0.091,0.151-0.167,0.267-0.24,0.377c-0.169,0.259-0.329,0.504-0.634,1.11c-0.008,0.016-0.012,0.034-0.01,0.051 c0.037,0.565,0.031,0.899-0.105,1.38c-0.08,0.282-0.598,0.652-3.172-0.051l-0.212-0.056c-0.589-0.153-1.479-0.386-1.718-0.854 c-0.081-0.159-0.082-0.334-0.003-0.536c0.357-0.914,0.587-1.87,0.768-3.198c0.003-0.025-0.003-0.05-0.017-0.07 c-1.661-2.388-2.788-5.142-3.016-7.368c-0.191-1.869-0.096-3.075,0.338-4.3c0.737-2.079,1.716-3.605,3.082-4.802 c1.859-1.628,3.6-2.395,6.569-2.875c-0.505,0.57-1.007,1.163-1.536,1.786l-0.471,0.554c-0.802,0.943-1.284,1.919-1.751,2.863 c-0.708,1.434-0.664,2.007,0.247,3.228c0.103,0.138,0.199,0.265,0.29,0.386c0.583,0.771,0.938,1.24,1.226,2.09 c-0.279,0.587-0.379,1.089-0.47,1.855c-0.003,0.029,0.006,0.057,0.025,0.079c0.977,1.066,1.688,1.781,2.646,2.008 c0.987,0.234,1.751,0.16,2.554-0.25c0.369-0.188,0.737-0.39,1.094-0.586c1.433-0.787,2.787-1.53,4.389-1.569 c0.039-0.001,0.075-0.025,0.09-0.062c0.957-2.349,0.853-4.319,0.401-6.554c-0.297-1.473-0.426-2.876-0.528-4.529 c-0.003-0.049-0.041-0.088-0.09-0.093c-0.052-0.006-0.094,0.028-0.105,0.076c-0.396,1.662-0.449,3.1-0.172,4.663 c0.33,1.858,0.604,3.978-0.307,5.646c-1.451,0.126-2.757,0.852-4.02,1.555c-0.345,0.192-0.702,0.39-1.056,0.574 c-0.617,0.32-1.283,0.374-2.033,0.169c-0.634-0.174-1.077-0.585-1.818-1.436c-0.005-0.82,0.187-1.199,0.565-1.943 c0.653-1.285,1.391-2.499,2.092-3.619c0.028-0.045,0.016-0.103-0.026-0.134c-0.042-0.03-0.102-0.023-0.135,0.017 c-0.243,0.293-0.482,0.573-0.716,0.847c-0.627,0.734-1.222,1.429-1.747,2.209c-0.217-0.54-0.499-0.906-0.904-1.434 c-0.121-0.157-0.251-0.327-0.394-0.521c-0.648-0.877-0.684-1.224-0.224-2.188l0.052-0.109c0.471-0.986,0.878-1.837,1.674-2.695 c0.562-0.606,1.116-1.25,1.652-1.874c0.849-0.987,1.727-2.008,2.689-2.942c0.748-0.727,1.081-0.774,1.968-0.902l0.319-0.047 c0.997-0.151,2.006-0.345,3.086-0.596c0.051-0.012,0.084-0.061,0.076-0.113c-0.008-0.051-0.055-0.093-0.107-0.083 c-0.906,0.084-1.779,0.121-2.792,0.149c0.851-1.083,1.43-1.76,2.942-2.415c3.71-1.609,6.166-1.946,9.293,0.678 c0.225,0.188,0.441,0.375,0.654,0.559c0.479,0.413,0.934,0.806,1.43,1.175c-0.216,0.035-0.417,0.092-0.646,0.182 c-0.048,0.019-0.073,0.071-0.059,0.12c0.015,0.05,0.066,0.083,0.114,0.07c0.372-0.069,0.811-0.004,1.231,0.072 c0.113,0.073,0.229,0.145,0.349,0.214l0.027,0.016c0.547,0.322,0.848,0.499,1.212,1.005c0.355,0.494,0.658,0.99,0.921,1.51 c-0.099-0.034-0.187-0.064-0.264-0.086c-0.121-0.055-0.248-0.09-0.379-0.102c-0.257-0.024-0.514,0.034-0.723,0.164l-0.027,0.013 c-0.287,0.139-0.768,0.316-1.094,0.369c-0.045,0.007-0.079,0.044-0.083,0.09c-0.004,0.045,0.024,0.087,0.067,0.102 c0.135,0.046,0.413,0.077,0.627,0.045c-0.033,0.091-0.053,0.186-0.063,0.284c-0.022,0.226,0.021,0.453,0.125,0.654 c0.014,0.032,0.029,0.062,0.046,0.09c-0.11,0.043-0.222,0.089-0.336,0.139c-0.046,0.02-0.07,0.071-0.056,0.119 c0.014,0.048,0.058,0.083,0.111,0.07c0.719-0.109,1.334-0.123,1.983-0.044c0.035,0.167,0.069,0.34,0.102,0.516l-0.136,0.011 c-0.372-0.275-0.794-0.207-1.267-0.101c-1.122,0.255-1.291,0.78-1.526,1.505c-0.102,0.315-0.217,0.671-0.433,1.068 c-0.024,0.045-0.011,0.102,0.032,0.13c0.042,0.027,0.1,0.021,0.132-0.019c0.256-0.313,0.422-0.634,0.568-0.918 c0.287-0.558,0.513-0.999,1.266-1.177c0.077-0.018,0.147-0.037,0.213-0.056c0.001,0,0.003,0,0.005-0.001 c-0.201,0.171-0.352,0.378-0.428,0.593c-0.164,0.461-0.199,0.886-0.234,1.297c-0.036,0.436-0.071,0.848-0.252,1.283 c-0.02,0.049,0,0.104,0.048,0.128c0.047,0.022,0.105,0.006,0.13-0.04c0.248-0.429,0.372-0.858,0.492-1.273 c0.102-0.353,0.208-0.717,0.389-1.087c0.14-0.284,0.649-0.71,0.922-0.715l0.183-0.004c0.081,0.554,0.108,0.996,0.083,1.349 c-0.058,0.8-0.265,1.948-0.377,2.355c-0.012,0.046,0.009,0.094,0.052,0.115c0.043,0.022,0.095,0.009,0.123-0.028 c0.357-0.459,0.542-1.311,0.705-2.062c0.029-0.134,0.057-0.263,0.085-0.385c0.171-0.746,0.163-1.704-0.023-2.697 c-0.042-0.226-0.03-0.395,0.025-0.527c0.102,0.03,0.198,0.061,0.29,0.091c0.449,0.146,0.836,0.271,1.365,0.082 c1.103-0.393,1.819-1.241,2.187-2.591c0.207,0.156,0.384,0.377,0.462,0.565C44.874,15.872,45.299,18.953,45.073,21.033z"
            />
            <path
                fill={colours[4]}
                d="M32.77,24.84c-0.176,0.034-0.353,0.068-0.48,0.089c-0.715,0.12-0.82,0.311-0.931,1.011 c-0.024,0.153-0.053,0.324-0.082,0.496c-0.03,0.174-0.059,0.349-0.083,0.505c-0.008,0.051,0.023,0.099,0.073,0.112 c0.008,0.002,0.017,0.003,0.025,0.003c0.041,0,0.078-0.025,0.093-0.065c0.174-0.466,0.314-0.81,0.437-1.082 c0.139-0.302,0.207-0.339,0.495-0.494l0.057-0.031c0.118-0.065,0.29-0.143,0.457-0.22c0.17-0.078,0.345-0.158,0.469-0.226 c0.043-0.023,0.062-0.074,0.047-0.12c-0.016-0.046-0.061-0.073-0.111-0.066C33.114,24.774,32.942,24.807,32.77,24.84z"
            />
            <path
                fill={colours[5]}
                fill-rule="evenodd"
                d="M30.61 18.509c-.141-.295-.015-.65.281-.79.296-.141.652-.015.793.28.013.028.024.057.033.085-.283.209-.542.456-.759.742C30.812 18.767 30.682 18.66 30.61 18.509M37.221 15.956c.024-.244.232-.424.477-.4.244.024.425.242.401.486-.005.052-.019.101-.04.146-.224.038-.448.104-.678.188C37.284 16.276 37.208 16.097 37.221 15.956"
                clip-rule="evenodd"
            />
        </SvgIcon>
    );
}

export default Hadoop;
