import { ActionType } from "./types";

export const navigationSplashScreen = (navigation: any) => ({
    type: ActionType.NAVIGATION_SPLASH_SCREEN,
    data: navigation,
});