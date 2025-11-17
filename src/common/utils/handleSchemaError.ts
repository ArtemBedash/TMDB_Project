import { store } from "@/app/model/store/store"
import { setAppError } from "@/app/model/store/slices/appSlice"

type SchemaErr = {
    status?: string
    error?: string
}

export function handleSchemaError(error: unknown) {
    const err = error as SchemaErr

    if (err?.status === "CUSTOM_ERROR") {
        store.dispatch(setAppError(err.error))
    }
}