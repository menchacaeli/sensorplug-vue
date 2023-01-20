import { ref } from 'vue'
import type { Ref } from 'vue'

export const useDeviceOrientation = () => {
    const isAbsolute = ref(false)
    const alpha: Ref<number | null> = ref(0)
    const beta: Ref<number | null> = ref(0)
    const gamma: Ref<number | null> = ref(0)

    if (window) {
        const deviceOrientationHandler = (event: DeviceOrientationEvent) => {
            isAbsolute.value = event.absolute
            alpha.value = event.alpha
            beta.value = event.beta
            gamma.value = event.gamma
        }
        window.addEventListener('deviceorientation', deviceOrientationHandler)
    }

    return {
        isAbsolute,
        alpha,
        beta,
        gamma,
    }
}
