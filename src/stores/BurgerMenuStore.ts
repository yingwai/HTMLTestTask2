import { defineStore } from 'pinia'

export const useBurgerMenuStore = defineStore('BurgerMenuStore', {
	state: () => {
		return {
			isBurgerMenu: false,
		}
	},
	actions: {
		fSwitchBurgerMenu() {
			this.isBurgerMenu = !this.isBurgerMenu;
		}
	},
	getters: {
		getBurgerMenu(): boolean {
			return this.isBurgerMenu;
		},
	}
})
