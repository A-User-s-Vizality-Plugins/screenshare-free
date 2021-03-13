import { Plugin } from '@vizality/entities';
import { getModule } from '@vizality/webpack';
import { patch, unpatch } from "@vizality/patcher"

export default class ScreenshareFree extends Plugin {
    start () {
        patch("screenshare-free", getModule("getCurrentUser"), "getCurrentUser", (args, res) => {
            res.premiumType = 2
        })
    }

    stop () {
        unpatch("screenshare-free")
    }
}