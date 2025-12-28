import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Skill {
  name: string;
  color: string;
  icon: React.ReactNode;
}

// Compact SVG Icons optimized for mobile
const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
  </svg>
);

const SpringIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
    <path d="M21.8 5.4c-1.3 1.8-2.8 3.4-4.4 4.9.4 1.2.6 2.5.6 3.7 0 5.5-4.5 10-10 10S2 19.5 2 14 6.5 4 12 4c1.3 0 2.5.3 3.7.8 1.5-1.6 3.1-3.1 4.9-4.4.3-.2.7-.2.9.1.2.3.2.7-.1.9-.1.1-3.2 2.4-5.2 4.2C19.5 7.8 21 10.7 21 14c0 .6 0 1.2-.1 1.8 1.2-1.2 2.2-2.5 3.1-4 .2-.3.6-.4.9-.2.3.2.4.6.2.9-.8 1.3-1.8 2.5-2.8 3.6-.4 1.9-1.2 3.6-2.4 5-.2.3-.6.3-.9.1-.3-.2-.3-.6-.1-.9.9-1.1 1.6-2.4 2-3.8-.8.7-1.7 1.2-2.7 1.6-.3.1-.6 0-.8-.3-.1-.3 0-.6.3-.8 1.8-.7 3.3-1.9 4.4-3.5.1-.5.1-1 .1-1.5 0-2.7-1.2-5.1-3-6.8-1.2 1-2.5 1.9-3.9 2.6-.3.1-.6 0-.8-.3-.1-.3 0-.6.3-.8 1.2-.6 2.3-1.3 3.3-2.1-1-.4-2.1-.6-3.2-.6-4.4 0-8 3.6-8 8s3.6 8 8 8c3.8 0 7-2.6 7.8-6.2.1-.3.4-.5.7-.5.4.1.6.4.5.8-.3 1.2-.8 2.4-1.5 3.4.8-.3 1.6-.8 2.3-1.3.2-.2.6-.1.8.1.2.2.1.6-.1.8-1.3 1-2.8 1.7-4.4 2.1-1.5 1-3.4 1.6-5.4 1.6-5.5 0-10-4.5-10-10S6.5 2 12 2c1.6 0 3.1.4 4.5 1 1.3-1.1 2.8-2.1 4.3-2.9.3-.2.7-.1.9.2.2.3.1.7-.2.9-.8.5-1.6 1-2.4 1.6.4.3.7.6 1.1.9.2.2.2.6 0 .8-.2.2-.6.2-.8 0-.3-.3-.7-.6-1.1-.9-.7.5-1.3 1-2 1.5.3.3.6.6.8.9.2.2.1.6-.1.8-.2.2-.6.1-.8-.1-.2-.3-.5-.5-.7-.8-.6.5-1.2.9-1.8 1.3-.3.2-.6.1-.8-.2-.2-.3-.1-.6.2-.8.5-.3 1-.7 1.5-1.1-.3-.3-.5-.6-.8-.9-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0 .2.3.5.5.7.8.6-.4 1.1-.9 1.6-1.3-.2-.2-.4-.5-.6-.7-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0 .2.2.4.4.5.6.5-.4.9-.8 1.4-1.2z" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
    <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4836a9.508 9.508 0 0 0-3.6538-.7179c-1.3569 0-2.5881.3393-3.6658.9549-1.1617-.5765-3.0608-.8826-4.7257-.1123C.9552 1.4592-.2722 3.7126.0727 6.9795c.1583 1.4988.6871 3.9469 1.5019 5.918.2036.4927.4252.9647.6644 1.4013.8101 1.4794 1.7569 2.2346 2.8167 2.2346.4143 0 .8209-.1193 1.2036-.3485.7108-.4257 1.2609-.9333 1.6464-1.4944.1760.2563.4318.4916.7665.6979.4106.2531.8992.4311 1.4326.5198-.0915 1.1285-.2222 2.1494-.3912 2.8998-.1923.8551-.4364 1.9498-.9976 2.6667-.0738.0942-.0675.2309.0141.3177.0615.0653.1463.0995.2318.0995.0511 0 .1026-.0125.1495-.0386.5023-.2793 1.0205-.6591 1.5474-1.1362.5387-.4878 1.0619-.9994 1.5606-1.5247 1.0282-1.0821 1.9614-2.2397 2.7783-3.4481.6149-.909 1.0894-1.7959 1.4105-2.6365l.0673.0046c.6309.0345 1.3017-.0563 1.9939-.269 1.3689-.4201 2.1515-.9343 2.3263-1.5287.0323-.1099.0236-.2242-.0256-.3254zm-2.4623 1.0478c-.5296.1628-1.1019.2523-1.7009.2656-.1816.004-.3527.0059-.5133.0059-.1988 0-.3881-.0029-.5673-.0089l-.3959-.0142.1074.3798c.0394.1398.0737.2645.1028.3862.3464-.0594.7193-.0934 1.1077-.0934.9073 0 1.7051.1949 2.2566.5499-.4123.0984-1.0433.1893-1.8436.1893-.7914 0-1.6325-.0911-2.4354-.2637-.0535-.0115-.1077-.0211-.1613-.0304-.8168-.1402-1.4704-.4176-1.8652-.7902-.1682-.1587-.2834-.3242-.3447-.4937.0643-.0106.1325-.0215.2064-.0328.9079-.1397 1.5307-.2353 1.9995-.3862.4744-.1528.9215-.3571 1.2989-.5929a.2757.2757 0 0 0 .1204-.1822.2699.2699 0 0 0-.0469-.2082.2818.2818 0 0 0-.3885-.0732c-.3334.209-.7295.3952-1.1582.5442-.4401.1528-1.0012.2584-1.8304.3898-.0932.0148-.1784.0272-.2553.0392a3.3503 3.3503 0 0 1-.0546-.8944c.0127-.5627.1243-1.0936.3315-1.5791.1938-.454.4755-.8668.8373-1.2277.5739-.5723 1.4292-.9933 2.5459-1.2532.2744-.0639.5555-.1164.8426-.1577-.9194 3.0716-2.0479 5.4095-3.176 6.5868-.2153.2247-.4349.4324-.6568.6222a.2767.2767 0 0 0-.0578.0499.2707.2707 0 0 0-.0427.305.2778.2778 0 0 0 .2496.1567c.0574 0 .1142-.0175.163-.0532.2607-.1914.5186-.4023.7713-.6316l.0296-.027c.3485.0629.705.1056 1.063.1274a9.8435 9.8435 0 0 0 .5547.0177c.4346 0 .8543-.0424 1.2484-.1264.2778-.0593.5317-.1345.758-.2243.0093.0403.0122.0853.008.1345-.0384.4583-.4029.8652-1.0839 1.2105zM1.5968 7.2633c-.0932-.8829-.1271-1.7339-.0998-2.5245.0311-.9002.1607-1.5846.3854-2.0331.3917-.7823 1.0737-1.2251 2.0265-1.3151 1.6234-.1533 3.2528.4219 4.0175.8945-.0443.023-.0883.0455-.1313.0691-2.0105 1.0978-3.3724 3.0929-3.6156 5.298-.0687.6233-.0619 1.2883.0192 1.9749.0324.2744.0768.5467.1324.815-1.3156-1.1146-2.3665-2.7633-2.7343-4.1789zm3.3809 3.0509c.0427-.6698.1842-1.319.4203-1.9287.2666-.6872.6495-1.3133 1.1376-1.8611.0032.0039.0065.0079.0098.0118.3915.4664.8603.8565 1.3876 1.1562.3527.2006.4952.5799.3381.8995a.8037.8037 0 0 1-.1012.1595c-.3947.4973-.8051 1.0106-1.2217 1.5273-.3805.472-.7627.9424-1.1317 1.3934a3.6905 3.6905 0 0 1-.8388-1.3579zm.7077 3.9983c-.0954-.1426-.183-.2894-.2627-.4388-.0063-.0118-.0123-.0238-.0185-.0357a18.2194 18.2194 0 0 1-.6223-1.2924c-.201-.4713-.3867-.9646-.5518-1.4671.296.3818.6178.7484.9626 1.0937.2107.2109.4313.4108.6596.5987.2107.1737.4369.3371.6766.4895.2402.1528.4926.2886.7558.4068-.1839.2385-.399.4722-.6436.7006a5.6971 5.6971 0 0 1-.9557.7447zm5.6811-.8149c-.2717.178-.5662.3353-.8772.4685-.3112.1335-.6436.2438-.9897.3289-.2172.0534-.4407.0942-.6689.1215-.2281.0271-.4617.0408-.6985.0408a6.7376 6.7376 0 0 1-1.4063-.1466c.1245-.2106.2363-.4317.335-.6616.1045-.2434.1898-.4959.2559-.7552.068-.2663.115-.5406.1408-.8203.0259-.2801.0308-.5645.0154-.8515a8.8124 8.8124 0 0 1-.0087-.2279c.0376.0126.0753.0248.1133.0365.5762.1779 1.2118.2916 1.8904.3379l.0457.0031c.0182.0029.0367.0053.0554.0075a6.0721 6.0721 0 0 0 .6568.0477c.7007.0237 1.3629-.0451 1.9622-.2043.0217-.0058.0429-.0113.0642-.0171.0093.1686.0103.3396.0027.5117-.0095.214-.0362.4236-.0798.6265-.0437.2027-.1038.3997-.18.5891-.2003.4981-.5054.9491-.9087 1.3418z" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
  </svg>
);

const skills: Skill[] = [
  { name: 'Java', color: '#f89820', icon: <JavaIcon /> },
  { name: 'Spring', color: '#6db33f', icon: <SpringIcon /> },
  { name: 'React', color: '#61dafb', icon: <ReactIcon /> },
  { name: 'TypeScript', color: '#3178c6', icon: <TypeScriptIcon /> },
  { name: 'AWS', color: '#ff9900', icon: <AWSIcon /> },
  { name: 'PostgreSQL', color: '#336791', icon: <PostgreSQLIcon /> },
  { name: 'Git', color: '#f05032', icon: <GitIcon /> },
  { name: 'Docker', color: '#2496ed', icon: <DockerIcon /> },
];

// Responsive size configurations
const useResponsiveSizes = () => {
  return useMemo(() => ({
    // Mobile sizes
    mobile: {
      container: 280,
      outerRadius: 110,
      innerRadius: 60,
      nodeSize: 40,
      sunSize: 80,
      sunRayLength: 12,
      sunRayOffset: 32,
    },
    // Tablet sizes (sm breakpoint)
    tablet: {
      container: 340,
      outerRadius: 130,
      innerRadius: 75,
      nodeSize: 48,
      sunSize: 100,
      sunRayLength: 16,
      sunRayOffset: 42,
    },
    // Desktop sizes (md breakpoint)
    desktop: {
      container: 420,
      outerRadius: 160,
      innerRadius: 95,
      nodeSize: 56,
      sunSize: 128,
      sunRayLength: 20,
      sunRayOffset: 56,
    },
  }), []);
};

interface SkillNodeProps {
  skill: Skill;
  angle: number;
  radius: number;
  orbitDuration: number;
  reverse: boolean;
  index: number;
  nodeSize: number;
}

// Starfield background component
const Starfield = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground/80"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Shooting stars */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            x: [0, 80],
            y: [0, 40],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 4 + 2,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeOut",
          }}
        >
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-l from-primary/80 to-transparent"
            style={{ width: 30 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

const SkillNode = ({ skill, angle, radius, orbitDuration, reverse, index, nodeSize }: SkillNodeProps) => {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  const halfNode = nodeSize / 2;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ 
        x: x - halfNode,
        y: y - halfNode,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.08, duration: 0.4, type: "spring", stiffness: 200 }}
    >
      <motion.div
        animate={{ rotate: reverse ? 360 : -360 }}
        transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
        className="group relative"
      >
        <motion.div 
          className="rounded-xl backdrop-blur-md border border-border/50 flex items-center justify-center cursor-pointer transition-all duration-300"
          style={{ 
            width: nodeSize,
            height: nodeSize,
            background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
            boxShadow: `0 0 15px ${skill.color}20, inset 0 0 15px ${skill.color}10`,
            color: skill.color,
          }}
          whileHover={{ 
            scale: 1.15, 
            boxShadow: `0 0 25px ${skill.color}40, inset 0 0 15px ${skill.color}20`,
            borderColor: skill.color,
          }}
        >
          {skill.icon}
        </motion.div>
        
        {/* Tooltip - hidden on mobile for cleaner look */}
        <div className="hidden sm:block absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
          <span 
            className="text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap border border-border/50"
            style={{ 
              background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
              color: skill.color,
            }}
          >
            {skill.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface OrbitRingProps {
  radius: number;
  duration: number;
  reverse?: boolean;
  skills: Skill[];
  startIndex?: number;
  nodeSize: number;
}

const OrbitRing = ({ 
  radius, 
  duration, 
  reverse = false, 
  skills: orbitSkills,
  startIndex = 0,
  nodeSize
}: OrbitRingProps) => {
  const angleStep = 360 / orbitSkills.length;

  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {/* Orbit path */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ 
          width: radius * 2, 
          height: radius * 2,
          border: '1px solid',
          borderColor: 'hsl(var(--primary) / 0.12)',
          background: 'radial-gradient(circle, transparent 60%, hsl(var(--primary) / 0.02) 100%)',
        }}
      />
      
      {/* Orbit glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ 
          width: radius * 2 + 4, 
          height: radius * 2 + 4,
          background: `conic-gradient(from 0deg, transparent 0%, hsl(var(--primary) / 0.08) 25%, transparent 50%, hsl(var(--accent) / 0.08) 75%, transparent 100%)`,
          filter: 'blur(2px)',
        }}
        animate={{ rotate: reverse ? 360 : -360 }}
        transition={{ duration: duration * 2, repeat: Infinity, ease: "linear" }}
      />
      
      {orbitSkills.map((skill, index) => (
        <SkillNode
          key={skill.name}
          skill={skill}
          angle={index * angleStep}
          radius={radius}
          orbitDuration={duration}
          reverse={reverse}
          index={startIndex + index}
          nodeSize={nodeSize}
        />
      ))}
    </motion.div>
  );
};

// Central Sun Component - TR
const CenterSun = ({ size, rayLength, rayOffset }: { size: number; rayLength: number; rayOffset: number }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 150 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Corona layers */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size + 48,
            height: size + 48,
            background: 'radial-gradient(circle, hsl(45 100% 60% / 0.12) 0%, hsl(35 100% 50% / 0.04) 50%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Inner heat glow */}
        <motion.div
          className="absolute rounded-full blur-lg"
          style={{
            width: size + 24,
            height: size + 24,
            background: 'radial-gradient(circle, hsl(45 100% 65% / 0.35) 0%, hsl(25 100% 50% / 0.15) 50%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        
        {/* Sun body */}
        <div 
          className="relative rounded-full p-[2px] sm:p-[3px]" 
          style={{
            width: size,
            height: size,
            background: 'linear-gradient(135deg, hsl(45 100% 60%), hsl(35 100% 50%), hsl(25 100% 45%))',
            boxShadow: `0 0 ${size * 0.4}px hsl(40 100% 50% / 0.5), 0 0 ${size * 0.7}px hsl(35 100% 45% / 0.3), inset 0 0 ${size * 0.2}px hsl(50 100% 70% / 0.3)`,
          }}
        >
          <div 
            className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 30% 30%, hsl(50 100% 75%), hsl(45 100% 60%) 40%, hsl(35 100% 50%) 70%, hsl(25 100% 40%))',
            }}
          >
            {/* Surface texture */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-25"
              style={{
                background: 'radial-gradient(circle at 60% 40%, hsl(55 100% 80% / 0.5) 0%, transparent 30%), radial-gradient(circle at 30% 70%, hsl(50 100% 70% / 0.4) 0%, transparent 25%)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            
            {/* TR initials */}
            <span 
              className="font-bold relative z-10 tracking-tight select-none"
              style={{
                fontSize: size * 0.35,
                color: 'hsl(25 100% 20%)',
                textShadow: '0 0 15px hsl(50 100% 80% / 0.8), 0 1px 3px hsl(25 100% 30% / 0.5)',
              }}
            >
              TR
            </span>
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, transparent 40%, hsl(55 100% 90% / 0.35) 50%, transparent 60%)',
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
        
        {/* Solar rays */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute origin-left"
            style={{
              width: rayLength,
              height: 2,
              left: '50%',
              top: '50%',
              marginLeft: rayOffset,
              marginTop: -1,
              background: 'linear-gradient(90deg, hsl(45 100% 60% / 0.5), transparent)',
              transform: `rotate(${i * 45}deg)`,
              borderRadius: 2,
            }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scaleX: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2 + i * 0.15, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const OrbitingSkills = () => {
  const sizes = useResponsiveSizes();
  const outerSkills = useMemo(() => skills.slice(0, 4), []);
  const innerSkills = useMemo(() => skills.slice(4), []);

  return (
    <div 
      className="relative mx-auto"
      style={{
        width: sizes.mobile.container,
        height: sizes.mobile.container,
      }}
    >
      {/* Responsive container using CSS */}
      <style>{`
        @media (min-width: 640px) {
          .orbit-container {
            width: ${sizes.tablet.container}px !important;
            height: ${sizes.tablet.container}px !important;
          }
        }
        @media (min-width: 768px) {
          .orbit-container {
            width: ${sizes.desktop.container}px !important;
            height: ${sizes.desktop.container}px !important;
          }
        }
      `}</style>
      
      <div 
        className="orbit-container relative w-full h-full"
        style={{
          width: sizes.mobile.container,
          height: sizes.mobile.container,
        }}
      >
        {/* Starfield background */}
        <Starfield />
        
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent rounded-full blur-xl" />
        
        {/* Outer orbit - visible on all screens */}
        <div className="block sm:hidden">
          <OrbitRing 
            radius={sizes.mobile.outerRadius} 
            duration={22} 
            skills={outerSkills}
            startIndex={0}
            nodeSize={sizes.mobile.nodeSize}
          />
          <OrbitRing 
            radius={sizes.mobile.innerRadius} 
            duration={16} 
            reverse 
            skills={innerSkills}
            startIndex={4}
            nodeSize={sizes.mobile.nodeSize}
          />
          <CenterSun 
            size={sizes.mobile.sunSize} 
            rayLength={sizes.mobile.sunRayLength}
            rayOffset={sizes.mobile.sunRayOffset}
          />
        </div>

        {/* Tablet */}
        <div className="hidden sm:block md:hidden">
          <OrbitRing 
            radius={sizes.tablet.outerRadius} 
            duration={24} 
            skills={outerSkills}
            startIndex={0}
            nodeSize={sizes.tablet.nodeSize}
          />
          <OrbitRing 
            radius={sizes.tablet.innerRadius} 
            duration={17} 
            reverse 
            skills={innerSkills}
            startIndex={4}
            nodeSize={sizes.tablet.nodeSize}
          />
          <CenterSun 
            size={sizes.tablet.sunSize} 
            rayLength={sizes.tablet.sunRayLength}
            rayOffset={sizes.tablet.sunRayOffset}
          />
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <OrbitRing 
            radius={sizes.desktop.outerRadius} 
            duration={25} 
            skills={outerSkills}
            startIndex={0}
            nodeSize={sizes.desktop.nodeSize}
          />
          <OrbitRing 
            radius={sizes.desktop.innerRadius} 
            duration={18} 
            reverse 
            skills={innerSkills}
            startIndex={4}
            nodeSize={sizes.desktop.nodeSize}
          />
          <CenterSun 
            size={sizes.desktop.sunSize} 
            rayLength={sizes.desktop.sunRayLength}
            rayOffset={sizes.desktop.sunRayOffset}
          />
        </div>

        {/* Floating particles - reduced on mobile */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 2,
              height: 2 + Math.random() * 2,
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              background: `linear-gradient(135deg, hsl(var(--primary) / 0.5), hsl(var(--accent) / 0.5))`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
