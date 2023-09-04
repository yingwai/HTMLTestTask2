<template>
    <div class="main-container">
        <div class="left">
            <div class="text">
                <h1>
                    HOUSE OF <br />
                    <span style="color: var(--main-blue)">GAMBLING</span>
                </h1>
                <p>Raise your ROI with direct advertiser</p>
            </div>
            <button class="start-input">Become a Partner</button>
        </div>
        <div class="center">
            <div class="line column-1">
                <div>
                    <MoneyLognIcon />
                    <FootballIcon />
                    <MIcon />
                    <ShieldIcon />
                </div>
                <div>
                    <MoneyLognIcon />
                    <FootballIcon />
                    <MIcon />
                    <ShieldIcon />
                </div>
                <div>
                    <MoneyLognIcon />
                    <FootballIcon />
                    <MIcon />
                    <ShieldIcon />
                </div>
            </div>
            <div class="line column-2">
                <div>
                    <WorldLongIcon />
                    <MIcon style="fill: #fff" />
                    <TimerIcon />
                    <CrownIcon />
                </div>
                <div>
                    <WorldLongIcon />
                    <MIcon style="fill: #fff" />
                    <TimerIcon />
                    <CrownIcon />
                </div>
                <div>
                    <WorldLongIcon />
                    <MIcon style="fill: #fff" />
                    <TimerIcon />
                    <CrownIcon />
                </div>
            </div>
            <div class="line column-3">
                <div>
                    <CrownLongIcon />
                    <MIcon style="fill: var(--main-blue)" />
                    <ShieldIcon />
                    <FootballIcon style="fill: #fff" />
                </div>
                <div>
                    <CrownLongIcon />
                    <MIcon style="fill: var(--main-blue)" />
                    <ShieldIcon />
                    <FootballIcon style="fill: #fff" />
                </div>
                <div>
                    <CrownLongIcon />
                    <MIcon style="fill: var(--main-blue)" />
                    <ShieldIcon />
                    <FootballIcon style="fill: #fff" />
                </div>
            </div>

            <div class="fg-gradient"></div>
        </div>
        <div class="right">
            <h3>BLOG</h3>
            <div class="blog-container">
                <div class="blog-list" id="blog-list">
                    <div class="blog" v-for="i in 5" :key="i">
                        <h5>
                            Payment methods: Skrill, Neteller, webmoney, Bank
                            transfer
                        </h5>
                        <p>10.02.2023</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="burger-menu" v-if="BurgerMenuStore.getBurgerMenu">
            <div class="burger-navigation">
                <div href="#AboutUs" class="nav"><p>About us</p></div>
                <div href="#Brands" class="nav"><p>Brands</p></div>
                <div href="#Commissions" class="nav"><p>Commissions</p></div>
                <div href="#News" class="nav"><p>News</p></div>
                <div href="#ContactUs" class="nav"><p>Contact us</p></div>
                <div href="#Careers" class="nav"><p>Careers</p></div>
            </div>

            <div class="burger-input">
                <div class="input"><p>LOG IN</p></div>
                <div class="input full"><p>SIGN UP</p></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MoneyLognIcon from "../assets/money_long_icon.vue";
import FootballIcon from "../assets/football_icon.vue";
import MIcon from "../assets/m_icon.vue";
import ShieldIcon from "../assets/shield_icon.vue";
import WorldLongIcon from "../assets/world_long_icon.vue";
import TimerIcon from "../assets/timer_icon.vue";
import CrownIcon from "../assets/crown_icon.vue";
import CrownLongIcon from "../assets/crown_long_icon.vue";
import { useBurgerMenuStore } from "../stores/BurgerMenuStore";

export default {
    components: {
        MoneyLognIcon,
        FootballIcon,
        MIcon,
        ShieldIcon,
        WorldLongIcon,
        TimerIcon,
        CrownIcon,
        CrownLongIcon,
    },
    data() {
        return {
            BurgerMenuStore: useBurgerMenuStore(),
        };
    },
};
</script>

<style lang="scss" scoped>
.main-container {
    z-index: 5;

    color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    position: relative;
}

p {
    margin: 0;
    padding: 0;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .text {
        display: flex;
        flex-direction: column;
        gap: 24px;

        h1 {
            margin: 0;
            padding: 0;

            font-size: 96px;
            font-style: normal;
            font-weight: 500;
            line-height: 96px;
        }

        p {
            color: #ffffff9c;

            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
        }
    }

    .start-input {
        width: 393px;
        padding: 20px 0;

        border-radius: 48px;
        background: var(--main-blue);
        color: #fff;
        border: none;

        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        text-transform: uppercase;

        cursor: pointer;
    }
}

.right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h3 {
        margin: 0;
        padding: 0;

        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px;
    }

    .blog-container {
        width: 525px;
        height: 541px;
        padding: 24px 0;

        border-radius: 100px;
        border: 3px solid var(--main-blue);
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(10px);

        overflow: hidden;

        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }

    .blog-list {
        width: 95%;
        height: 100%;
        padding: 24px 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;

        overflow-y: scroll;
        scroll-behavior: smooth;

        .blog {
            width: 339px;
            min-height: 114px;
            padding: 16px 64px;

            border-radius: 196px;
            background-color: #1e1231;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            cursor: pointer;

            h5 {
                margin: 0;
                padding: 0;

                font-size: 24px;
                font-style: normal;
                font-weight: 300;
                line-height: 28px;
            }

            p {
                color: #ffffff99;
                font-family: Futura PT;
                font-size: 15px;
                font-style: normal;
                font-weight: 450;
                line-height: 16px;
            }

            &:hover {
                background-color: var(--main-blue);
            }
        }

        /* width */
        &::-webkit-scrollbar {
            width: 8px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.12);
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: var(--main-blue);
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #3d79d8;
        }
    }
}

.center {
    height: 1030px;

    display: flex;
    gap: 18px;

    overflow: hidden;

    position: relative;

    .fg-gradient {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: linear-gradient(
            180deg,
            #120a1e 0%,
            rgba(255, 255, 255, 0) 13%,
            rgba(252, 252, 252, 0) 86%,
            #120a1e 100%
        );
    }
}

.line {
    display: flex;
    flex-direction: column;
    gap: 25px;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    &.column-1 {
        opacity: 0.2;

        & > div {
            animation: vertical-down-marquee 30s infinite linear;
        }
    }
    &.column-2 {
        opacity: 0.5;

        & > div {
            animation: vertical-up-marquee 35s infinite linear;
        }
    }
    &.column-3 {
        opacity: 0.4;

        & > div {
            animation: vertical-down-marquee 40s infinite linear;
        }
    }
}

.burger-menu {
    display: none;
}

@keyframes vertical-down-marquee {
    0% {
        transform: translateY(-100%);
    }
    50% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-100%);
    }
}

@keyframes vertical-up-marquee {
    0% {
        transform: translateY(-5%);
    }
    50% {
        transform: translateY(-110%);
    }
    100% {
        transform: translateY(-5%);
    }
}

@keyframes horizontal-down-marquee {
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes horizontal-up-marquee {
    0% {
        transform: translateX(-5%);
    }
    50% {
        transform: translateX(-110%);
    }
    100% {
        transform: translateX(-5%);
    }
}

@media (max-width: 1680px) {
    .left {
        .text {
            h1 {
                font-size: 76px;
                font-style: normal;
                font-weight: 500;
                line-height: 70px;
            }

            p {
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px;
            }
        }
    }
}

@media (max-width: 1400px) {
    .right {
        width: 33%;

        .blog-container {
            width: 100%;
            height: 541px;
            padding: 24px 0;

            border: 2px solid var(--main-blue);

            display: flex;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
        }

        .blog-list {
            width: 95%;
            height: 100%;
            padding: 24px 0;

            .blog {
                width: 65%;
                padding: 16px 40px;
                justify-content: space-around;

                h5 {
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 20px;
                }

                p {
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 450;
                    line-height: 10px;
                }
            }
        }
    }
}

@media (max-width: 1200px) {
    .main-container {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .left {
        .text {
            gap: 24px;
            text-align: center;

            h1 {
                font-size: 65px;
                font-style: normal;
                font-weight: 500;
                line-height: 60px;
            }

            p {
                font-size: 30px;
                font-style: normal;
                font-weight: 500;
                line-height: 30px;
            }
        }

        .start-input {
            width: 100%;
            padding: 15px 0;

            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            text-transform: uppercase;
        }
    }

    .center {
        height: 400px;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 18px;

        overflow: hidden;

        position: relative;

        .fg-gradient {
            background: linear-gradient(
                90deg,
                #120a1e 0%,
                rgba(255, 255, 255, 0) 13%,
                rgba(252, 252, 252, 0) 86%,
                #120a1e 100%
            );
        }
    }

    .line {
        height: 100px;

        display: flex;
        flex-direction: row;
        gap: 135px;

        & > div {
            display: flex;
            flex-direction: row;
            gap: 25px;
        }

        &.column-1 {
            opacity: 0.2;

            & > div {
                animation: horizontal-down-marquee 30s infinite linear;
            }
        }
        &.column-2 {
            opacity: 0.5;

            & > div {
                animation: horizontal-up-marquee 35s infinite linear;
            }
        }
        &.column-3 {
            opacity: 0.4;

            & > div {
                animation: horizontal-down-marquee 40s infinite linear;
            }
        }
    }

    .right {
        width: 100%;

        .blog-container {
            width: 100%;
            height: 541px;
            padding: 24px 0;

            border: 2px solid var(--main-blue);

            display: flex;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
        }

        .blog-list {
            width: 95%;
            height: 100%;
            padding: 24px 0;

            .blog {
                width: 85%;
                padding: 16px 40px;
                justify-content: space-around;

                h5 {
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 24px;
                }

                p {
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 450;
                    line-height: 10px;
                }
            }
        }
    }

    .burger-menu {
        padding: 130px 10px 10px 10px;
        display: flex;

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: var(--main-color);

        display: flex;
        flex-direction: column;
        gap: 30px;

        .burger-navigation {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 5px;

            .nav {
                width: 100%;
                padding: 13px 0;

                border-radius: 28px;
                border: 2px solid var(--main-blue);
                background: var(--main-color);

                p {
                    margin: 0 20px;

                    font-size: 18px;
                    font-weight: 400;
                }
            }
        }

        .burger-input {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 5px;

            .input {
                width: 100%;
                padding: 13px 0;

                border-radius: 28px;
                border: 2px solid #9dadf2;
                background: var(--main-color);

                text-align: center;

                p {
                    margin: 0 20px;

                    font-size: 18px;
                    font-weight: 400;
                }

                &.full {
                    border: none;
                    background-color: var(--main-blue);
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .main-container {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .left {
        .text {
            gap: 24px;
            text-align: center;

            h1 {
                font-size: 56px;
                font-style: normal;
                font-weight: 500;
                line-height: 60px;
            }

            p {
                font-size: 26px;
                font-style: normal;
                font-weight: 500;
                line-height: 26px;
            }
        }

        .start-input {
            width: 100%;
            padding: 15px 0;

            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            text-transform: uppercase;
        }
    }

    .center {
        height: 400px;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 18px;

        overflow: hidden;

        position: relative;

        .fg-gradient {
            background: linear-gradient(
                90deg,
                #120a1e 0%,
                rgba(255, 255, 255, 0) 13%,
                rgba(252, 252, 252, 0) 86%,
                #120a1e 100%
            );
        }
    }

    .line {
        height: 100px;

        display: flex;
        flex-direction: row;
        gap: 135px;

        & > div {
            display: flex;
            flex-direction: row;
            gap: 25px;
        }

        &.column-1 {
            opacity: 0.2;

            & > div {
                animation: horizontal-down-marquee 30s infinite linear;
            }
        }
        &.column-2 {
            opacity: 0.5;

            & > div {
                animation: horizontal-up-marquee 35s infinite linear;
            }
        }
        &.column-3 {
            opacity: 0.4;

            & > div {
                animation: horizontal-down-marquee 40s infinite linear;
            }
        }
    }

    .right {
        width: 100%;

        .blog-container {
            width: 100%;
            height: 541px;
            padding: 24px 0;

            border: 2px solid var(--main-blue);

            display: flex;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
        }

        .blog-list {
            width: 95%;
            height: 100%;
            padding: 24px 0;

            .blog {
                width: 65%;
                padding: 16px 40px;
                justify-content: space-around;

                h5 {
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 20px;
                }

                p {
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 450;
                    line-height: 10px;
                }
            }
        }
    }

    .burger-menu {
        padding: 130px 10px 10px 10px;
        display: flex;

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: var(--main-color);

        display: flex;
        flex-direction: column;
        gap: 30px;

        .burger-navigation {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 5px;

            .nav {
                width: 100%;
                padding: 13px 0;

                border-radius: 28px;
                border: 2px solid var(--main-blue);
                background: var(--main-color);

                p {
                    margin: 0 20px;

                    font-size: 18px;
                    font-weight: 400;
                }
            }
        }

        .burger-input {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 5px;

            .input {
                width: 100%;
                padding: 13px 0;

                border-radius: 28px;
                border: 2px solid #9dadf2;
                background: var(--main-color);

                text-align: center;

                p {
                    margin: 0 20px;

                    font-size: 18px;
                    font-weight: 400;
                }

                &.full {
                    border: none;
                    background-color: var(--main-blue);
                }
            }
        }
    }
}
</style>