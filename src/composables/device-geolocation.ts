import { onMounted, onUnmounted, ref } from 'vue'
import type { Ref } from 'vue'

export interface UseGeolocationOptions extends Partial<PositionOptions> {
    immediate?: boolean
}

export const useDeviceGeolocation = (options: UseGeolocationOptions = {}) => {
    const locatedAt: Ref<number | null> = ref(null)
    const error = ref<GeolocationPositionError | null>(null)
    const coords: Ref<GeolocationPosition['coords']> = ref({
        accuracy: 0,
        latitude: 0,
        longitude: 0,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null
    })

    function updatePosition(position: GeolocationPosition) {
        locatedAt.value = position.timestamp
        coords.value = position.coords
        error.value = null
    }

    let watcher: number
    onMounted(() => {
        if ('geolocation' in navigator) {
            watcher = window.navigator.geolocation.watchPosition(updatePosition, undefined, options);
        }
    });

    onUnmounted(() => {
        if (watcher) {
            window.navigator.geolocation.clearWatch(watcher);
        }
    });

    return {
        coords,
        locatedAt,
        error
    }
}
