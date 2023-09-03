<template>
    <div class="footer-container">
        <div class="footer">
            <div class="navigations">
                <a href="#Terms&Conditions" class="nav">Terms & Conditions</a>
                <a href="#Cookies" class="nav">Cookies</a>
                <a href="#Contacts" class="nav">Contacts</a>
                <a href="#Careers" class="nav">Careers</a>
                <a href="#BrandGuideUs" class="nav">Brand Guide us</a>
            </div>

            <div class="social">
                <p>Our social media:</p>

                <div class="social-icon">
                    <TwitterIcon
                        v-if="!isTwitter"
                        @mouseenter="isTwitter = true"
                    />
                    <TwitterGradientIcon
                        v-if="isTwitter"
                        @mouseleave="isTwitter = false"
                    />

                    <FacebookIcon
                        v-if="!isFacebook"
                        @mouseenter="isFacebook = true"
                    />
                    <FacebookGradientIcon
                        v-if="isFacebook"
                        @mouseleave="isFacebook = false"
                    />

                    <InstagramIcon
                        v-if="!isInstagram"
                        @mouseenter="isInstagram = true"
                    />
                    <InstagramGradientIcon
                        v-if="isInstagram"
                        @mouseleave="isInstagram = false"
                    />

                    <LinkedInIcon
                        v-if="!isLinkedIn"
                        @mouseenter="isLinkedIn = true"
                    />
                    <LinkedInGradientIcon
                        v-if="isLinkedIn"
                        @mouseleave="isLinkedIn = false"
                    />

                    <YoutubeIcon
                        v-if="!isYoutube"
                        @mouseenter="isYoutube = true"
                    />
                    <YoutubeGradientIcon
                        v-if="isYoutube"
                        @mouseleave="isYoutube = false"
                    />

                    <TikTokIcon
                        v-if="!isTiktok"
                        @mouseenter="isTiktok = true"
                    />
                    <TikTokGradientIcon
                        v-if="isTiktok"
                        @mouseleave="isTiktok = false"
                    />

                    <TelegramIcon
                        v-if="!isTelegram"
                        @mouseenter="isTelegram = true"
                    />
                    <TelegramGradientIcon
                        v-if="isTelegram"
                        @mouseleave="isTelegram = false"
                    />

                    <VkIcon v-if="!isVk" @mouseenter="isVk = true" />
                    <VkGradientIcon v-if="isVk" @mouseleave="isVk = false" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TwitterIcon from "../assets/twitter_icon.vue";
import TwitterGradientIcon from "../assets/twitter_gradient_icon.vue";
import FacebookIcon from "../assets/facebook_icon.vue";
import FacebookGradientIcon from "../assets/facebook_gradient_icon.vue";
import InstagramIcon from "../assets/instagram_icon.vue";
import InstagramGradientIcon from "../assets/instagram_gradient_icon.vue";
import LinkedInIcon from "../assets/linkedIn_icon.vue";
import LinkedInGradientIcon from "../assets/linkedIn_gradient_icon.vue";
import YoutubeIcon from "../assets/youtube_icon.vue";
import YoutubeGradientIcon from "../assets/youtube_gradient_icon.vue";
import TikTokIcon from "../assets/tiktok_icon.vue";
import TikTokGradientIcon from "../assets/tiktok_gradient_icon.vue";
import TelegramIcon from "../assets/telegram_icon.vue";
import TelegramGradientIcon from "../assets/telegram_gradient_icon.vue";
import VkIcon from "../assets/vk_icon.vue";
import VkGradientIcon from "../assets/vk_gradient_icon.vue";
</script>

<script>
export default {
    data() {
        return {
            isTwitter: false,
            isFacebook: false,
            isInstagram: false,
            isLinkedIn: false,
            isYoutube: false,
            isTiktok: false,
            isTiktok: false,
            isTelegram: false,
            isVk: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.footer {
    height: 78px;
    padding: 24px 140px;

    border-radius: 64px 64px 0px 0px;
    border: 4px solid var(--main-blue);
    border-bottom: none;

    background: #1e1231;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.navigations {
    display: flex;
    gap: 40px;
}

.nav {
    color: #fff;
    text-decoration: none;

    transition: all 0.15s;

    &:hover {
        color: var(--main-blue);
        text-decoration: underline;
    }
}

p {
    margin: 0;
    padding: 0;
}

.social {
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;

    .social-icon {
        display: flex;
        gap: 8px;
    }

    svg {
        cursor: pointer;
    }
}

@media (max-width: 767px) {
    .footer {
        height: auto;
        padding: 40px 20px 20px 20px;

        border: 2px solid var(--main-blue);
        border-bottom: none;

        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .navigations {
        flex-direction: column;
        gap: 10px;

        font-size: 14px;
        font-weight: 400;
    }

    .social {
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 8px;
    }
}
</style>