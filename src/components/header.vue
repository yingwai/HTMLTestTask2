<template>
    <div class="header-container">
        <div class="header">
            <div class="navigations">
                <a href="#AboutUs" class="nav">About us</a>
                <a href="#Brands" class="nav">Brands</a>
                <a href="#Commissions" class="nav">Commissions</a>
                <a href="#News" class="nav">News</a>
                <a href="#ContactUs" class="nav">Contact us</a>
                <a href="#Careers" class="nav">Careers</a>
            </div>

            <div class="input-menu computer">
                <div class="select-language" v-if="isLanguage">
                    <ul v-for="language in ixLanguage" :key="language">
                        <li
                            v-if="language !== sActiveLanguage"
                            @click="fSwitchLanguage(language)"
                        >
                            {{ language }}
                        </li>
                    </ul>
                </div>
                <div
                    :class="['input language', { active: isLanguage }]"
                    @click="fOpenLanguageList"
                >
                    <LanguageIcon />{{ sActiveLanguage }}
                </div>
                <div class="input">LOG IN</div>
                <div class="input full">SIGN UP</div>
            </div>

            <div class="input-menu mobile">
                <div class="select-language" v-if="isLanguage">
                    <ul v-for="language in ixLanguage" :key="language">
                        <li
                            v-if="language !== sActiveLanguage"
                            @click="fSwitchLanguage(language)"
                        >
                            {{ language }}
                        </li>
                    </ul>
                </div>
                <div
                    :class="['input language', { active: isLanguage }]"
                    @click="fOpenLanguageList"
                >
                    <LanguageIcon />
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                >
                    <path
                        d="M4.66667 21H23.3333C23.975 21 24.5 20.475 24.5 19.8333C24.5 19.1917 23.975 18.6667 23.3333 18.6667H4.66667C4.025 18.6667 3.5 19.1917 3.5 19.8333C3.5 20.475 4.025 21 4.66667 21ZM4.66667 15.1667H23.3333C23.975 15.1667 24.5 14.6417 24.5 14C24.5 13.3583 23.975 12.8333 23.3333 12.8333H4.66667C4.025 12.8333 3.5 13.3583 3.5 14C3.5 14.6417 4.025 15.1667 4.66667 15.1667ZM3.5 8.16667C3.5 8.80833 4.025 9.33333 4.66667 9.33333H23.3333C23.975 9.33333 24.5 8.80833 24.5 8.16667C24.5 7.525 23.975 7 23.3333 7H4.66667C4.025 7 3.5 7.525 3.5 8.16667Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import LanguageIcon from "../assets/language_icon.vue";
</script>

<script>
export default {
    data() {
        return {
            isLanguage: false,
            ixLanguage: {
                EN: "EN",
                DE: "DE",
                FRA: "FRA",
                RU: "RU",
            },
            sActiveLanguage: "EN",
        };
    },
    methods: {
        fOpenLanguageList() {
            this.isLanguage = !this.isLanguage;
        },
        fSwitchLanguage(language) {
            this.sActiveLanguage = language;
            this.isLanguage = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.header-container {
    z-index: 10;

    margin-top: 16px;

    display: flex;
    justify-content: center;
    position: fixed;
    right: 0;
    left: 0;
}

.header {
    width: 81%;
    padding: 20px 48px;

    background: var(--main-color);
    border-radius: 64px;
    border: 4px solid var(--main-blue);

    color: #fff;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 195px;
}

.navigations {
    display: flex;
    gap: 32px;

    .nav {
        color: #fff;
        text-decoration: none;

        transition: all 0.15s;

        &:hover {
            color: var(--main-blue);
        }
    }
}

.input-menu {
    height: 48px;

    display: flex;
    gap: 14px;

    position: relative;

    &.mobile {
        display: none;
    }

    .input {
        padding: 14px;

        border-radius: 24px;
        border: 2px solid #9dadf2;
        background: var(--main-color);

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        transition: all 0.15s;
        cursor: pointer;

        &:hover {
            background-color: #9dadf2;

            .svg-icon {
                fill: var(--main-color);
            }
        }

        &.full {
            border: none;
            background-color: var(--main-blue);

            &:hover {
                background: linear-gradient(
                    255.96deg,
                    #478bf9 0%,
                    #9dadf2 100%
                );
            }
        }

        &.language {
            width: 58px;
            position: relative;
        }

        &.active {
            background-color: #9dadf2;

            .svg-icon {
                fill: var(--main-color);
            }
        }
    }
}

.select-language {
    width: 86px;
    padding-top: 25px;

    background-color: var(--main-color);
    border-radius: 0 0 24px 24px;
    border: solid #9dadf2;
    border-width: 2px;

    position: absolute;
    top: 20px;

    ul {
        margin: 0;
        padding: 0;

        li {
            list-style-type: none;

            width: 100%;
            height: 38px;

            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;

            &:hover {
                color: #9dadf2;
            }
        }
    }
}

@media (max-width: 767px) {
    .header {
        padding: 10px 14px;

        border: 2px solid var(--main-blue);
    }
    .navigations {
        display: none;
    }

    .input-menu {
        align-items: center;
        justify-content: flex-end;

        &.computer {
            display: none;
        }
        &.mobile {
            display: flex;

            .input {
                &.language {
                    width: auto;
                }
            }
        }
    }

    .select-language {
        width: 44px;
        padding-top: 25px;
        left: 0;

        font-size: 14px;
    }
}
</style>