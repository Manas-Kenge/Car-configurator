import { proxy } from "valtio"

interface state {
    current: number | null;
    items: string[];
}

export const state = proxy({
    current: null,
    items: { paint: "#fff" },
})