
import React from "react";

export function FailScreen() {

    return (
        <div className='options-wrapper'>

            <div className="arm-img">
                <img
                    style={{
                        transform : 'rotate(150deg)',
                        margin : 25 + 'px'
                    }}
                    src="/images/start_screen_arm.svg"
                    alt="arm-image"
                />
            </div>

            <div className='options-container'>
                <div className='options-text'>
                    <div>Something went wrong. </div>
                    <div>Try again later.</div>
                </div>
            </div>
        </div>
    )
}