import React from "react"
import Logo from "../../imgs/Logo.png"
import shoppingBag from "../../imgs/shopping-bag.png"
import Dots from "../../imgs/Dots.png"
import { LogoDivStyle } from "./LogoComponentStyle"

export function LogoDiv () {
    return (
        <LogoDivStyle className="flex flex-col">
            <img className="logo" src={Logo} alt="logo" />
            <div className="flex headline-box items-center">
                <div className="bag-icon">
                    <img src={shoppingBag} alt="bag icon" />
                </div>
                <p>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</p>
            </div>
            <img className="dots" src={Dots} alt="grey dots evenly spaced" />
        </LogoDivStyle>
    )
}