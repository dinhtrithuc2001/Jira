import React from 'react'

export default function Loading() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{
            margin: 'auto', background: 'white', display: 'block', position: 'absolute',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
        }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <defs>
                <path id="path" d="M50 15A14 35 0 0 1 50 85A14 35 0 0 1 50 15" fill="none" />
                <path id="patha" d="M0 0A14 35 0 0 1 0 70A14 35 0 0 1 0 0" fill="none" />
            </defs><g transform="rotate(0 50 50)">
                <use xlinkHref="#path" stroke="#3b4368" strokeWidth={3} />
            </g><g transform="rotate(60 50 50)">
                <use xlinkHref="#path" stroke="#3b4368" strokeWidth={3} />
            </g><g transform="rotate(120 50 50)">
                <use xlinkHref="#path" stroke="#3b4368" strokeWidth={3} />
            </g><g transform="rotate(0 50 50)">
                <circle cx={50} cy={15} r={9} fill="#93dbe9">
                    <animateMotion dur="1s" repeatCount="indefinite" begin="0s">
                        <mpath xlinkHref="#patha" />
                    </animateMotion>
                </circle>
            </g><g transform="rotate(60 50 50)">
                <circle cx={50} cy={15} r={9} fill="#689cc5">
                    <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">
                        <mpath xlinkHref="#patha" />
                    </animateMotion>
                </circle>
            </g><g transform="rotate(120 50 50)">
                <circle cx={50} cy={15} r={9} fill="#5e6fa3">
                    <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">
                        <mpath xlinkHref="#patha" />
                    </animateMotion>
                </circle>
            </g>
        </svg>

    )
}
